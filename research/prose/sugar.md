Sugar is a web framework for Elixir that describes itself as modular. It uses Plug.Router as its routing layer and adds a simpler DSL for routing applications, as the [documentation](https://sugar-framework.github.io/docs/) explains.

The framework is added as a Mix dependency, the project provides mix sugar.init to add its files to a project, and the README starts the web server with mix server.

## Worth knowing

Ecto and postgrex are no longer dependencies of the framework, so an application that uses them lists them in its own mix.exs. The README names Cowboy as the only supported web server, reached through the Plug adapter.
