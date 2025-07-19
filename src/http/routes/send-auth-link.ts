import Elysia, { t } from "elysia";
import { db } from "../../db/connection";
import { authLinks, users } from "../../db/schema";
import { eq } from 'drizzle-orm'
import { createId } from "@paralleldrive/cuid2";
import { env } from "../../env";
import { mail } from "../../lib/mail";
import nodemailer from 'nodemailer';

export const sendAuthLink = new Elysia().post('/authenticate', async ({ body }) => {
    const { email } = body

    const userFromEmail = await db.query.users.findFirst({
        where(fields, { eq }) {
            return eq(fields.email, email)
        },
    })

    if (!userFromEmail) {
        throw new Error('User not found!')
    }

    const authLinkCode = createId()

    await db.insert(authLinks).values({
        userId: userFromEmail.id,
        code: authLinkCode,
    })

    const authLink = new URL('/auth-links/authenticate', env.API_BASE_URL)

    authLink.searchParams.set('code', authLinkCode)
    authLink.searchParams.set('redirect', env.AUTH_REDIRECT_URL)

    const info = await mail.sendMail({
        from: {
            name: 'Pizza Shop',
            address: 'hi@pizzashop.com'
        },
        to: email,
        subject: 'Autheticate to Pizza Shop',
        text: `Use the following link to authenticate in Pizza Shop: ${authLink.toString()}`
    })

    console.log(nodemailer.getTestMessageUrl(info))

}, {
    body: t.Object({
        email: t.String({ format: 'email' }),

    }),
})