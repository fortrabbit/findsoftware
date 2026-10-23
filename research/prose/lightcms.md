LightCMS is a content management system written in Go. It stores its content in MongoDB, and the server is self-hosted. Pages are pre-rendered to static HTML files, and templates use Go html/template. A REST API is what the MCP server and the CLI tool connect to.

## Worth knowing

The server needs a MongoDB Atlas database. Semantic search uses Voyage AI embeddings, and without a Voyage key the search falls back to full-text matching. The chat widget streams answers through Claude Haiku when an Anthropic key is set. The embeddings can instead come from a self-hosted Ollama instance.
