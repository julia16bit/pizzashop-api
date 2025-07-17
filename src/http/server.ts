import { Elysia, t } from 'elysia';
import { db } from '../db/connection';
import { restaurants, users } from '../db/schema';
import { registerRestaurant } from './routes/register-restaurant';
import { sendAuthLink } from './routes/send-auth-link';
import jwt from '@elysiajs/jwt';
import { env } from '../env';
import { authenticateFromLink } from './routes/autheticate-from-link';

const app = new Elysia()
    .use(registerRestaurant)
    .use(sendAuthLink)
    .use(authenticateFromLink)

app.listen(3333, () => {
    console.log('HTTP server running!')
})