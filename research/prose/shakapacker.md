Shakapacker connects a Rails application to a JavaScript bundler. It runs webpack or Rspack over the app's JavaScript and CSS, writes a manifest of the output files, and gives view helpers for rendering the bundled assets. It is added to a Rails app with `bundle add`, and an installer task writes the bundler configuration and entry points into the app. The project's configuration lives in config/shakapacker.yml, and the bundler configuration stays editable for teams that need custom setups.

The project describes itself as the successor to rails/webpacker, the bundler integration it replaces. ShakaCode, LLC, a consultancy for Rails teams, maintains it.

## Worth knowing

Compiling the assets runs as a step of `assets:precompile`, so the machine or CI job that precompiles the app needs Node.js as well as Ruby. The installation guide lists both as requirements.
