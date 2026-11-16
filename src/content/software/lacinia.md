---
id: lacinia
name: Lacinia
urls:
  home: https://lacinia.readthedocs.io/en/latest/
  repository: https://github.com/walmartlabs/lacinia
  docs: https://lacinia.readthedocs.io/en/latest/
category:
  - backend
description: GraphQL execution engine for Clojure that runs queries against a schema written as EDN or GraphQL schema language.
status: active
maintainer: WalmartLabs
firstRelease: 2017
language: clojure
runtime:
  - jvm
hosting:
  - java
installMethod: Clojure CLI dependency on com.walmartlabs/lacinia in deps.edn
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-06-02
githubStargazers: 1863
contributors: 59
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/walmartlabs/lacinia
    checkedAt: 2026-11-16
  - field: urls
    url: https://lacinia.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: urls
    url: https://lacinia.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/walmartlabs/lacinia/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/walmartlabs/lacinia
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/walmartlabs/lacinia/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/walmartlabs/lacinia/master/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/walmartlabs/lacinia/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://lacinia.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://lacinia.readthedocs.io/en/latest/tutorial/create-project.html
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/walmartlabs/lacinia/commits/v0.13.0
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://clojars.org/api/artifacts/com.walmartlabs/lacinia
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/walmartlabs/lacinia/commits/1.3.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/walmartlabs/lacinia
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/walmartlabs/lacinia/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Lacinia is a GraphQL execution engine written in Clojure. The schema is written as Clojure data in EDN, or in GraphQL's schema definition language, and field resolver functions return the data for each field. A compiled schema executes the query it is given, typically inside a Ring handler function of the application, so the application's own HTTP code takes the request and returns the JSON. Lacinia does not decide where data comes from: a resolver can query a database or call another web service. The companion library lacinia-pedestal supplies HTTP support for the Pedestal framework.

## Worth knowing

The library ships precompiled ANTLR parsers, so a project that uses it as a dependency has to run a preparation step before first use. The documentation says the library targets Clojure 1.9 and uses clojure.spec.
