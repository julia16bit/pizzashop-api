import Elysia from 'elysia'
import { auth } from '../auth'
import { db } from '../../db/connection'
import { orderItems, orders, products } from '../../db/schema'
import { desc, eq, sum } from 'drizzle-orm'

export const getPopularProducts = new Elysia()
    .use(auth)
    .get('/metrics/popular-products', async ({ getCurrentUser, set }) => {
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

        const popularProducts = await db
            .select({
                product: products.name,
                amount: sum(orderItems.quantity).mapWith(Number),
            })
            .from(orderItems)
            .leftJoin(orders, eq(orders.id, orderItems.orderId))
            .leftJoin(products, eq(products.id, orderItems.productId))
            .where(eq(orders.restaurantId, restaurantId))
            .groupBy(products.name)
            .orderBy((fields) => {
                return desc(fields.amount)
            })
            .limit(5)

        return popularProducts
    })