---
id: zod-to-openapi
name: Zod to OpenAPI
urls:
  repository: https://github.com/asteasolutions/zod-to-openapi
category:
  - backend
description: TypeScript library that generates OpenAPI (Swagger) documentation from Zod schemas and route definitions.
status: active
maintainer: Astea Solutions AD
firstRelease: 2022
hqCountry: BG
language: javascript
basedOn:
  - zod
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "9"
latestReleaseDate: 2026-07-19
githubStargazers: 1635
npmWeeklyDownloads: 7661945
contributors: 29
dependentRepos: 39
dependentPackages: 54
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://api.github.com/repos/asteasolutions/zod-to-openapi
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://asteasolutions.com/privacy/
    checkedAt: 2026-11-17
  - field: hqCountry
    url: https://asteasolutions.com/privacy/
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://registry.npmjs.org/@asteasolutions/zod-to-openapi
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/asteasolutions/zod-to-openapi
    checkedAt: 2026-11-17
  - field: category
    url: https://github.com/asteasolutions/zod-to-openapi/blob/master/README.md
    checkedAt: 2026-11-17
  - field: basedOn
    url: https://github.com/asteasolutions/zod-to-openapi/blob/master/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/asteasolutions/zod-to-openapi/blob/master/README.md
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/asteasolutions/zod-to-openapi
    checkedAt: 2026-11-17
  - field: licenseModel
    url: https://github.com/asteasolutions/zod-to-openapi/blob/master/LICENSE
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://github.com/asteasolutions/zod-to-openapi/releases/tag/v9.1.0
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://github.com/asteasolutions/zod-to-openapi/releases/tag/v9.1.0
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@asteasolutions/zod-to-openapi
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/asteasolutions/zod-to-openapi
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/asteasolutions/zod-to-openapi/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@asteasolutions/zod-to-openapi
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@asteasolutions/zod-to-openapi
    checkedAt: 2026-11-17
ai: authored
packagistDownloads: null
---

Zod to OpenAPI reads the Zod schemas and route definitions of a TypeScript API and writes an OpenAPI document from them, so the schemas that validate requests also describe them. Schemas are named with an `openapi` method that Zod objects gain once the library extends Zod, and a registry collects named schemas, parameters and paths. A generator turns the registry into the components section or a full document for OpenAPI 3.0, 3.1 or 3.2. The README shows a script in the build step that writes the document to a file such as `openapi-docs.json`.

## Worth knowing

For Zod 3 schemas, the README points to an older release line that its maintainers say they do not intend to support going forward. Calling `z.nullable()` on a registered schema does not produce a reference to it; the README suggests the schema's own `.nullable()` method instead. Schemas of types the library does not support raise an error unless the type is given by hand through the `openapi` method.
