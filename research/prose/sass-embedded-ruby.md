sass-embedded is a Ruby gem that compiles Sass by passing stylesheets to Embedded Dart Sass, the Dart implementation of Sass, over the Embedded Sass protocol. It is installed with gem install sass-embedded. The gem's README says it is backed by a native Dart Sass executable on supported platforms, so the compiler is Dart Sass and the gem supplies the Ruby side.

## Worth knowing

On platforms without a native executable, the gem uses a Node.js Dart Sass executable instead, so a Node.js installation is needed there as well as Ruby. The API documentation is on rubydoc.info.
