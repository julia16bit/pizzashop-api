import Elysia, { t } from 'elysia'
import { auth } from '../auth'
import { db } from '../../db/connection'
import { createSelectSchema } from 'drizzle-typebox'
import { orders, users } from '../../db/schema'
import { and, count, eq, ilike, desc, sql } from 'drizzle-orm'

export const getOrders = new Elysia()
    .use(auth)
    // GET
    .get('/orders',
        async ({ getCurrentUser, query, set }) => {
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

            const { customerName, orderId, status, pageIndex } = query

            // Garante que 'safePageIndex' será um número válido ou 0 como fallback
            const rawPageIndex = Number(pageIndex)
            const safePageIndex = Number.isFinite(rawPageIndex) ? rawPageIndex : 0


            // Query Base
            const baseQuery = db
                .select({
                    orderId: orders.id,
                    createdAt: orders.createdAt,
                    status: orders.status,
                    total: orders.totalInCents,
                    customerName: users.name,
                })
                .from(orders)
                // 'innerjoin' para obter o nome do usuário, pois somente é armazenado o id do customer
                .innerJoin(users, eq(users.id, orders.customerId))
                .where(
                    and( // Todas as condições que estiverem dentro do 'where' devem ser satisfeitas devido ao 'and'
                        eq(orders.restaurantId, restaurantId),
                        orderId ? ilike(orders.id, `%${orderId}%`) : undefined, // Se conter em parte o 'orderId' aplica-se o filtro, caso contrário, ele é 'undefined'
                        status ? eq(orders.status, status) : undefined,
                        customerName ? ilike(users.name, `%${customerName}%`) : undefined,
                    ),
                )

            // Conta o número total de pedidos que satisfazem os filtros (para paginação)
            const [amountOfOrdersQuery] = await Promise.all([
                db.select({ count: count() }).from(baseQuery.as('baseQuery')),
            ])

            const amountOfOrders = amountOfOrdersQuery[0]?.count ?? 0;

            // Busca 10 pedidos por página, com base no pageIndex (para paginação frontend)
            const allOrders = await baseQuery
                .offset(safePageIndex * 10)
                .limit(10)
                .orderBy((fields) => {
                    return [
                        // Organiza o status por prioridade (pending primeiro, canceled por último)
                        sql`CASE ${fields.status}
                            WHEN 'pending' THEN 1
                            WHEN 'processing' THEN 2
                            WHEN 'delivering' THEN 3
                            WHEN 'delivered' THEN 4
                            WHEN 'canceled' THEN 99
                        END`,
                        desc(fields.createdAt), // Mais recentes primeiro
                    ]
                })

            // Retorna os pedidos paginados e metadados da paginação (como total e página atual)
            return {
                orders: allOrders,
                meta: {
                    pageIndex: safePageIndex,
                    perPage: 10,
                    totalCount: amountOfOrders,
                },
            }
        },
        // Schema da query string com filtros opcionais para busca de pedidos
        {
            query: t.Object({
                customerName: t.Optional(t.String()),
                orderId: t.Optional(t.String()),
                // Usando o drizzle-typebox para criar um schema personalizado do enum de 'status' na query
                status: t.Optional(createSelectSchema(orders).properties.status),
                pageIndex: t.Optional(t.Numeric({ minimum: 0 })),
            }),
        },
    )
