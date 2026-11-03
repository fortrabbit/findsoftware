InsightFlare is a web analytics tool that runs on Cloudflare Workers, so the software and its data stay in the Cloudflare account of the person who deploys it. A site loads a tracking script from its deployment, and an admin dashboard shows the traffic that script reports. The Cloudflare Deploy button creates the Worker and its resources from the repository, and a manual setup binds a D1 database and the other resources by hand. The dashboard is available in several languages.

## Worth knowing

Analytics Engine, the R2 cold archive and the connection for AI agents are optional parts that need extra Cloudflare setup, and reading the analytics datasets requires an API token with account analytics read permission.
