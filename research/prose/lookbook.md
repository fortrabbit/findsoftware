Lookbook is a UI development environment for Ruby on Rails applications, built as an isolated Rails engine. Each public method of a preview class is a scenario that Lookbook renders in isolation, and the preview inspector lists those scenarios. Lookbook previews ViewComponent and Phlex components, as well as ActionView partials, and Markdown pages in it can use ERB.

Installation adds the gem to the Gemfile, runs bundle install and mounts the engine in the application's routes.

## Worth knowing

The installation guide places the gem in the development group and mounts the engine inside a development check. The production guide says the gem must move into the production group and the development check must come out of the mount before Lookbook runs in production.
