Reflex is a Python library for building full-stack web apps, with the interface written as Python components. The [architecture post](https://reflex.dev/blog/2024-03-21-reflex-architecture/) says Reflex apps compile to a React frontend and a FastAPI backend, and that app logic and state stay in Python on the server. Production mode serves the built frontend and the backend from a single server, and the two can also run as separate processes. For data, the database docs list MySQL, PostgreSQL, SQL Server and SQLite. Pynecone, Inc., which does business as Reflex, is named in the terms of use as the company behind it.

## Worth knowing

Reflex Cloud is a managed hosting service run through the `reflex deploy` command, next to the open-source framework. The [pricing page](https://reflex.dev/pricing/) says every plan includes the open-source framework, and its plans cover hosting and the AI builder.

Reflex Enterprise is a separate package of paid features built on top of Reflex, released under its own license agreement. Its OIDC authentication plugin is one of them.
