Gojekyll is a partially Jekyll-compatible static site generator written in Go. The `build` command writes the site to a static output directory, and `serve` generates pages on the fly without writing files, reloading the browser when files change. Its templates use Liquid. The [README](https://github.com/osteele/gojekyll/blob/main/README.md) says the project implements Jekyll as its documentation describes, without porting Jekyll's source, and lists pagination and the plugin system as missing.

## Worth knowing

Sass handling needs dart-sass on the PATH, and using a theme needs Ruby and bundler.
