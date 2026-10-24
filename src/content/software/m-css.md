---
id: m-css
name: m.css
urls:
  home: https://mcss.mosra.cz/
  repository: https://github.com/mosra/m.css
  docs: https://mcss.mosra.cz/css/
  plugins: https://mcss.mosra.cz/plugins/
category:
  - css-framework
  - ssg
description: CSS framework and site and documentation theme for content-oriented websites, written without JavaScript, with a Pelican theme and Python and Doxygen documentation generators.
status: active
maintainer: Vladimír Vondruš
maintainerType: individual
runtime:
  - python
hosting:
  - static
runsAs:
  - static
renderingModes:
  - static
installMethod: git submodule or git clone of the repository
licenseModel: open-source
license: MIT
githubStargazers: 433
contributors: 27
social:
  x: https://twitter.com/czmosra
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://mcss.mosra.cz/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/mosra/m.css
    checkedAt: 2026-10-23
  - field: urls
    url: https://mcss.mosra.cz/css/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/mosra/m.css/master/COPYING
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/mosra/m.css/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/mosra/m.css/blob/master/doc/themes/pelican.rst
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/mosra/m.css/blob/master/doc/why.rst
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/mosra/m.css/blob/master/doc/why.rst
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://mcss.mosra.cz/themes/pelican/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://mcss.mosra.cz/documentation/doxygen/
    checkedAt: 2026-10-23
  - field: urls
    url: https://mcss.mosra.cz/plugins/
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/mosra/m.css/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/mosra/m.css/blob/master/README.rst
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/mosra/m.css
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mosra/m.css/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
---

m.css is a CSS framework and a site and documentation theme for content-oriented websites, written without JavaScript. Its pages say it is meant to be used with static site generators, and the output is static HTML files that can be uploaded anywhere. The project includes a Pelican theme with its own plugins, listed on the [plugins page](https://mcss.mosra.cz/plugins/). The theme is added to a Pelican site by putting the repository into the project, for example as a git submodule. The repository also holds a documentation generator for Python and a Doxygen theme for C++. The [CSS guide](https://mcss.mosra.cz/css/) covers the stylesheets. The author and maintainer is Vladimír Vondruš.

## Worth knowing

The Pelican theme needs Pelican, which is installed separately.
