---
id: ocsigen
name: Ocsigen Eliom
urls:
  home: https://ocsigen.org
  repository: https://github.com/ocsigen/eliom
  docs: https://ocsigen.org/eliom/latest/index.html
category:
  - framework
description: OCaml framework for building client and server web and mobile applications as a single program.
status: active
maintainer: Ocsigen
firstRelease: 2006
language: ocaml
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
templating: tyxml
i18n: yes, through the Ocsigen i18n library
runsAs:
  - always-on
renderingModes:
  - server
installMethod: opam install eliom
licenseModel: open-source
license: LGPL version 2.1 with an OpenSSL exemption, GNU Lesser General Public License with openssl linking exception, LGPL-2.1-only WITH OCaml-LGPL-linking-exception
currentMajor: "12"
latestReleaseDate: 2026-06-25
githubStargazers: 329
contributors: 51
social:
  forum: https://discuss.ocaml.org
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://ocsigen.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/ocsigen/eliom
    checkedAt: 2026-10-26
  - field: urls
    url: https://ocsigen.org/eliom/latest/index.html
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://ocsigen.org/credits.html
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/ocsigen/eliom
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/ocsigen/eliom/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/ocsigen/eliom/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/ocsigen/eliom/master/COPYING
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/ocsigen/eliom/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/ocsigen/eliom/12.1.0/eliom.opam
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/ocsigen/eliom/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://ocsigen.org/tuto/latest/basics-server.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://raw.githubusercontent.com/ocsigen/eliom/master/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://ocsigen.org/tuto/latest/basics-server.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://ocsigen.org/tuto/latest/basics-server.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://ocsigen.org/tuto/latest/basics-server.html
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://raw.githubusercontent.com/ocsigen/eliom/master/CHANGES
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/ocsigen/eliom/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/ocsigen/eliom/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/ocsigen/eliom
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/ocsigen/eliom/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Eliom is the full-stack framework of the Ocsigen project, for building client and server web and mobile applications in OCaml. Its README describes a single program that holds both sides of an application, and says Eliom can also be used as a traditional server-side web framework. Pages are typed with TyXML, which rejects wrongly nested HTML at compile time. Eliom is installed with opam and runs on Ocsigen Server, an OCaml web server that listens on a port.

## Worth knowing

The repository states its license in three wordings: an LGPL 2.1 grant with an OpenSSL exemption in one file, the LGPL with an OpenSSL linking exception in another, and an OCaml linking exception in the package file.
