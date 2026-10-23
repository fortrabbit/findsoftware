zs is a static site generator written in Go. Content lives as Markdown or HTML files in the site's main directory, and placeholders such as {{ title }} are filled at build time from variables set in YAML front matter. Plugins are executables, in any language, whose output fills a placeholder, and build hooks run before and after each build.

zs is installed with go install. zs build rebuilds the site, and zs serve rebuilds it and serves it on the network.

James Mills maintains zs under the MIT license. The project began as a fork of zserge/zs, which its README names as the original.

## Worth knowing

The repository is hosted on a Gitea instance at git.mills.io, not on GitHub. The README is the only documentation, and it names no deployment target. The .routes file handles redirects and error responses, and the README describes it as working without a reverse proxy, but does not say which host serves those routes.
