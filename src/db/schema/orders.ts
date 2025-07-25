import { text, timestamp, pgTable, pgEnum, integer } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { restaurants } from "./restaurants";
import { orderItems } from "./order-items";

export const orderStatusEnum = pgEnum('order_status', [
    'pending', // Pendente
    'processing', // Processando
    'delivering', // Enviando
    'delivered', // Entregue
    'canceled', // Cancelado
])

export const orders = pgTable("orders", {
    id: text("id").$defaultFn(() => createId()).primaryKey(),
    // Customer se refere ao usuario que faz um pedido no restaurante
    customerId: text("customer_id")
        .references(() => users.id, {
            // 'set null' para não perder o histórico de pedidos
            onDelete: 'set null',
        }),
    restaurantId: text("restaurant_id")
        .notNull()
        .references(() => restaurants.id, {
            onDelete: 'cascade',
        }),
    status: orderStatusEnum('status').default('pending').notNull(),
    // 'totalInCents' evita a necessidade de criar um join no db para calcular uma receita
    totalInCents: integer('total_in_cents').notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const ordersRelations = relations(orders, ({ one, many }) => {
    return {
        customer: one(users, {
            fields: [orders.customerId],
            references: [users.id],
            relationName: 'order_customer',
        }),
        restaurant: one(restaurants, {
            fields: [orders.restaurantId],
            references: [restaurants.id],
            relationName: 'order_restaurant',
        }),
        orderItems: many(orderItems),
    }
})