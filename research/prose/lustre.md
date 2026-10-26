Lustre is a web framework written in Gleam for HTML templates, single page applications, Web Components and real-time server components. Its README describes an API for constructing HTML from Gleam functions with no separate template files, and an architecture inspired by Elm and Erlang for managing state. A project adds it with `gleam add lustre`.

A full-stack Lustre app has a client part that compiles to JavaScript and a server part that compiles to Erlang. The [full-stack deployment guide](https://hexdocs.pm/lustre/guide/07-full-stack-deployments.html) builds both into one Docker image and names Fly.io as an example platform.

## Worth knowing

A full-stack app needs an Erlang runtime for its server as well as the browser bundle, so that deployment is a running server process. A Lustre single page application without a backend can instead be hosted on static hosting services, as the [SPA deployment guide](https://hexdocs.pm/lustre/guide/04-spa-deployments.html) describes.
