---
id: ninja
name: Ninja
urls:
  home: https://www.ninjaframework.org
  repository: https://github.com/ninjaframework/ninja
  docs: https://www.ninjaframework.org/documentation/getting_started/installing_ninja.html
category:
  - framework
description: Full-stack web framework for Java that builds server-side web applications and RESTful JSON services.
status: active
maintainer: ninjaframework
firstRelease: 2012
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - postgres
  - mysql
templating: freemarker
i18n: yes, languages defined in application.languages with messages_<language>.properties files
runsAs:
  - always-on
installMethod: Maven archetype
licenseModel: open-source
license: Apache-2.0, Apache 2.0
currentMajor: "7"
latestReleaseDate: 2023-12-07
githubStargazers: 1900
contributors: 66
social:
  x: https://twitter.com/ninjaframework
  forum: https://groups.google.com/d/forum/ninja-framework
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.ninjaframework.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/ninjaframework/ninja
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.ninjaframework.org/documentation/getting_started/installing_ninja.html
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.ninjaframework.org/documentation/deployment/getting_started.html
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/ninjaframework/ninja
    checkedAt: 2026-10-26
  - field: category
    url: https://www.ninjaframework.org/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.ninjaframework.org/documentation/getting_started/installing_ninja.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.ninjaframework.org/
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.ninjaframework.org/documentation/html_templating/getting_started.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.ninjaframework.org/documentation/working_with_relational_dbs/jpa.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.ninjaframework.org/documentation/working_with_relational_dbs/jpa.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.ninjaframework.org/documentation/working_with_relational_dbs/jpa.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.ninjaframework.org/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.ninjaframework.org/documentation/internationalization.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/ninjaframework/ninja
    checkedAt: 2026-10-26
  - field: license
    url: https://www.ninjaframework.org/
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/ninjaframework/ninja/develop/license.txt
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:org.ninjaframework+AND+a:ninja-core&core=gav&rows=200&wt=json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://repo1.maven.org/maven2/org/ninjaframework/ninja-core/maven-metadata.xml
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://search.maven.org/solrsearch/select?q=g:org.ninjaframework+AND+a:ninja-core&core=gav&rows=200&wt=json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/ninjaframework/ninja
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/ninjaframework/ninja/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Ninja is a full-stack web framework for Java that builds server-side web applications and RESTful JSON services. The project's site names Servlets, Guice, JPA, Flyway and Maven among the technologies it is built with, and its documentation covers HTML templating with Freemarker, JSON and XML, WebSockets, validation, a scheduler, caching and internationalization. A project starts from a Maven archetype. An application can be packaged as a WAR file for an application server or run as a standalone application that is started on the server. Database access goes through JPA, which the documentation says is implemented by Hibernate, and the example application uses an in-memory H2 database.

## Worth knowing

The documentation describes basic SSL support and no GZip support in the framework, and leaves both to the application container or a reverse proxy such as nginx.
