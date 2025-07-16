import { Elysia, t } from 'elysia';
import { db } from '../db/connection';
import { restaurants, users } from '../db/schema';
import { registerRestaurant } from './routes/register-restaurant';
import { sendAuthLink } from './routes/send-auth-link';
import jwt from '@elysiajs/jwt';
import { env } from '../env';
import cookie from '@elysiajs/cookie';

const app = new Elysia()
    .use(registerRestaurant)
    .use(sendAuthLink)
    .use(jwt({
        secret: env.JWT_SECRET_KEY,
        schema: t.Object({
            sub:t.String(),
            restaurantId: t.Optional(t.String()),
        }),
    }))
    .use(cookie())

app.listen(3333, () => {
    console.log('HTTP server running!')
})