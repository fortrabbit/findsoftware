---
id: ferron
name: Ferron
urls:
  home: https://ferron.sh
  repository: https://github.com/ferronweb/ferron
  docs: https://ferron.sh/docs
category:
  - web-server
description: Web server written in Rust that serves static files, reverse-proxies requests and obtains TLS certificates automatically.
status: active
maintainer: Ferron
firstRelease: 2025
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: linux-installer-script
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-06-17
githubStargazers: 2185
contributors: 22
social:
  x: https://x.com/ferron_web
  forum: https://discuss.ferron.sh
  threads: https://threads.net/@ferronweb
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://github.com/ferronweb/ferron/blob/develop-3.x/README.md
    checkedAt: 2026-10-29
  - field: urls
    url: https://ferron.sh/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/ferronweb/ferron
    checkedAt: 2026-10-29
  - field: urls
    url: https://ferron.sh/docs
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://github.com/ferronweb/ferron/blob/develop-3.x/LICENSE
    checkedAt: 2026-10-29
  - field: category
    url: https://ferron.sh/
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/ferronweb/ferron
    checkedAt: 2026-10-29
  - field: runtime
    url: https://github.com/ferronweb/ferron/blob/develop-3.x/README.md
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/ferronweb/ferron/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/ferronweb/ferron/releases
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/ferronweb/ferron/releases
    checkedAt: 2026-10-29
  - field: license
    url: https://api.github.com/repos/ferronweb/ferron/license
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://github.com/ferronweb/ferron/blob/develop-3.x/LICENSE
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://ferron.sh/docs/v2/installation/installer-linux
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://ferron.sh/docs/v2/installation/debian
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://ferron.sh/docs/v2/installation/rpm
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://ferron.sh/docs/v2/installation/installer-windows
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://ferron.sh/docs/v2/installation/docker
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://ferron.sh/docs/v2/installation/manual
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://ferron.sh/docs/v2/installation/package-managers
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/ferronweb/ferron/blob/develop-3.x/README.md
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://ferron.sh/docs/v2/installation/rpm
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/ferronweb/ferron
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/ferronweb/ferron/contributors
    checkedAt: 2026-10-29
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Ferron is a web server written in Rust that serves static files, reverse-proxies requests to other servers and obtains TLS certificates for public hosts automatically. It installs with an installer script on Linux and Windows, from Debian and RPM packages, from a Docker image or a ZIP archive, or builds from source with Cargo. The packages run it as a system service. The source is released under the MIT license and maintained in a GitHub organization named Ferron.

The project publishes guides for moving a setup from NGINX or from Apache .htaccess.

## Worth knowing

A newer major line is in release candidates, and the documentation site labels it as such by default. The stable line's guides are published under their own path, so a reader should check which line a page describes.
