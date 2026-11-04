Alembic is a database migration tool for Python projects that use SQLAlchemy. It runs migration scripts that change a database's schema, and each script can upgrade the database to a new state or step it back down. The [README](https://github.com/sqlalchemy/alembic/blob/main/README.rst) describes an autogenerate step that compares the database with the SQLAlchemy models and writes candidate scripts for the developer to edit before running them.

Alembic installs from PyPI with pip. The README says Alembic is written by the author of SQLAlchemy, and the [front page](https://alembic.sqlalchemy.org/en/latest/front.html) states that it is part of the SQLAlchemy project.

## Worth knowing

SQLite supports few ALTER statements, so Alembic's batch mode rebuilds a table as a copy and moves the rows across when a migration changes it. The [batch page](https://alembic.sqlalchemy.org/en/latest/batch.html) describes this process.
