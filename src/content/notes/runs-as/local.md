---
description: "The software is used while building or testing a site and never runs on the live server."
lead: On a developer machine or in CI.
---

Dev only means the software runs on a developer machine or in a CI pipeline: bundlers, linters, formatters, test runners and local mail catchers. What it produces, such as bundled files or a test report, may reach the live site, but the software itself does not. It places no requirement on the host. Vite, ESLint and Vitest are examples.
