import { text, timestamp, pgTable, pgEnum, integer } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { users } from "./users";

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
        .references(() => users.id, {
            onDelete: 'cascade',
        }),
    status: orderStatusEnum('status').default('pending').notNull(),
    // 'totalInCents' evita a necessidade de criar um join no db para calcular uma receita
    totalInCents: integer('total_in_cents').notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});