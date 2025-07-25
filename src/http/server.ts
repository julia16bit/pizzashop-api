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
import { getOrderDetails } from './routes/get-order-details';
import { approveOrder } from './routes/approve-orders';
import { cancelOrder } from './routes/cancel-order';
import { deliverOrder } from './routes/deliver-order';
import { dispatchOrder } from './routes/dispatch-order';
import { getOrders } from './routes/get-orders';
import { getMonthReceipt } from './routes/get-month-receipt';
import { getDayOrdersAmount } from './routes/get-day-orders-amount';
import { getMonthOrdersAmount } from './routes/get-month-orders-amount';
import { getMonthCanceledOrdersAmount } from './routes/get-month-canceled-orders-amount';
import { getPopularProducts } from './routes/get-popular-products';
import { getDailyReceiptInPeriod } from './routes/get-daily-receipt-in-period';

const app = new Elysia()
    .use(registerRestaurant)
    .use(sendAuthLink)
    .use(authenticateFromLink)
    .use(signOut)
    .use(getProfile)
    .use(getManagedRestaurant)
    .use(getOrderDetails)
    .use(approveOrder)
    .use(cancelOrder)
    .use(deliverOrder)
    .use(dispatchOrder)
    .use(getOrders)
    .use(getMonthReceipt)
    .use(getDayOrdersAmount)
    .use(getMonthOrdersAmount)
    .use(getMonthCanceledOrdersAmount)
    .use(getPopularProducts)
    .use(getDailyReceiptInPeriod)

app.listen(3333, () => {
    console.log('HTTP server running!')
})