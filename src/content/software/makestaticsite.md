---
id: makestaticsite
name: MakeStaticSite
urls:
  home: https://makestaticsite.sh/
  repository: https://github.com/paultraf/makestaticsite
  docs: https://makestaticsite.sh/getting-started/installing/
category:
  - ssg
description: Command-line tool written in Bash that crawls a website with Wget and generates a static copy of it for deployment.
status: active
maintainer: Paul Trafford
maintainerType: individual
firstRelease: 2023
hosting:
  - static
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: download the zip or tar.gz archive, extract it, make the scripts executable
licenseModel: open-source
license: AGPL-3.0
currentMajor: "0"
githubStargazers: 14
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://makestaticsite.sh/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/paultraf/makestaticsite
    checkedAt: 2026-10-23
  - field: urls
    url: https://makestaticsite.sh/getting-started/installing/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://makestaticsite.sh/about/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://makestaticsite.sh/getting-started/installing/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/paultraf/makestaticsite
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://makestaticsite.sh/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/paultraf/makestaticsite/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://makestaticsite.sh/developers/current-status/
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/paultraf/makestaticsite
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/paultraf/makestaticsite/contributors?per_page=100
    checkedAt: 2026-10-23
  - field: category
    url: https://makestaticsite.sh/about/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://makestaticsite.sh/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://makestaticsite.sh/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://makestaticsite.sh/
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

MakeStaticSite is a set of Bash scripts that crawls an existing website with GNU Wget and writes a static copy of it. The copy contains plain HTML, CSS and JavaScript and no server-side scripting or databases, and the scripts can deploy it to Netlify or over rsync. The sites it converts are typically dynamic ones, such as WordPress, and it can also work from sites archived by the Wayback Machine. Paul Trafford created the project, which is licensed under the AGPL.

## Worth knowing

The output is a snapshot. The tool does not run JavaScript, so comments, discussions and surveys lose their interactivity, and the output is not an exact mirror of the original site. The scripts run on a computer the user controls, typically one at home or at work.
