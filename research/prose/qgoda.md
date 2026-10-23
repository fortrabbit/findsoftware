Qgoda is a static site generator for multilanguage sites with arbitrary taxonomies. Content is written in Markdown, and listings and filters can use as many taxonomies as the author defines, not only tags and categories. The Template Toolkit wraps each page, and translations use gettext and po files.

Qgoda is written in Perl. It copies files from the source directory into a `_site` folder, and the rendered output is static files that almost any web server can serve. It installs through Homebrew, from a Git checkout with `cpanm`, or as a Docker image. Node.js is optional, and the official themes use Yarn.

## Worth knowing

The installation guide says the CPAN release is outdated and should not be used. The README describes Qgoda as ready for beta testing and says incompatible changes are possible.

The [installation guide](https://www.qgoda.net/en/docs/installation/) and the [web server guide](https://www.qgoda.net/en/docs/web-server/) cover setup and deployment.
