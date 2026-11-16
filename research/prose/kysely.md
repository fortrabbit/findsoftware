Kysely is a SQL query builder for TypeScript. Queries are method chains over typed table definitions, and the compiler checks that each table and column a query refers to is in scope where it is written. A result's type has only the selected columns, with their aliases, and it follows subqueries, joins and common table expressions. Each database is reached through a dialect, which usually needs its database driver library as a peer dependency. The library is mainly developed for Node.js and also runs on Deno, Bun, Cloudflare Workers and in web browsers.

## Worth knowing

Kysely deals with types only at the TypeScript level, so the values a driver returns at runtime are not changed, and the database interface has to match the schema. For queries the types cannot express, the README points to an sql template tag and a DynamicModule class.
