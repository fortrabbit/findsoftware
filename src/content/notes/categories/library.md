---
description: A package a developer adds to an application for one job, such as database access, validation or templating.
lead: A package for one job inside an app.
---

A library is code an application imports to do one job: talk to a database, validate input, fetch and cache data, render Markdown, translate an interface, or connect a back end to a front end. ORMs and query builders, which map database tables to objects in code, are the largest group. A library brings no application structure of its own, which is where it differs from a [web framework](/categories/framework/). A record carries this category when it is installed as a dependency and called from the application's code. A package that belongs to one framework names it under "Built on". Zod and Prisma ORM are examples.
