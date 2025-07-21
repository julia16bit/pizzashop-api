import Elysia, { t } from 'elysia'
import { auth } from '../auth'
import { db } from '../../db/connection'

export const getOrderDetails = new Elysia()
    .use(auth)
    // GET
    .get('/orders/:orderId', async ({ getCurrentUser, params, set }) => {
        
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
            columns: {
                id: true,
                status: true,
                totalInCents: true,
                createdAt: true,
            },
            with: {
                customer: {
                    columns: {
                        name: true,
                        phone: true,
                        email: true,
                    },
                },
                orderItems: {
                    columns: {
                        id: true,
                        priceInCents: true,
                        quantity: true,
                    },
                    with: {
                        product: {
                            columns: {
                                name: true,
                            },
                        },
                    },
                },
            },
            where(fields, { eq }) {
                return eq(fields.id, orderId)
            },
        })

        if (!order) {
            set.status = 400 // Bad Request
            return { message: 'Order not found.' }
        }

        return order
    },
        {
            params: t.Object({
                orderId: t.String(),
            }),
        },
    )