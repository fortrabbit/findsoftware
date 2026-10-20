---
id: starlight
name: Starlight
urls:
  home: https://starlight.astro.build
  repository: https://github.com/withastro/starlight
  docs: https://starlight.astro.build/getting-started/
  plugins: https://starlight.astro.build/resources/plugins/
category:
  - ssg
description: Documentation theme and integration for the Astro framework that builds documentation websites from Markdown, Markdoc and MDX.
status: active
maintainer: Astro
maintainerType: company
firstRelease: 2023
language: typescript
runtime:
  - node
hosting:
  - node
  - static
basedOn:
  - astro
contentStore:
  - flat-file
templating: astro, markdown, mdx, markdoc, react, vue, svelte, solid
i18n: built-in multilingual routing and fallback content, right-to-left support
renderingModes:
  - static
  - server
installMethod: npm create astro@latest -- --template starlight
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-08
githubStargazers: 9426
npmWeeklyDownloads: 884121
contributors: 353
pluginCount: 53
social:
  discord: https://astro.build/chat
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/withastro/starlight
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/withastro/starlight
    checkedAt: 2026-10-18
  - field: urls
    url: https://starlight.astro.build/getting-started/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://registry.npmjs.org/@astrojs/starlight
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://starlight.astro.build/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://starlight.astro.build/
    checkedAt: 2026-10-18
  - field: category
    url: https://starlight.astro.build/getting-started/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/@astrojs/starlight/latest
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://starlight.astro.build/getting-started/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/withastro/starlight
    checkedAt: 2026-10-18
  - field: runtime
    url: https://starlight.astro.build/getting-started/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://starlight.astro.build/
    checkedAt: 2026-10-18
  - field: templating
    url: https://starlight.astro.build/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://starlight.astro.build/guides/i18n/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://starlight.astro.build/manual-setup/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://starlight.astro.build/getting-started/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://starlight.astro.build/manual-setup/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/withastro/starlight
    checkedAt: 2026-10-18
  - field: license
    url: https://registry.npmjs.org/@astrojs/starlight/latest
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/withastro/starlight
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://registry.npmjs.org/@astrojs/starlight/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/withastro/starlight/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/withastro/starlight
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/withastro/starlight/contributors?anon=true
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@astrojs/starlight
    checkedAt: 2026-10-18
  - field: urls
    url: https://starlight.astro.build/resources/plugins/
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://starlight.astro.build/resources/plugins/
    checkedAt: 2026-10-18
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: TypeScript · SSG
ai: authored
packagistDownloads: null
---

Starlight is a documentation theme for Astro, so it runs inside an Astro project and does not work as a standalone tool. It accepts Markdown, Markdoc and MDX pages and adds a documentation layout, built-in Pagefind search and multilingual routing with fallback content, including right-to-left languages. A new project is created from a template, and an existing Astro project can add the theme with one command. Pages are pre-rendered by default, and on-demand rendering needs an Astro server adapter. The Astro team maintains it, and the [manual setup guide](https://starlight.astro.build/manual-setup/) covers adding it to an existing project.

## Worth knowing

Build, Node.js and hosting come from Astro, so the Starlight documentation points to Astro's deployment guides instead of listing its own targets.
