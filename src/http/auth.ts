import jwt from "@elysiajs/jwt";
import Elysia, { t, type Static } from "elysia";
import { env } from "../env";

const jwtPayload = t.Object({
    sub: t.String(),
    restaurantId: t.Optional(t.String()),
})

export const auth = new Elysia()
  .use(
    jwt({
      secret: env.JWT_SECRET_KEY,
      schema: jwtPayload,
    }),
  )
  .derive({ as: 'scoped' }, ({ jwt, cookie: { auth } }) => {
    return {
    signUser: async (payload: Static<typeof jwtPayload>) => {
        const token = await jwt.sign(payload)
        auth!.set({
                    value: token,
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 7,
                    path: '/',
        });
    },

    getCurrentUser : async () => {
        const token = auth?.value;
        if (!token) {
            return null;
        }
        try {
            const userPayload = await jwt.verify(token);
            if (!userPayload) {
                return null;
            }
            return {
                userId: userPayload.sub,
                restaurantId: userPayload.restaurantId,
            }
        } catch (error) {
            console.error("Unauthorized!", error);
            auth.remove();
            return null;
        }
    },
}
})