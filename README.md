<h2 align="center">🍕 Pizza Shop API</h2>
<p align="center">
  API RESTful para gerenciamento completo de pizzarias, construída com Bun, ElysiaJS, Drizzle e PostgreSQL.
</p>

<p align="center">
  <img alt="Bun" src="https://img.shields.io/badge/Bun-2E3849?style=for-the-badge&logo=bun&logoColor=white&color=2E3849&labelColor=2E3849" />
  <img alt="ElysiaJS" src="https://img.shields.io/badge/ElysiaJS-2E3849?style=for-the-badge&logo=javascript&logoColor=white&color=2E3849&labelColor=2E3849" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-2E3849?style=for-the-badge&logo=postgresql&logoColor=white&color=2E3849&labelColor=2E3849" />
  <img alt="Drizzle ORM" src="https://img.shields.io/badge/Drizzle-2E3849?style=for-the-badge&logo=databricks&logoColor=white&color=2E3849&labelColor=2E3849" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.8.3-2E3849?style=for-the-badge&logo=typescript&logoColor=white&color=2E3849&labelColor=2E3849" />
</p>

## Descrição

O Pizza Shop API é um sistema backend robusto desenvolvido em TypeScript para gerenciamento de pizzarias. Utilizando tecnologias modernas como Bun, ElysiaJS e Drizzle ORM, o projeto oferece uma solução escalável, segura e performática para controle de pedidos, usuários, restaurantes e métricas.

Escolhi o Bun como runtime pela sua alta performance comparado ao Node ou Deno, otimizando o tempo de resposta e o uso de recursos.

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
