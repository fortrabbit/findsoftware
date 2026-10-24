---
id: astro
name: Astro
urls:
  home: https://astro.build
  repository: https://github.com/withastro/astro
  docs: https://docs.astro.build
  plugins: https://astro.build/integrations/
category:
  - framework
  - ssg
description: Web framework for content-driven websites that prerenders pages to static HTML and can render routes on demand.
status: active
maintainer: The Astro Technology Company
maintainerType: company
parent: Cloudflare
firstRelease: 2021
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 22
basedOn:
  - vite
contentStore:
  - flat-file
templating: astro, jsx, vue, svelte, solid, preact, alpine
i18n: built-in i18n routing
runsAs:
  - static
  - always-on
renderingModes:
  - static
  - server
installMethod: npm create astro@latest
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-10-15
githubStargazers: 63303
npmWeeklyDownloads: 4676006
contributors: 1250
social:
  x: https://x.com/astrodotbuild
  bluesky: https://bsky.app/profile/astro.build
  mastodon: https://m.webtoo.ls/@astro
  discord: https://astro.build/chat
  youtube: https://www.youtube.com/@astrodotbuild
wikidata: Q114769542
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/withastro/astro
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/withastro/astro
    checkedAt: 2026-10-18
  - field: urls
    url: https://docs.astro.build/en/install-and-setup/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://registry.npmjs.org/astro
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://astro.build/blog/joining-cloudflare/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://astro.build/blog/joining-cloudflare/
    checkedAt: 2026-10-18
  - field: parent
    url: https://astro.build/blog/joining-cloudflare/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q114769542
    checkedAt: 2026-10-18
  - field: category
    url: https://astro.build/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/astro/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/withastro/astro
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.astro.build/en/install-and-setup/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/astro/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.astro.build/en/install-and-setup/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.astro.build/en/guides/content-collections/
    checkedAt: 2026-10-18
  - field: templating
    url: https://docs.astro.build/en/guides/framework-components/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.astro.build/en/guides/internationalization/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docs.astro.build/en/guides/on-demand-rendering/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.astro.build/en/install-and-setup/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/withastro/astro/blob/main/LICENSE
    checkedAt: 2026-10-18
  - field: license
    url: https://registry.npmjs.org/astro/latest
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://astro.build/blog/joining-cloudflare/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://registry.npmjs.org/astro/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://registry.npmjs.org/astro
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/withastro/astro
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/withastro/astro/contributors?anon=true
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/astro
    checkedAt: 2026-10-18
  - field: urls
    url: https://astro.build/integrations/
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.astro.build/en/guides/deploy/
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://docs.astro.build/en/guides/integrations-guide/node/
    checkedAt: 2026-10-19
ai: authored
packagistDownloads: null
---

Astro is a web framework for content-driven websites, built on Vite. Pages prerender to static HTML at build time by default, and individual routes can render on demand through an adapter. Components can be written as Astro files or as JSX, Vue, Svelte, Solid, Preact or Alpine components, and only .astro files can contain components from several frameworks. The content layer reads Markdown, MDX, Markdoc, YAML, TOML and JSON, and routing for internationalized sites is built in.

## Worth knowing

Static output runs on any file host, while on-demand routes need a server runtime through an adapter; the [on-demand rendering guide](https://docs.astro.build/en/guides/on-demand-rendering/) explains which routes need one. The Astro Technology Company, the company behind the framework, announced that it is joining Cloudflare, and the project says Astro will remain free, open source and MIT-licensed.
