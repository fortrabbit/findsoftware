---
description: "The web server starts the software for each request, and nothing stays running between visits."
lead: Started on each visit, idle in between.
---

Per request means the code runs only while a request is being answered. The web server, usually through PHP-FPM or a module, starts the code, the code builds the page, and the process ends or returns to a pool. Nothing has to be kept alive between visits, which is what shared and managed PHP hosting provides. Background work such as sending mail usually needs a cron job or a queue worker on top. WordPress, Kirby and Craft CMS are examples.
