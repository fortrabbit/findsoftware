---
id: cstate
name: cState
urls:
  home: https://cstate.uncascade.com
  repository: https://github.com/cstate/cstate
  docs: https://github.com/cstate/cstate/wiki
category:
  - analytics
description: Static status page built with Hugo, with incidents written as Markdown files in a Git repository.
status: stub
maintainer: Mantas Vilčinskas
firstRelease: 2018
hosting:
  - static
basedOn:
  - hugo
adminUi: true
i18n: yes, built-in English, German, French, Italian, Lithuanian, Macedonian, Dutch, Portuguese, Turkish and Tagalog
runsAs:
  - static
renderingModes:
  - static
installMethod: clone the cstate/example repository and deploy it with Netlify, Cloudflare Pages or another static host
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-15
githubStargazers: 2905
contributors: 63
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://cstate.uncascade.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/cstate/cstate
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/cstate/cstate/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: basedOn
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: renderingModes
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/cstate/cstate/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/cstate/cstate/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/cstate/cstate/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/cstate/cstate/commits/v2.0-dev1
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/cstate/cstate/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/cstate/cstate/releases/tags/6.0.2
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/cstate/cstate
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/cstate/cstate/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
---

cState is a status page built with Hugo, which the project describes as acting like a theme for Hugo. A site owner clones the example repository, writes each incident as a Markdown file in the Git repository, and publishes the generated static files on a host such as Netlify or Cloudflare Pages. A Docker image can be built from the repository's Dockerfile. The built-in text covers ten languages, and an optional admin panel is available through Netlify CMS or Forestry.io.

A separate HTML embed shows a dot indicator or an alert on another site when the status page reports active issues.

## Worth knowing

The project states that the status page cannot monitor services in real time, so the author of the site updates the status.
