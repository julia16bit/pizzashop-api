<h2 align="center">🍕 Pizza Shop API</h2>
<p align="center">
  API RESTful para gerenciamento completo de pizzarias, construída com Bun, ElysiaJS, Drizzle e PostgreSQL.
</p>

<p align="center">
  <img alt="Bun" src="https://img.shields.io/badge/Bun-2E3849?style=for-the-badge&logo=bun&logoColor=white&color=2E3849&labelColor=2E3849" />
  <img alt="ElysiaJS" src="https://img.shields.io/badge/ElysiaJS-2E3849?style=for-the-badge&logo=javascript&logoColor=white&color=2E3849&labelColor=2E3849" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-2E3849?style=for-the-badge&logo=postgresql&logoColor=white&color=2E3849&labelColor=2E3849" />
  <img alt="Drizzle ORM" src="https://img.shields.io/badge/Drizzle-2E3849?style=for-the-badge&logo=databricks&logoColor=white&color=2E3849&labelColor=2E3849" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-2E3849?style=for-the-badge&logo=typescript&logoColor=white&color=2E3849&labelColor=2E3849" />
</p>

## Descrição

O Pizza Shop API é um sistema back-end robusto desenvolvido em TypeScript para gerenciamento de pizzarias. Utilizando tecnologias modernas como Bun, ElysiaJS e Drizzle ORM, o projeto oferece uma solução escalável, segura e performática para controle de pedidos, usuários, restaurantes e métricas.

Escolhi o Bun como runtime pela sua alta performance comparado ao Node.JS ou Deno, otimizando o tempo de resposta e o uso de recursos.

## Tecnologias Utilizadas
<div align="center">

<table>
  <thead>
    <tr>
      <th style="padding: 8px 12px;">Categoria</th>
      <th style="padding: 8px 12px;">Tecnologia (Versão)</th>
      <th style="padding: 8px 12px;">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 6px 12px;">⚡ Runtime e Framework</td>
      <td style="padding: 6px 12px;">Bun v1.1.13</td>
      <td style="padding: 6px 12px;">Runtime moderno e performático</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">⚡ Runtime e Framework</td>
      <td style="padding: 6px 12px;">Elysia v1.3.5</td>
      <td style="padding: 6px 12px;">Framework web minimalista e type-safe</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">⚡ Runtime e Framework</td>
      <td style="padding: 6px 12px;">TypeScript v5.8.3</td>
      <td style="padding: 6px 12px;">Tipagem estática para maior segurança</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">📁 Banco de Dados e ORM</td>
      <td style="padding: 6px 12px;">PostgreSQL</td>
      <td style="padding: 6px 12px;">Banco relacional robusto</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">📁 Banco de Dados e ORM</td>
      <td style="padding: 6px 12px;">Drizzle ORM v0.43.0</td>
      <td style="padding: 6px 12px;">ORM type-safe e schema-first</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">📁 Banco de Dados e ORM</td>
      <td style="padding: 6px 12px;">Drizzle Kit v0.31.4</td>
      <td style="padding: 6px 12px;">Migrações e introspecção via CLI</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">📁 Banco de Dados e ORM</td>
      <td style="padding: 6px 12px;">Drizzle Studio</td>
      <td style="padding: 6px 12px;">Interface visual para o banco de dados</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">🔒 Autenticação e Segurança</td>
      <td style="padding: 6px 12px;">@elysiajs/jwt v1.3.2</td>
      <td style="padding: 6px 12px;">JWT integrado ao Elysia</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">🔒 Autenticação e Segurança</td>
      <td style="padding: 6px 12px;">@elysiajs/cookie v0.8.0</td>
      <td style="padding: 6px 12px;">Gerenciamento seguro de cookies</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">✅ Utilitários e Validação</td>
      <td style="padding: 6px 12px;">Zod v4.0.5</td>
      <td style="padding: 6px 12px;">Validação de schemas em runtime</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">✅ Utilitários e Validação</td>
      <td style="padding: 6px 12px;">cuid2 v2.2.2</td>
      <td style="padding: 6px 12px;">IDs únicos e seguros</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">✅ Utilitários e Validação</td>
      <td style="padding: 6px 12px;">dayjs v1.11.13</td>
      <td style="padding: 6px 12px;">Manipulação leve de datas</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">📨 Comunicação</td>
      <td style="padding: 6px 12px;">Nodemailer v7.0.5</td>
      <td style="padding: 6px 12px;">Envio de e-mails (magic link)</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">⚙️ Desenvolvimento</td>
      <td style="padding: 6px 12px;">Faker v9.9.0</td>
      <td style="padding: 6px 12px;">Dados fake para testes</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">⚙️ Desenvolvimento</td>
      <td style="padding: 6px 12px;">Chalk v5.4.1</td>
      <td style="padding: 6px 12px;">Logs coloridos no terminal</td>
    </tr>
    <tr>
      <td style="padding: 6px 12px;">⚙️ Desenvolvimento</td>
      <td style="padding: 6px 12px;">ESLint v9.31.0</td>
      <td style="padding: 6px 12px;">Linting e padronização de código</td>
    </tr>
  </tbody>
</table>

</div>

## Instalação dos Pré-requisitos

### 📦 Instalar o Bun

