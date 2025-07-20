import { text, timestamp, pgTable, pgEnum, integer } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { users } from "./users";
import { orders } from "./orders";

export const ordersItems = pgTable("order_items", {
    id: text("id").$defaultFn(() => createId()).primaryKey(),
    orderId: text("order_id")
        .notNull()
        .references(() => orders.id, {
            onDelete: 'cascade',
        }),
    productId: text("product_id")
        .references(() => users.id, {
            onDelete: 'set null',
        }),
    priceInCentes: integer('price_in_cents').notNull(),
    quantity: integer('quantity').notNull(),
});