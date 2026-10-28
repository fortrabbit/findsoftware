---
id: warden
name: Warden
urls:
  home: https://warden.dev
  repository: https://github.com/wardenenv/warden
  docs: https://docs.warden.dev/
category:
  - dev-tool
description: Command-line tool that runs Docker-based local development environments for web projects, with shared proxy services so several environments run at once.
status: active
maintainer: David Alger
firstRelease: 2019
runsAs:
  - local
installMethod: homebrew
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-04-14
githubStargazers: 476
contributors: 48
social:
  mastodon: https://phpc.social/@warden
  discord: https://discord.gg/dckp5HZgcu
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://warden.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/wardenenv/warden
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.warden.dev/
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/wardenenv/warden/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/wardenenv/warden/main/LICENSE
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/wardenenv/warden
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/wardenenv/warden/main/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/wardenenv/warden/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/wardenenv/warden/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/wardenenv/warden/releases
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://warden.dev/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.warden.dev/installing.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.warden.dev/installing.html
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/wardenenv/warden
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/wardenenv/warden/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
---

Warden is a command-line tool that starts Docker-based local development environments for web projects. Each project runs in its own containers, and a few shared global services route requests into the correct environment, so several environments can run at once without port conflicts. Traefik terminates SSL with certificates Warden issues for the local development domains, and Dnsmasq resolves `.test` domains without editing hosts files.

Environment types cover Drupal, Laravel, Magento 1 and 2, Shopware, Symfony and WordPress, and a custom environment can be defined per project. The tool runs on macOS and Linux, and on Windows through WSL2.

## Worth knowing

Warden needs Docker and Docker Compose on the developer's machine. On macOS, Mutagen handles file sync for environments that use sync sessions. The environments pull their container images from Docker Hub, so they depend on those published images.
