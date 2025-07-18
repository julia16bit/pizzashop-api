import Elysia from "elysia";
import { auth } from "../auth";

export const signOut = new Elysia()
    .use(auth)
    .post('/sign-out', async ({ cookie: { auth } }) => {
        auth!.set({
                value: '',
                httpOnly: true,
                maxAge: 0, 
                path: '/',
        });
    })