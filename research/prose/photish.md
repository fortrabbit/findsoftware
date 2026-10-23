Photish is a Ruby static site generator for photo galleries. Photos are grouped by folder, metadata for each photo can be written in a YAML file alongside it, and the templates that render the pages can use any engine that Tilt implements. `photish generate` writes a complete static website, which the [README](https://github.com/henrylawson/photish/blob/master/README.md) says can be hosted on NGINX, Apache HTTP Server or GitHub Pages, and `photish host` serves it locally while working on it.

The gem is the main install route, and Debian and RPM packages, Linux binaries and Windows binaries also exist.

## Worth knowing

The README lists ImageMagick or GraphicsMagick for image conversion and Exiftool for Exif metadata as separate dependencies that the packages do not install. It also says not all features are available in the native packages.
