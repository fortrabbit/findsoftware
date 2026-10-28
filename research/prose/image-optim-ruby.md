image_optim is a Ruby command line tool and library for optimizing JPEG, PNG, GIF and SVG images. It does the work through external utilities such as optipng, pngquant, jpegoptim, oxipng and svgo, so the gem drives those programs rather than compressing images itself. It runs from the shell, as `image_optim` with file names or a directory, or from Ruby code, on a developer's machine or in CI.

The gem installs with `gem install image_optim` or a Gemfile entry. The README says it is based on ImageOptim.app, the macOS application, which the gem does not extend.

## Worth knowing

The utilities are separate installs that the gem does not carry. A container or CI job that runs the tool needs them present in addition to the gem.
