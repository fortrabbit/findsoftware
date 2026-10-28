Sosse is a self-hosted search engine that crawls websites, archives their pages and searches the stored content. It uses Selenium with a browser for pages that rely on JavaScript, and it keeps its data in PostgreSQL. Administrators configure the crawlers and view statistics in its administration interface. The software is written in Python and is installed with pip, from a Debian package, or as a Docker image.

## Worth knowing

The Debian install enables its daemons as always-on services, so the host has to keep processes running for the crawler and the search to work.
