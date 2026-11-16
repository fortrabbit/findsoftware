---
id: openiddict
name: OpenIddict
urls:
  home: https://openiddict.com/
  repository: https://github.com/openiddict/openiddict-core
  docs: https://documentation.openiddict.com/guides/getting-started/
category:
  - auth
description: OAuth 2.0 and OpenID Connect server, client and token validation stack for .NET applications.
status: active
maintainer: Kévin Chalet
firstRelease: 2017
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
databases:
  - mongodb
installMethod: nuget
licenseModel: open-source
license: Apache-2.0
currentMajor: "7"
latestReleaseDate: 2026-11-14
githubStargazers: 5302
contributors: 72
dependentPackages: 15
social:
  x: https://x.com/openiddict
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://openiddict.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://documentation.openiddict.com/guides/getting-started/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/openiddict/openiddict-core
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/openiddict/openiddict-core/blob/dev/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.nuget.org/v3/registration5-gz-semver2/openiddict/index.json
    checkedAt: 2026-11-16
  - field: category
    url: https://openiddict.com/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/openiddict/openiddict-core
    checkedAt: 2026-11-16
  - field: runtime
    url: https://openiddict.com/
    checkedAt: 2026-11-16
  - field: databases
    url: https://github.com/openiddict/openiddict-core/blob/dev/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://openiddict.com/
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/openiddict/openiddict-core
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://openiddict.com/
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/openiddict/openiddict-core/releases/tag/7.9.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/openiddict/openiddict-core/releases/tag/7.9.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/openiddict/openiddict-core
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/openiddict/openiddict-core/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/OpenIddict
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

OpenIddict adds OAuth 2.0 and OpenID Connect support to .NET applications. It has three stacks: a server stack for an authorization server, a validation stack for APIs that accept its tokens, and a client stack for signing in to a remote server. The stacks can be used together or on their own. The project natively supports Entity Framework Core, Entity Framework 6 and MongoDB stores, and custom stores can be written for other providers. The [getting-started guide](https://documentation.openiddict.com/guides/getting-started/) describes each stack.

## Worth knowing

The project describes itself as a framework rather than a turnkey identity provider: a server needs custom code, typically at least an authorization controller, before it works. The README says developers should run the OpenID conformance tests against their own deployments, since the project is a poor candidate for certification.
