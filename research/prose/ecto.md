Ecto is a toolkit for data mapping and language integrated query in Elixir. Schemas define the fields of a struct, and queries are written with Ecto.Query and run through a repository module. Databases are reached through adapter packages that a project adds to its mix.exs beside Ecto; the README's table lists adapters for PostgreSQL, MySQL, MSSQL, SQLite3 and ClickHouse.

Ecto is also used to map data from any source into Elixir structs, whether or not a database backs it.
