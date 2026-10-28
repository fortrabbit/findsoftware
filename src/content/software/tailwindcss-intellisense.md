---
id: tailwindcss-intellisense
name: Tailwind CSS IntelliSense
urls:
  repository: https://github.com/tailwindlabs/tailwindcss-intellisense
  docs: https://tailwindcss.com/docs/editor-setup
category:
  - dev-tool
description: Visual Studio Code extension that adds autocomplete, linting, hover previews and a CSS language mode for Tailwind CSS projects.
status: active
maintainer: Tailwind Labs, Inc.
maintainerType: company
firstRelease: 2018
language: javascript
basedOn:
  - tailwindcss
installMethod: VS Code Marketplace
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-17
githubStargazers: 3478
contributors: 51
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://tailwindcss.com/docs/editor-setup
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/tailwindlabs/tailwindcss-intellisense
    checkedAt: 2026-10-28
  - field: category
    url: https://tailwindcss.com/docs/editor-setup
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/tailwindlabs/tailwindcss-intellisense/v0.16.0/packages/vscode-tailwindcss/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/tailwindlabs/tailwindcss-intellisense
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/tailwindlabs/tailwindcss-intellisense/v0.16.0/packages/vscode-tailwindcss/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/tailwindlabs/tailwindcss-intellisense/v0.16.0/packages/vscode-tailwindcss/LICENSE
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/tailwindlabs/tailwindcss-intellisense/v0.16.0/packages/vscode-tailwindcss/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/tailwindlabs/tailwindcss-intellisense/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/tailwindlabs/tailwindcss-intellisense/releases/tags/v0.16.0
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/tailwindlabs/tailwindcss-intellisense/v0.16.0/packages/vscode-tailwindcss/LICENSE
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/tailwindlabs/tailwindcss-intellisense
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/tailwindlabs/tailwindcss-intellisense/contributors?per_page=1
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
packagistDownloads: null
---

Tailwind CSS IntelliSense is an extension for Visual Studio Code that works in projects using Tailwind CSS. It adds autocomplete for class names, CSS functions and directives, linting for CSS and markup, and hover previews that show the CSS behind a class name. A Tailwind CSS language mode keeps CSS support when Tailwind-specific at-rules are used, and the extension is installed from the Visual Studio Code Marketplace.

The extension activates only in a workspace that uses tailwindcss: a CSS file that imports the framework's stylesheet for current versions, or a configuration file for earlier ones. The project's source is a pnpm monorepo, and the extension is one package in it.
