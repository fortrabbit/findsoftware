---
id: tumblelog-py
name: tumblelog
urls:
  home: https://johnbokma.com/articles/tumblelog/
  repository: https://github.com/john-bokma/tumblelog
  docs: https://johnbokma.com/articles/tumblelog/
category:
  - ssg
description: Static microblog generator that turns a single Markdown input file into HTML5 pages, a JSON feed and an RSS feed; this record covers its Python version.
status: active
maintainer: John Bokma
maintainerType: individual
language: python
runtime:
  - python
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: git clone, then pip3 install -r requirements.txt
licenseModel: open-source
license: MIT
githubStargazers: 127
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://johnbokma.com/articles/tumblelog/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/john-bokma/tumblelog
    checkedAt: 2026-10-23
  - field: urls
    url: https://johnbokma.com/articles/tumblelog/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/john-bokma/tumblelog/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://raw.githubusercontent.com/john-bokma/tumblelog/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/john-bokma/tumblelog/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://johnbokma.com/articles/tumblelog/installation-of-the-python-version-of-tumblelog.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/john-bokma/tumblelog/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/john-bokma/tumblelog/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/john-bokma/tumblelog/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://johnbokma.com/articles/tumblelog/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/john-bokma/tumblelog/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/john-bokma/tumblelog/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/john-bokma/tumblelog
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://johnbokma.com/articles/tumblelog/
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/john-bokma/tumblelog
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/john-bokma/tumblelog/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

tumblelog is a static microblog generator. This record covers the Python version, which reads a single Markdown file with directives that define pages and, optionally, tags, and writes HTML5 pages, a JSON feed and an RSS feed. Parameters are given as command-line arguments, and the output is files that any web space can serve.

The Python version is installed from a clone of the repository with its required libraries, or as a Docker image built from a Dockerfile in the repository. The styles that come with the project are written in Sass and are converted to CSS with a Sass program or the Sass container the repository describes.

## Worth knowing

The same repository holds a Perl version, tracked as its own record. The README says the author keeps the output of both versions identical apart from minor differences between the render libraries. The repository has no tagged releases, so the date of the last commit stands in for release currency.
