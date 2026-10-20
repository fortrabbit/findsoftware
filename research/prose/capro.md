Capro is a PHP static site generator that uses the Blade template engine. Pages are Blade views in `views/pages`, and YAML front matter at the top of a view becomes variables for the view, its layout and the collection filter. The homepage lists collections such as blog posts that need no configuration, Markdown support, and view templates that turn data from an API into pages.

Capro is installed as a global Composer command and builds the site into the `public` directory on the developer's machine. A `serve` command rebuilds the site on each file change during development.

## Worth knowing

Capro is in alpha. The homepage says it "has not been thoroughly tested for production usage", and the install command requires the `@alpha` constraint.
