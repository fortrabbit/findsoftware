cssbundling-rails is a Ruby gem that bundles a Rails application's stylesheets with a Node-based bundler. Its installers set up Tailwind CSS, Bootstrap, Bulma, PostCSS or Dart Sass. During development the bundler runs in watch mode in a terminal. The bundled output is delivered through the asset pipeline in Rails.

The gem is added with the Rails bundler and an installer runs for the chosen bundler. It can also be selected when a new Rails application is created with the CSS option.

## Worth knowing

The bundler needs Node and yarn on the machine that builds the stylesheets, so an application that does not otherwise use Node gains that dependency.
