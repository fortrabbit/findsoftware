---
id: hey-api
name: Hey API
urls:
  home: https://heyapi.dev
  repository: https://github.com/hey-api/hey-api
  docs: https://heyapi.dev/docs/openapi/typescript/get-started
category:
  - dev-tool
description: Code generator that turns OpenAPI specifications into TypeScript clients, schemas and other generated code, published as @hey-api/openapi-ts.
status: active
maintainer: Hey API
firstRelease: 2024
language: javascript
runtime:
  - node
runtimeMin: node 22
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-06-22
githubStargazers: 5563
npmWeeklyDownloads: 7134416
contributors: 183
social:
  x: https://x.com/mrlubos
  bluesky: https://bsky.app/profile/heyapi.dev
  forum: https://github.com/orgs/hey-api/discussions
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://heyapi.dev/
    checkedAt: 2026-11-09
  - field: urls
    url: https://heyapi.dev/docs/openapi/typescript/get-started
    checkedAt: 2026-11-09
  - field: urls
    url: https://api.github.com/repos/hey-api/hey-api
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://registry.npmjs.org/@hey-api%2fopenapi-ts
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://raw.githubusercontent.com/hey-api/hey-api/main/LICENSE
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/hey-api/hey-api
    checkedAt: 2026-11-09
  - field: category
    url: https://heyapi.dev/docs/openapi/typescript/get-started
    checkedAt: 2026-11-09
  - field: runtime
    url: https://heyapi.dev/docs/openapi/typescript/get-started
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://heyapi.dev/docs/openapi/typescript/get-started
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://heyapi.dev/docs/openapi/typescript/get-started
    checkedAt: 2026-11-09
  - field: license
    url: https://raw.githubusercontent.com/hey-api/hey-api/main/LICENSE
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://raw.githubusercontent.com/hey-api/hey-api/main/LICENSE
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://registry.npmjs.org/@hey-api%2fopenapi-ts
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@hey-api%2fopenapi-ts
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/hey-api/hey-api
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/hey-api/hey-api/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@hey-api/openapi-ts
    checkedAt: 2026-11-09
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

Hey API is an OpenAPI code generator for TypeScript, published on npm as @hey-api/openapi-ts. It runs from the command line, from a package.json script or from a script that calls its createClient function, reads an OpenAPI specification and writes the generated client code into an output directory of the project. The generated clients target HTTP clients such as the Fetch API, Angular, Axios, Next.js and Nuxt, and the package accepts any OpenAPI specification.

The package is installed as a development dependency, and the build pipeline can run it through the Vite plugin the project publishes alongside it. The repository is a monorepo that holds other packages of the Hey API ecosystem.

The project is maintained by Hey API, and the license file names it as the copyright holder under the MIT license.

## Worth knowing

The package states that it is in initial development and asks users to pin an exact version, and the project publishes migration notes for each breaking release. The project also operates a hosted Hey API Registry, at app.heyapi.dev, that stores specifications; the generator can read a specification from it by a registry name.
