seite reads Markdown files with YAML frontmatter and renders them with Tera templates. It ships as a single Rust binary. Each build writes HTML pages, a Markdown copy of every page and llms.txt files for language models. The agent command starts Claude Code with the site's configuration and content, and an MCP server gives other AI tools access to the same site.

The deploy command pushes the built output folder to GitHub Pages, Cloudflare Pages or Netlify, so the published site is static files.

## Worth knowing

The agent command and AI theme generation need a separate Claude Code install. The command line tool collects anonymous usage telemetry unless the user opts out. The contact-form shortcode works with one of five third-party form services.
