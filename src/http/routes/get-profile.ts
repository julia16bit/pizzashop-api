import Elysia from "elysia";
import { auth } from "../auth";
import { db } from "../../db/connection";

export const getProfile = new Elysia()
    .use(auth)
    .get('/me', async ({ getCurrentUser, set }) => {
        const userPayload = await getCurrentUser();

        // Passo 1: Lidar com o caso de usuário não autenticado (userPayload é null)
        if (!userPayload) {
            set.status = 401; // HTTP Status: Não Autorizado
            return { message: 'Unauthorized' };
        }

        // Passo 2: Extrair o ID do usuário do payload do JWT
        const userId = userPayload.userId;

        // Passo 3: Buscar os detalhes completos do usuário no banco de dados
        const user = await db.query.users.findFirst({
            where(fields, { eq }) {
                return eq(fields.id, userId);
            },
        });

        // Passo 4: Lidar com o caso de usuário não encontrado no banco de dados
        if (!user) {
            set.status = 404; // HTTP Status: Não Encontrado
            return { message: 'User not found!' };
        }

        // Passo 5: Retornar os dados do perfil
        return user
    });