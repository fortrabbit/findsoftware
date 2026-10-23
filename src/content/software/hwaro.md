---
id: hwaro
name: Hwaro
urls:
  home: https://hwaro.hahwul.com
  repository: https://github.com/hahwul/hwaro
  docs: https://hwaro.hahwul.com/start/
category:
  - ssg
description: Static site generator, distributed as a Crystal binary, that builds Markdown content with Jinja2-compatible templates into a public folder.
status: active
maintainer: HAHWUL
maintainerType: individual
firstRelease: 2026
runtime:
  - binary
hosting:
  - static
templating: jinja2
i18n: built-in multilingual support with per-language feeds and search
runsAs:
  - static
renderingModes:
  - static
installMethod: Homebrew
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-12
githubStargazers: 42
contributors: 9
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://hwaro.hahwul.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/hahwul/hwaro
    checkedAt: 2026-10-23
  - field: urls
    url: https://hwaro.hahwul.com/start/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/hahwul/hwaro/main/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://hwaro.hahwul.com/start/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://hwaro.hahwul.com/start/installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://hwaro.hahwul.com/start/installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://hwaro.hahwul.com/start/installation/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://hwaro.hahwul.com/deploy/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://hwaro.hahwul.com/deploy/
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/hahwul/hwaro/blob/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/hahwul/hwaro/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/hahwul/hwaro
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/hahwul/hwaro/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/hahwul/hwaro/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/hahwul/hwaro/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/hahwul/hwaro/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/hahwul/hwaro
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/hahwul/hwaro/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

Hwaro is a static site generator written in Crystal. It reads Markdown content with TOML, YAML or JSON front matter and renders it through Jinja2-compatible templates, which the project implements with the Crinja library. The README lists multilingual support with per-language feeds and search, and an import from WordPress, Jekyll and Hugo.

Hwaro installs with Homebrew, as a pre-built binary, or from source. The docs describe deploying the generated public folder to any static hosting provider, and the README lists generated platform configuration for Netlify, Vercel, Cloudflare Pages, GitHub Pages and GitLab CI. An official Docker image is published at ghcr.io/hahwul/hwaro.
