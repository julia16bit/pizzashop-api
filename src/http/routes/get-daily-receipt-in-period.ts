import Elysia, { t } from 'elysia'
import { auth } from '../auth'
import dayjs from 'dayjs'
import { db } from '../../db/connection'
import { orders } from '../../db/schema'
import { and, eq, gte, lte, sql, sum } from 'drizzle-orm'

export const getDailyReceiptInPeriod = new Elysia()
    .use(auth)
    .get('/metrics/daily-receipt-in-period', async ({ getCurrentUser, query, set }) => {
        
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
        const { from, to } = query

        const startDate = from ? dayjs(from) : dayjs().subtract(7, 'days')
        const endDate = to ? dayjs(to) : from ? startDate.add(7, 'days') : dayjs()

        if (endDate.diff(startDate, 'days') > 7) {
            set.status = 400

            return {
                message: 'You cannot list receipt in a large period than 7 days.',
            }
        }

        const receiptPerDay = await db
            .select({
                date: sql<string>`TO_CHAR(${orders.createdAt}, 'DD/MM')`,
                receipt: sum(orders.totalInCents).mapWith(Number),
            })
            .from(orders)
            .where(
                and(
                    eq(orders.restaurantId, restaurantId),
                    gte(
                        orders.createdAt,
                        startDate
                            .startOf('day')
                            .add(startDate.utcOffset(), 'minutes')
                            .toDate(),
                    ),
                    lte(
                        orders.createdAt,
                        endDate.endOf('day').add(startDate.utcOffset(), 'minutes').toDate(),
                    ),
                ),
            )
            .groupBy(sql`TO_CHAR(${orders.createdAt}, 'DD/MM')`)

        const orderedReceiptPerDay = receiptPerDay.sort((a, b) => {
            const [dayA, monthA] = a.date.split('/').map(Number)
            const [dayB, monthB] = b.date.split('/').map(Number)

            if (monthA === monthB) {
                return dayA! - dayB!
            } else {
                const dateA = new Date(2024, monthA! - 1)
                const dateB = new Date(2024, monthB! - 1)

                return dateA.getTime() - dateB.getTime()
            }
        })

        return orderedReceiptPerDay
    },
    {
        query: t.Object({
            from: t.Optional(t.String()),
            to: t.Optional(t.String()),
        }),
    },
)