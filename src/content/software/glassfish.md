---
id: glassfish
name: Eclipse GlassFish
urls:
  home: https://glassfish.org
  repository: https://github.com/eclipse-ee4j/glassfish
  docs: https://glassfish.org/documentation
category:
  - web-server
description: Open-source Jakarta EE application server, distributed as a server package and as an embedded executable JAR.
status: active
maintainer: Eclipse Foundation AISBL
maintainerType: foundation
firstRelease: 2012
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
adminUi: true
runsAs:
  - always-on
installMethod: zip distribution (server)
licenseModel: open-source
license: EPL-2.0, GPL-2.0 WITH Classpath-exception-2.0
currentMajor: "8"
latestReleaseDate: 2026-10-04
githubStargazers: 444
contributors: 89
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://glassfish.org/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/eclipse-ee4j/glassfish
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/eclipse-ee4j/glassfish
    checkedAt: 2026-10-29
  - field: urls
    url: https://glassfish.org/documentation
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://www.eclipse.org/legal/
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://glassfish.org/
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:org.glassfish.main.distributions+AND+a:glassfish&core=gav&rows=200&wt=json
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/eclipse-ee4j/glassfish/languages
    checkedAt: 2026-10-29
  - field: category
    url: https://glassfish.org/
    checkedAt: 2026-10-29
  - field: license
    url: https://raw.githubusercontent.com/eclipse-ee4j/glassfish/main/NOTICE.md
    checkedAt: 2026-10-29
  - field: license
    url: https://raw.githubusercontent.com/eclipse-ee4j/glassfish/main/NOTICE.md
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/eclipse-ee4j/glassfish/main/NOTICE.md
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/eclipse-ee4j/glassfish/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/eclipse-ee4j/glassfish/releases
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/eclipse-ee4j/glassfish
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/eclipse-ee4j/glassfish/contributors
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://glassfish.org/download
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://glassfish.org/docs/latest/embedded-server-guide.html
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/eclipse-ee4j/glassfish.docker/wiki
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://glassfish.org/download
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://glassfish.org/docs/latest/quick-start-guide.html
    checkedAt: 2026-10-29
  - field: runtime
    url: https://glassfish.org/docs/latest/embedded-server-guide.html
    checkedAt: 2026-10-29
  - field: runtimeMin
    url: https://glassfish.org/download
    checkedAt: 2026-10-29
  - field: adminUi
    url: https://glassfish.org/
    checkedAt: 2026-10-29
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Eclipse GlassFish is an open-source application server that implements Jakarta EE. It comes as a zip distribution whose default domain, started from the command line, keeps a server process running, and as an embedded executable JAR that needs no installation. The server includes an administration console. Docker images and Maven artifacts are published for it as well. The Eclipse Foundation maintains the project.

Because the server domain is a long-running process, a host has to allow processes that keep running; static file hosting does not fit.

## Worth knowing

The server runs on a Java virtual machine and needs JDK 21 or higher on the host for the current release line. The project is offered under the Eclipse Public License 2.0 or the GNU General Public License 2.0 with the Classpath exception, and a user may choose either.
