import Elysia, { t } from 'elysia'
import { auth } from '../auth'
import { db } from '../../db/connection'
import { orders } from '../../db/schema'
import { eq } from 'drizzle-orm'

export const dispatchOrder = new Elysia()
    .use(auth)
    // PATCH
    .patch('/orders/:orderId/dispatch', async ({ getCurrentUser, set, params }) => {

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
            where(fields, { eq }) {
                return eq(fields.id, orderId)
            },
        })

        if (!order) {
            set.status = 400

            return { message: 'Order not found.' }
        }

        if (order.status !== 'processing') {
            set.status = 400

            return {
                message:
                    'You cannot dispatch orders that are not in "processing" status.',
            }
        }

        await db
            .update(orders)
            .set({ status: 'delivering' })
            .where(eq(orders.id, orderId))
    },
        {
            params: t.Object({
                orderId: t.String(),
            }),
        },
    )