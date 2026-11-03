---
id: mcaptcha
name: mCaptcha
urls:
  home: https://mcaptcha.org
  repository: https://github.com/mCaptcha/mCaptcha
  docs: https://mcaptcha.org/docs/webmasters/installing-captcha/
category:
  - forms
description: Proof-of-work CAPTCHA system with a client widget and a server that validates the tokens a site receives.
status: active
maintainer: Aravinth Manivannan
firstRelease: 2024
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mariadb
adminUi: true
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-source
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2024-03-15
githubStargazers: 2498
contributors: 17
social:
  x: https://twitter.com/m_captcha/
  mastodon: https://gts.batsense.net/@mcaptcha
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://mcaptcha.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/mCaptcha/mCaptcha
    checkedAt: 2026-11-03
  - field: urls
    url: https://mcaptcha.org/docs/webmasters/installing-captcha/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/mCaptcha/mCaptcha/master/docker-compose.yml
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/mCaptcha/mCaptcha
    checkedAt: 2026-11-03
  - field: category
    url: https://mcaptcha.org/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://raw.githubusercontent.com/mCaptcha/mCaptcha/master/docs/DEPLOYMENT.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mCaptcha/mCaptcha/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mcaptcha.org/docs/self-hosting/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mcaptcha.org/docs/self-hosting/bare-metal/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mcaptcha.org/docs/self-hosting/bare-metal/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://mcaptcha.org/docs/self-hosting/ansible/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://mcaptcha.org/docs/self-hosting/bare-metal/
    checkedAt: 2026-11-03
  - field: databases
    url: https://mcaptcha.org/docs/self-hosting/bare-metal/
    checkedAt: 2026-11-03
  - field: databases
    url: https://mcaptcha.org/docs/self-hosting/bare-metal/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://mcaptcha.org/docs/webmasters/installing-captcha/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/mCaptcha/mCaptcha
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/mCaptcha/mCaptcha/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/mCaptcha/mCaptcha/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/mCaptcha/mCaptcha/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/mCaptcha/mCaptcha/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/mCaptcha/mCaptcha
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/mCaptcha/mCaptcha/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

mCaptcha is a CAPTCHA server that protects forms with a proof-of-work challenge instead of puzzles. The visitor's browser computes a SHA256 proof of work through a widget the site loads from a CDN or serves itself. The site's backend then sends the resulting token to the mCaptcha server's verification endpoint before it processes the form.

The server is a Rust binary that the [bare-metal guide](https://mcaptcha.org/docs/self-hosting/bare-metal/) runs as a systemd service, with Postgres or MariaDB for its data. An optional Redis cache can sit beside it, and the project says mCaptcha does not implement SSL, so a reverse proxy goes in front. Site keys are created in a dashboard, and the [installation guide](https://mcaptcha.org/docs/webmasters/installing-captcha/) walks through the widget and the verification call. The project says its CAPTCHA routes are cookie free and that it does not use IP addresses for rate limiting.

## Worth knowing

The README says the project has no stable release yet, although GitHub lists a v0.1.0 release.
