import Elysia from 'elysia'
import { auth } from '../auth'
import dayjs from 'dayjs'
import { db } from '../../db/connection'
import { orders } from '../../db/schema'
import { and, eq, gte, sql, sum } from 'drizzle-orm'

export const getMonthReceipt = new Elysia()
    .use(auth)
    .get('/metrics/month-receipt', async ({ getCurrentUser, set }) => {

        const user = await getCurrentUser()

        if (!user) {
            set.status = 401 // Unauthorized
            throw new Error('User not authenticated.')
        }

        const { restaurantId } = user

        if (!restaurantId) {
            set.status = 403 // Forbidden
            throw new Error('User is not a manager or not associated with a restaurant.')
        }

        const today = dayjs()
        const lastMonth = today.subtract(1, 'month')
        const startOfLastMonth = lastMonth.startOf('month')

        const monthsReceipts = await db
            .select({
                monthWithYear: sql<string>`TO_CHAR(${orders.createdAt}, 'YYYY-MM')`,
                receipt: sum(orders.totalInCents).mapWith(Number),
            })
            .from(orders)
            .where(
                and(
                    eq(orders.restaurantId, restaurantId),
                    gte(orders.createdAt, startOfLastMonth.toDate()),
                ),
            )
            .groupBy(sql`TO_CHAR(${orders.createdAt}, 'YYYY-MM')`)

        const currentMonthWithYear = today.format('YYYY-MM') // 2024-02
        const lastMonthWithYear = lastMonth.format('YYYY-MM') // 2024-01

        const currentMonthReceipt = monthsReceipts.find((monthReceipt) => {
            return monthReceipt.monthWithYear === currentMonthWithYear
        })

        const lastMonthReceipt = monthsReceipts.find((monthReceipt) => {
            return monthReceipt.monthWithYear === lastMonthWithYear
        })

        const diffFromLastMonth =
            currentMonthReceipt && lastMonthReceipt
                ? (currentMonthReceipt.receipt * 100) / lastMonthReceipt.receipt
                : null

        return {
            receipt: currentMonthReceipt?.receipt || 0,
            diffFromLastMonth: diffFromLastMonth
                ? Number((diffFromLastMonth - 100).toFixed(2))
                : 0,
        }
    })