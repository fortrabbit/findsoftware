---
id: pyramid
name: Pyramid
urls:
  home: https://trypyramid.com/
  repository: https://github.com/Pylons/pyramid
  docs: https://docs.pylonsproject.org/projects/pyramid/en/latest/
  plugins: https://trypyramid.com/extending-pyramid.html
category:
  - framework
description: Open source Python web framework for applications that start small and grow into large projects.
status: active
maintainer: Pylons Project
firstRelease: 2010
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
templating: chameleon, jinja2, mako
i18n: yes
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: BSD-derived, MIT
currentMajor: "2"
latestReleaseDate: 2026-03-11
githubStargazers: 4103
contributors: 277
social:
  x: https://x.com/PylonsProject
  discord: https://trypyramid.com/discord-invite.html
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/Pylons/pyramid
    checkedAt: 2026-10-26
  - field: urls
    url: https://trypyramid.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.pylonsproject.org/projects/pyramid/en/latest/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/Pylons/pyramid/main/README.rst
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/Pylons/pyramid
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/Pylons/pyramid/main/README.rst
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.pylonsproject.org/projects/pyramid/en/latest/narr/install.html
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://docs.pylonsproject.org/projects/pyramid/en/latest/narr/install.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.pylonsproject.org/projects/pyramid/en/latest/narr/install.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.pylonsproject.org/projects/pyramid/en/latest/narr/project.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.pylonsproject.org/projects/pyramid_cookbook/en/latest/deployment/deployment.html
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/Pylons/pyramid/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/Pylons/pyramid/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/Pylons/pyramid/main/README.rst
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pypi.org/pypi/pyramid/json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/Pylons/pyramid/tags
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://pypi.org/pypi/pyramid/json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/Pylons/pyramid
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/Pylons/pyramid/contributors
    checkedAt: 2026-10-26
  - field: urls
    url: https://trypyramid.com/
    checkedAt: 2026-10-26
  - field: templating
    url: https://trypyramid.com/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://docs.pylonsproject.org/projects/pyramid/en/latest/narr/i18n.html
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Pyramid is a Python web framework maintained under the Pylons Project. An application is a set of views and routes registered on a configurator, and the same mechanism serves a single-file program and a larger package. The project's cookiecutter generates a package with a configuration file that the pserve command reads to start a server. The documentation says any WSGI server can run a Pyramid application, and names mod_wsgi and gunicorn as production alternatives to the default server. Templating, database and security support come from add-ons, which the project lists in its add-on directory.

## Worth knowing

The default server is Waitress, which the documentation describes as suited to development and light production use. For production it points to mod_wsgi and gunicorn.
