import Elysia, { t } from "elysia";
import { db } from "../../db/connection";

export const authenticateFromLink = new Elysia().get('/auth-links/authenticate', 
    async ({ query }) => {
        const { code, redirect } = query

        const authLinkFromCode = await db.query.authLinks.findFirst({
            where(fields, { eq }) {
                return eq(fields.code, code)
            },
        })

        if (!authLinkFromCode) {
            throw new Error('Auth link not found!')
        }
    },
    {
        query: t.Object({
            code: t.String(),
            redirect: t.String(),
        })
    }
)