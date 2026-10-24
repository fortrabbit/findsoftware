---
id: seite
name: seite
urls:
  home: https://seite.sh
  repository: https://github.com/seite-sh/seite
  docs: https://seite.sh/docs/getting-started
category:
  - ssg
description: Static site generator written in Rust, with a Claude Code agent command and a built-in MCP server.
status: active
maintainer: Omar Sanchez
firstRelease: 2026
language: rust
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: tera
i18n: filename-based translations
runsAs:
  - static
renderingModes:
  - static
installMethod: shell install script
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-06
githubStargazers: 25
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://seite.sh/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/seite-sh/seite
    checkedAt: 2026-10-23
  - field: urls
    url: https://seite.sh/docs/getting-started
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/seite-sh/seite/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/seite-sh/seite
    checkedAt: 2026-10-23
  - field: runtime
    url: https://seite.sh/docs/getting-started
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/seite-sh/seite/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://seite.sh/docs/deployment
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://seite.sh/docs/deployment
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/seite-sh/seite/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://seite.sh/about.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/seite-sh/seite/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://seite.sh/docs/getting-started
    checkedAt: 2026-10-23
  - field: i18n
    url: https://raw.githubusercontent.com/seite-sh/seite/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/seite-sh/seite/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/seite-sh/seite/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/seite-sh/seite/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/seite-sh/seite/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/seite-sh/seite/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/seite-sh/seite
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/seite-sh/seite/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

seite reads Markdown files with YAML frontmatter and renders them with Tera templates. It ships as a single Rust binary. Each build writes HTML pages, a Markdown copy of every page and llms.txt files for language models. The agent command starts Claude Code with the site's configuration and content, and an MCP server gives other AI tools access to the same site.

The deploy command pushes the built output folder to GitHub Pages, Cloudflare Pages or Netlify, so the published site is static files.

## Worth knowing

The agent command and AI theme generation need a separate Claude Code install. The command line tool collects anonymous usage telemetry unless the user opts out. The contact-form shortcode works with one of five third-party form services.
