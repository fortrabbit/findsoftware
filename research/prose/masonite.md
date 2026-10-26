Masonite bundles an Active Record style ORM, mail, queues, notifications, events and task scheduling. A project is created with `masonite new` after `pip install masonite-framework`, as either a full-stack project that renders views on the server or an API-only project. Views use Jinja2 templates, and the ORM works with SQLite, MySQL, PostgreSQL and SQL Server.

A live site runs as a long-lived process behind a production WSGI server, and task scheduling needs the schedule runner in the server's cron, run every minute.

The project moved to the masonitedev organization and a renamed PyPI package, and the community maintains it. The earlier repository and the `masonite` package are deprecated.
