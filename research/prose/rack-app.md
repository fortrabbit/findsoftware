Rack::App is a Ruby framework for building applications on the Rack interface. Endpoints are declared inside a class with a Sinatra-style DSL. The router is a prefix tree, so the README says adding endpoints does not slow route lookup. The framework includes parameter validation, middleware that applies to single endpoints, file upload and download, streamed responses, mounting of other Rack::App classes, static file serving and a bundled test module. The application starts through a config.ru file and a Rack server command, and the framework is installed with gem install or a Gemfile entry.

## Worth knowing

The README describes the framework as meant for seasoned web developers, and says it will not gain features without real-life use cases. Templates come from a separate front_end extension, which the README says adds dependencies.
