import Elysia, { t } from 'elysia'
import { auth } from '../auth'
import { db } from '../../db/connection'
import { orders } from '../../db/schema'
import { eq } from 'drizzle-orm'

export const cancelOrder = new Elysia()
    .use(auth)
    .patch('/orders/:orderId/cancel', async ({ getCurrentUser, set, params }) => {

        const { orderId } = params
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

        const order = await db.query.orders.findFirst({
            where(fields, { eq, and }) {
                return and(
                    eq(fields.id, orderId),
                    eq(fields.restaurantId, restaurantId),
                )
            },
        })

        if (!order) {
            set.status = 400 // Bad Request
            return { message: 'Order not found.' }
        }

        // Se um pedido estiver com status 'pending' ou 'processing' podem ser cancelados
        if (!['pending', 'processing'].includes(order.status)) {
            set.status = 400
            return { message: 'You cannot cancel orders after dispatch.' }
        }

        await db
            .update(orders)
            .set({ status: 'canceled' })
            .where(eq(orders.id, orderId))
    },
        {
            params: t.Object({
                orderId: t.String(),
            }),
        },
    )