peewee is a Python object-relational mapper. Models are Python classes that map to database tables, and queries are built with a query builder that exposes SQL. It supports SQLite, MySQL, MariaDB and PostgreSQL, and its asyncio support is built on the standard async drivers. The package is installed with pip, and the [documentation](https://docs.peewee-orm.com/en/latest/) covers integrations with Flask, FastAPI and pydantic.

## Worth knowing

The library is a single module with no required dependencies. The MySQL, PostgreSQL and async database drivers are optional extras installed alongside it.
