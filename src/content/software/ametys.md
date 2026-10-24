---
id: ametys
name: Ametys CMS
urls:
  home: https://www.ametys.org
  repository: https://code.ametys.org/projects/AMETYS/repos/cms
  docs: https://docs.ametys.org/fr/ametys-v4.html
  plugins: https://docs.ametys.org/fr/plugins.html
category:
  - cms
description: Java content management system for websites, intranets and portals, published under the Apache License.
status: active
maintainer: Ametys
firstRelease: 2009
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
databases:
  - mysql
  - oracle
  - postgres
adminUi: true
templating: xslt
i18n: yes, pages translated per site language
runsAs:
  - always-on
installMethod: Tomcat application server, per the Linux installation guide
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-01
social:
  x: https://twitter.com/AmetysCMS
  forum: https://www.ametys.org/forum
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://www.ametys.org/
    checkedAt: 2026-10-24
  - field: urls
    url: https://code.ametys.org/rest/api/1.0/projects/AMETYS/repos/cms
    checkedAt: 2026-10-24
  - field: urls
    url: https://docs.ametys.org/fr/ametys-v4.html
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://docs.ametys.org/fr/ametys-v4.html
    checkedAt: 2026-10-24
  - field: language
    url: https://docs.ametys.org/fr/ametys-v4/manuel-d-installation-et-d-exploitation/pre-requis-et-recommandations.html
    checkedAt: 2026-10-24
  - field: runtime
    url: https://docs.ametys.org/fr/ametys-v4/manuel-d-installation-et-d-exploitation/pre-requis-et-recommandations.html
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://docs.ametys.org/fr/ametys-v4/manuel-d-installation-et-d-exploitation/pre-requis-et-recommandations.html
    checkedAt: 2026-10-24
  - field: category
    url: https://www.ametys.org/fr/index.html
    checkedAt: 2026-10-24
  - field: databases
    url: https://docs.ametys.org/fr/ametys-v4/manuel-d-installation-et-d-exploitation/guide-d-installation-sous-linux.html
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://docs.ametys.org/fr/ametys-v4/manuel-d-installation-et-d-exploitation/guide-d-installation-sous-linux.html
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://docs.ametys.org/fr/ametys-v4/manuel-d-installation-et-d-exploitation/guide-d-installation-sous-linux.html
    checkedAt: 2026-10-24
  - field: license
    url: https://docs.ametys.org/fr/ametys-v4.html
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://docs.ametys.org/fr/ametys-v4.html
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://docs.ametys.org/fr/ametys-v4.html
    checkedAt: 2026-10-24
  - field: i18n
    url: https://docs.ametys.org/fr/ametys-v4/manuel-utilisateur/autres-fonctionnalites/traduire-une-page.html
    checkedAt: 2026-10-24
  - field: urls
    url: https://docs.ametys.org/fr/ametys-v4.html
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://code.ametys.org/rest/api/1.0/projects/AMETYS/repos/cms/tags?limit=1000
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://code.ametys.org/rest/api/1.0/projects/AMETYS/repos/cms/tags?limit=1000
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://code.ametys.org/rest/api/1.0/projects/AMETYS/repos/cms/tags?limit=1000
    checkedAt: 2026-10-24
  - field: templating
    url: https://docs.ametys.org/fr/ametys-v4/manuel-de-parametrage-et-d-integration/integration-graphique/definition-de-gabarit/ecriture-d-un-gabarit.html
    checkedAt: 2026-10-24
figure:
  emoji: 📝
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Java · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Ametys CMS is a content management system written in Java and published by Ametys under the Apache License. It is used for websites, intranets and portals, and it runs as a web application in a Tomcat application server, with a database connector chosen for MySQL, Oracle, Derby or PostgreSQL. The Linux installation guide documents Tomcat 9 and the connector setup. Page templates are XSL stylesheets that turn the CMS's XML into HTML. Sites can be organized in a hierarchy that shares content between them, and users receive rights through profiles.

The project's homepage says the software is offered in SaaS mode as well as for on-premise deployment.

## Worth knowing

The source is hosted on the project's own Git server at code.ametys.org, not on GitHub, and its raw file endpoint asks for a login. Version 4.6 and later require Java 17 or later, according to the prerequisites page.
