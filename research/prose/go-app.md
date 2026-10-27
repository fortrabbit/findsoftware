go-app is a Go package for building progressive web apps. Components are written in Go, compiled to WebAssembly for the browser, and served by a Go program that uses the standard net/http package. The package is added to a project with `go get`.

The [SEO guide](https://raw.githubusercontent.com/maxence-charriere/go-app-docs/main/docs/web/documents/seo.md) says the server prerenders components to HTML before the page reaches the browser, where the app then generates its content on the client side.

The app can run from a Go server that keeps running, or be generated as static files for hosts such as GitHub Pages, as the [GitHub Pages deployment guide](https://raw.githubusercontent.com/maxence-charriere/go-app-docs/main/docs/web/documents/github-deploy.md) describes.
