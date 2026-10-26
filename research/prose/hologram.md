Hologram is a full-stack Elixir web framework that runs on top of Phoenix. The README says the Elixir runtime is rebuilt in the browser, while the homepage says client code is compiled to JavaScript. The [architecture page](https://hologram.page/docs/architecture) describes the initial page as rendered to HTML on the server. Hologram is added to a Phoenix application as a Mix dependency, and `mix holo` starts the app in development. Pages use `~HOLO` templates. The package manifest names Bart Blast as maintainer.

## Worth knowing

The [installation guide](https://hologram.page/docs/installation) requires a working Phoenix application, so Hologram does not run on its own. It also asks for Node.js alongside Elixir.
