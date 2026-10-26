Cot is a web framework for Rust that brings an ORM, form handling, an admin panel and templating into one project. It is built on top of Axum, and the project describes its approach as inspired by Django. A new project starts from the `cot` command line tool, which Cargo installs from the cot-cli package.

Content lives in a database: the ORM works with SQLite, PostgreSQL and MySQL. Templates use Askama, and the admin panel is an automatic interface for managing the models.
