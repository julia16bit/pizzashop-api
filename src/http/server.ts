import { Elysia, t } from 'elysia';
import { db } from '../db/connection';
import { restaurants, users } from '../db/schema';
import { registerRestaurant } from './routes/register-restaurant';
import { sendAuthLink } from './routes/send-auth-link';
import jwt from '@elysiajs/jwt';
import { env } from '../env';
import { authenticateFromLink } from './routes/autheticate-from-link';
import { singlestoreDatabase } from 'drizzle-orm/singlestore-core';
import { signOut } from './routes/sign-out';
import { getProfile } from './routes/get-profile';
import { getManagedRestaurant } from './routes/get-managed-restaurant';

const app = new Elysia()
    .use(registerRestaurant)
    .use(sendAuthLink)
    .use(authenticateFromLink)
    .use(signOut)
    .use(getProfile)
    .use(getManagedRestaurant)

app.listen(3333, () => {
    console.log('HTTP server running!')
})