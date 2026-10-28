---
id: astro-vscode
name: Astro
urls:
  home: https://astro.build
  repository: https://github.com/withastro/astro
  docs: https://docs.astro.build/en/editor-setup/
category:
  - dev-tool
description: Visual Studio Code extension that adds language support for .astro files, powered by the Astro language server.
status: active
maintainer: The Astro Technology Company
maintainerType: company
firstRelease: 2021
language: javascript
basedOn:
  - astro
runsAs:
  - local
installMethod: VS Code Marketplace, extension astro-build.astro-vscode
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-08
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://raw.githubusercontent.com/withastro/astro/main/packages/language-tools/vscode/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/withastro/astro
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.astro.build/en/editor-setup/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://astro.build/blog/joining-cloudflare/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://astro.build/blog/joining-cloudflare/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/withastro/astro
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://docs.astro.build/en/editor-setup/
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/withastro/astro/main/packages/language-tools/vscode/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.astro.build/en/editor-setup/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/withastro/astro/main/packages/language-tools/vscode/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/withastro/astro/main/packages/language-tools/vscode/package.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/withastro/astro/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/withastro/astro/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/withastro/astro/releases
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

Astro for VS Code is the official Visual Studio Code extension for Astro projects. It adds language support for .astro files and is powered by the Astro language server. The extension covers highlighting, diagnostics, completions with auto-imports, formatting through Prettier, symbols and go to definition, and it adds a TypeScript plugin for importing Astro components into JavaScript and TypeScript files.

It installs from the VS Code Marketplace, and the Astro editor setup docs name the Open VSX registry as a second route for editors such as Cursor and VSCodium. It runs inside the editor on the developer's machine.
