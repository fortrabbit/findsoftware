Jekyll AsciiDoc Quickstart is a repository template for a Jekyll website whose pages are written in AsciiDoc. A repository created from the template includes a GitHub Actions workflow that runs the Jekyll build with the AsciiDoc plugin enabled, pushes the output to the gh-pages branch, and publishes it to GitHub Pages. Building the site locally needs Ruby and RubyGems, and the [README](https://github.com/asciidoctor/jekyll-asciidoc-quickstart/blob/master/README.adoc) links the Jekyll installation guide for both. The project is maintained by John Ericksen and the Asciidoctor Project.

## Worth knowing

GitHub Pages does not whitelist the jekyll-asciidoc plugin, so the workflow in the template is what builds AsciiDoc pages for publishing.