> Bun é o runtime JavaScript usado para executar o projeto. (https://bun.sh/)
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```
Após a instalação, reinicie o terminal e verifique:
```bash
bun --version
```

### 🐘 Instalar o PostgreSQL (caso não use Docker)
No Ubuntu/Debian:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

## Como executar o projeto

### ⚠️ Pré-requisitos

- ✅ Bun instalado

- ✅ PostgreSQL rodando (Docker ou local)

- ✅ Node.js instalado (para compatibilidade)

### ⚙️ Passos para Configuração e Execução
1. Clone o repositório
```bash
git clone https://github.com/julia16bit/pizzashop-api.git
cd pizzashop-api
```
2. Instale as dependências
```bash
bun install
```
3. Crie um arquivo .env na raiz do projeto com as variáveis essenciais
```env
API_BASE_URL=http://localhost:3333
AUTH_REDIRECT_URL=http://localhost:3000
DATABASE_URL=postgresql://docker:docker@localhost:5432/pizzashop
JWT_SECRET_KEY=your-secret-key-here
```
4. Configure o banco de dados

🔧 Bash (configuração local)
```bash
#!/bin/bash
DB_NAME="pizzashop"
DB_USER="docker"
DB_PASS="docker"

psql -U postgres -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASS';"
psql -U postgres -c "CREATE DATABASE $DB_NAME OWNER $DB_USER;"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"
```
🐳 Docker (via docker-compose)
```yaml
version: '3.1'

services:
  db:
    image: postgres:16
    container_name: pizzashop-db
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: pizzashop
      POSTGRES_USER: docker
      POSTGRES_PASSWORD: docker
    volumes:
      - ./data:/var/lib/postgresql/data
```
Suba com:
```bash
docker-compose up -d
```
 6. Aplique as migrações e popule o banco de dados
```bash
bun run generate    # Gerar arquivos de migração
bun run migrate     # Aplicar migrações no banco
bun run seed        # Popular banco com dados de teste
```
> Drizzle Studio (interface visual do banco de dados)
> ``` bun run studio ```
7. Execute o servidor
```bash
bun run dev
```
Servidor disponível em 📍 http://localhost:3333

### ⚡ Dados de Teste
Após rodar ```bun run seed```, você terá:
- Gerente padrão 📍 admin@admin.com

- 2 clientes de exemplo

- 1 restaurante com produtos cadastrados

- 200 pedidos com status variados
> 🔐 O sistema usa autenticação por magic link. Após testar a rota de login, o link de autenticação será exibido no terminal, via ```nodemailer```, simulando o envio de email.

## Endpoints

### Autenticação e Perfil
> ⚠️ Todas as rotas protegidas exigem autenticação via magic link (token JWT via cookie).

| Método | Rota                                | Descrição                                                                   |
| ------ | ----------------------------------- | --------------------------------------------------------------------------- |
| POST   | `/authenticate`                     | Envia um link mágico de autenticação para o email informado                 |
| GET    | `/auth-links/authenticate?code=...` | Autentica o usuário com o código do link mágico (redireciona com cookie)    |
| GET    | `/me`                               | Retorna os dados do perfil do usuário autenticado                           |
| GET    | `/managed-restaurant`               | Retorna informações do restaurante gerenciado (caso o usuário seja gerente) |
| POST   | `/sign-out`                         | Realiza logout do usuário, limpando o cookie de autenticação                |

🔐 Enviar Link de Autenticação
```http
POST /authenticate
Content-Type: application/json

{
  "email": "admin@admin.com"
}
```
🔓 Autenticar com Código do Link
```http
GET /auth-links/authenticate?code=abc123
```
O código ```(code)``` é obtido ao clicar no link que aparece no terminal após o envio do email.

### Pedidos do Restaurante
> 🔐 Requer autenticação como gerente. Todas as rotas operam sobre os pedidos do restaurante que o usuário gerencia.

| Método | Rota                        | Descrição                                                  |
| ------ | --------------------------- | ---------------------------------------------------------- |
| GET    | `/orders`                   | Lista pedidos com suporte a **filtros** e **paginação**    |
| GET    | `/orders/:orderId`          | Obtém os **detalhes** de um pedido específico              |
| PATCH  | `/orders/:orderId/approve`  | **Aprova** um pedido (de `pending` para `processing`)      |
| PATCH  | `/orders/:orderId/cancel`   | **Cancela** um pedido                                      |
| PATCH  | `/orders/:orderId/dispatch` | **Despacha** o pedido (de `processing` para `delivering`)  |
| PATCH  | `/orders/:orderId/deliver`  | **Marca como entregue** (de `delivering` para `delivered`) |

O corpo da requisição nos endpoints PATCH geralmente é vazio. As mudanças de status são automáticas.

### Analytics / Métricas
> 🔐 Requer autenticação como gerente. Fornece insights e estatísticas sobre desempenho do restaurante.

| Método | Rota                                                                       | Descrição                                            |
| ------ | -------------------------------------------------------------------------- | ---------------------------------------------------- |
| GET    | `/metrics/month-receipt`                                                   | Receita do mês atual e comparação com o mês anterior |
| GET    | `/metrics/day-orders-amount`                                               | Quantidade de pedidos de hoje vs ontem               |
| GET    | `/metrics/month-orders-amount`                                             | Total de pedidos realizados no mês                   |
| GET    | `/metrics/month-canceled-orders-amount`                                    | Quantidade de pedidos **cancelados** no mês          |
| GET    | `/metrics/popular-products`                                                | **Top 5 produtos** mais pedidos no mês atual         |
| GET    | `/metrics/daily-receipt-in-period?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` | Receita diária em um período (máx. 7 dias)           |

## Estrutura do Código
```bash
src/  
├── db/                 # Camada de banco de dados  
│   ├── schema/        # Definições de schema  
│   ├── connection.ts  # Conexão com banco  
│   ├── migrate.ts     # Executor de migrações  
│   └── seed.ts        # Populador de dados  
├── http/              # Camada HTTP  
│   ├── routes/        # Handlers das rotas  
│   ├── auth.ts        # Middleware de autenticação  
│   └── server.ts      # Configuração do servidor  
├── lib/               # Utilitários compartilhados  
└── env.ts            # Configuração de ambiente
```
