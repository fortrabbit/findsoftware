Traks is web analytics that runs on Cloudflare's own services. A collect Worker receives each visit, a Durable Object per site serves the current day and the live view, and history is written to Apache Iceberg tables on R2 and read with R2 SQL. The owner installs it into their own Cloudflare account through a wizard at traks.dev, which provisions the Workers, the D1 database, the R2 bucket and the pipeline, and the repository is not needed to run it. The tracked site includes one script tag, and the dashboard signs in with email and password through Better Auth on D1.

Visitors are counted with a hash that rotates each day from a secret, the IP address and the user agent, so no cookies are set and raw IP addresses are not stored. The dashboard receives live visitor counts over a WebSocket. MCP and WebMCP tools expose the analytics to AI agents, and bot and agent traffic is classified and reported alongside human traffic.

## Worth knowing

The analytics run on Cloudflare products, and a running instance is billed to the owner's Cloudflare account. The README describes several of those products as open beta. Each site's live counts sit on one Durable Object, and the README says that counts can undercount for "today" while a site's traffic peaks.
