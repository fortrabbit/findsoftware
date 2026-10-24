---
id: bottle
name: Bottle
urls:
  home: https://bottlepy.org/
  repository: https://github.com/bottlepy/bottle
  docs: https://bottlepy.org/docs/dev/
  plugins: https://bottlepy.org/docs/dev/plugins/list.html
category:
  - framework
description: Python micro web framework distributed as a single file module with no dependencies beyond the standard library.
status: active
maintainer: Marcel Hellkamp
firstRelease: 2009
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.8
templating: built-in, mako, jinja2, cheetah
runsAs:
  - always-on
  - per-request
installMethod: pip install bottle
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-06-15
githubStargazers: 8798
contributors: 189
social:
  forum: https://groups.google.de/group/bottlepy
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://bottlepy.org/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/bottlepy/bottle
    checkedAt: 2026-10-24
  - field: urls
    url: https://bottlepy.org/docs/dev/
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://raw.githubusercontent.com/bottlepy/bottle/main/LICENSE
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/bottlepy/bottle
    checkedAt: 2026-10-24
  - field: category
    url: https://bottlepy.org/
    checkedAt: 2026-10-24
  - field: runtime
    url: https://bottlepy.org/docs/dev/
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://bottlepy.org/docs/dev/
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://bottlepy.org/docs/dev/
    checkedAt: 2026-10-24
  - field: templating
    url: https://bottlepy.org/docs/dev/
    checkedAt: 2026-10-24
  - field: templating
    url: https://bottlepy.org/docs/dev/
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://bottlepy.org/docs/dev/deployment.html
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://bottlepy.org/docs/dev/deployment.html
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/bottlepy/bottle/blob/main/README.rst
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://github.com/bottlepy/bottle/blob/main/README.rst
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://pypi.org/pypi/bottle/json
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/bottlepy/bottle/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/bottlepy/bottle/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/bottlepy/bottle
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/bottlepy/bottle/contributors?per_page=1
    checkedAt: 2026-10-24
  - field: urls
    url: https://bottlepy.org/docs/dev/plugins/list.html
    checkedAt: 2026-10-24
figure:
  emoji: 🧱
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: Python · Framework
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Bottle is a micro web framework for Python that maps requests to functions and renders templates. The framework is distributed as a single module file with no dependencies beyond the Python standard library, so it can be installed with pip or copied into a project directory. The [deployment guide](https://bottlepy.org/docs/dev/deployment.html) describes running an application with the built-in server, under a WSGI server such as gunicorn or cheroot, or as a CGI script. Marcel Hellkamp holds the copyright, and the code and documentation are available under the MIT License.

## Worth knowing

The built-in development server is single-threaded, and the deployment guide points to a multi-threaded WSGI server for production. Releases are tested only against maintained Python versions, so an older interpreter may run the code without being tested.
