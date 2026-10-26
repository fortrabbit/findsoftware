---
id: datsys
name: Datsys
urls:
  repository: https://github.com/metasoarous/datsys
category:
  - framework
description: Clojure and ClojureScript web application framework built on Datomic or DataScript, Reagent and component-based system wiring.
status: stub
maintainer: Christopher T. Small
maintainerType: individual
language: clojure
installMethod: clone the repository and run lein repl
licenseModel: open-source
license: EPL-1.0
githubStargazers: 232
contributors: 7
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/metasoarous/datsys
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/metasoarous/datsys/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/metasoarous/datsys
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/metasoarous/datsys/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/metasoarous/datsys/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/metasoarous/datsys/blob/dev/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/metasoarous/datsys/blob/dev/LICENSE
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/metasoarous/datsys
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/metasoarous/datsys/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Datsys is a web application framework for Clojure and ClojureScript. Its README describes it as built from four libraries: Datsync, which syncs a DataScript database in the browser with a Datomic database on the server; Datview, for turning query results into UI components; Datreactor, for event handling; and Datspec, for protocols and specs. The parts are assembled as a system with Stuart Sierra's Component library, and the README says any of them can be used without the others.

The project is started from a Leiningen REPL with `(run)`, which starts the system and serves a browser app on a local port.

## Worth knowing

The repository has no tagged release, and its newest commit on the default branch is from 2017. The README describes its Datomic Pro setup as partial and points to the wiki for the rest.
