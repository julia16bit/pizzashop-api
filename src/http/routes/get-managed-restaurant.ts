import Elysia from "elysia";
import { auth } from "../auth";
import { db } from "../../db/connection";

export const getManagedRestaurant = new Elysia()
    .use(auth)
    .get('/managed-restaurant', async ({ getCurrentUser, set }) => {
        const userPayload = await getCurrentUser();

        if (!userPayload) {
            set.status = 401;
            throw new Error('Unauthorized');
        }

        const { restaurantId } = userPayload;

        if (!restaurantId) {
            set.status = 403;
            throw new Error('User is not a manager!');
        }

        const restaurant = await db.query.restaurants.findFirst({
            where(fields, { eq }) {
                return eq(fields.id, restaurantId);
            },
        });

        if (!restaurant) {
            set.status = 404;
            throw new Error('Managed restaurant not found.');
        }

        return restaurant;
    });