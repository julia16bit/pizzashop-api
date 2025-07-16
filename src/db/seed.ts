import { faker } from '@faker-js/faker';
import { users, restaurants} from './schema';
import { db } from './connection';
import chalk from 'chalk';

/* Reseta o Banco de Dados */

await db.delete(users)
await db.delete(restaurants)

console.log(chalk.yellowBright('Database reset!'))

/* Cria Customers */

await db.insert(users).values([
    {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: 'customer',
    },
    {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        role: 'customer',
    },
])

console.log(chalk.yellowBright('Created customers!'))

/* Cria Manager */

const [manager] = await db.insert(users).values([
    {
        name: faker.person.fullName(),
        email: 'admin@admin.com',
        role: 'manager',
    },
]).returning({
    id: users.id,
})

console.log(chalk.yellowBright('Created manager!'))

/* Cria Restaurant */

await db.insert(restaurants).values([
    {
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        managerId: manager?.id,
    },
])

console.log(chalk.yellowBright('Created restaurant!'))

console.log(chalk.greenBright('Databse seeded successfully!'))

process.exit()