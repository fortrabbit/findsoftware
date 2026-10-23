Gridea Pro is a desktop application for writing blog posts in a graphical editor and publishing them as a static blog. It is built on Wails, a framework that combines a Go backend with a Vue 3 interface, and the README describes it as a complete rewrite of Gridea. Posts are written in Markdown, and the app renders them with one of three template engines: Jinja2 through Pongo2, EJS, or Go templates.

The app deploys the generated site to GitHub Pages, Vercel, Netlify, Coding, or an SFTP or FTP server. An existing Gridea data folder can be imported by pointing the site directory setting at it. A separate binary, gridea-pro-mcp, provides an MCP server so that AI assistants can work with the same site data.

## Worth knowing

Gridea Pro runs as a desktop application. The live site is served by whichever host the app deploys to.
