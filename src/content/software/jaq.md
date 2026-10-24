---
id: jaq
name: Jekyll AsciiDoc Quickstart
urls:
  home: https://asciidoctor.github.io/jekyll-asciidoc-quickstart/
  repository: https://github.com/asciidoctor/jekyll-asciidoc-quickstart
  docs: https://github.com/asciidoctor/jekyll-asciidoc-quickstart/blob/master/README.adoc
category:
  - ssg
description: Repository template for a Jekyll website whose content is written in AsciiDoc, published to GitHub Pages by a GitHub Actions workflow.
status: active
maintainer: John Ericksen and the Asciidoctor Project
runtime:
  - ruby
basedOn:
  - jekyll
runsAs:
  - local
installMethod: GitHub repository template
licenseModel: open-source
license: MIT
githubStargazers: 126
contributors: 10
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://asciidoctor.github.io/jekyll-asciidoc-quickstart/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/asciidoctor/jekyll-asciidoc-quickstart
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/asciidoctor/jekyll-asciidoc-quickstart/blob/master/README.adoc
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/asciidoctor/jekyll-asciidoc-quickstart/master/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/asciidoctor/jekyll-asciidoc-quickstart/blob/master/README.adoc
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/asciidoctor/jekyll-asciidoc-quickstart/blob/master/README.adoc
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/asciidoctor/jekyll-asciidoc-quickstart/blob/master/README.adoc
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/asciidoctor/jekyll-asciidoc-quickstart/blob/master/README.adoc
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/asciidoctor/jekyll-asciidoc-quickstart/blob/master/README.adoc
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/asciidoctor/jekyll-asciidoc-quickstart/master/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/asciidoctor/jekyll-asciidoc-quickstart
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/asciidoctor/jekyll-asciidoc-quickstart/master/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/asciidoctor/jekyll-asciidoc-quickstart
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/asciidoctor/jekyll-asciidoc-quickstart/contributors
    checkedAt: 2026-10-23
ai: authored
---

Jekyll AsciiDoc Quickstart is a repository template for a Jekyll website whose pages are written in AsciiDoc. A repository created from the template includes a GitHub Actions workflow that runs the Jekyll build with the AsciiDoc plugin enabled, pushes the output to the gh-pages branch, and publishes it to GitHub Pages. Building the site locally needs Ruby and RubyGems, and the [README](https://github.com/asciidoctor/jekyll-asciidoc-quickstart/blob/master/README.adoc) links the Jekyll installation guide for both. The project is maintained by John Ericksen and the Asciidoctor Project.

## Worth knowing

GitHub Pages does not whitelist the jekyll-asciidoc plugin, so the workflow in the template is what builds AsciiDoc pages for publishing.
