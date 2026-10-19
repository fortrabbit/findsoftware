---
description: Software that supports SQLite, a database stored in a single file with no server process.
lead: A database in one file, no server needed.
---

SQLite is a database engine embedded in the application: the whole database is one file on disk, and there is no server to install or connect to. That suits local development, small sites and read-heavy workloads, and it removes the database from the hosting bill. It needs a persistent, writable filesystem, which some serverless and container platforms do not provide, and concurrent writes are limited. A record holds this value when its documentation lists SQLite as supported, for development or production.
