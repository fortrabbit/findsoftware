---
id: mojoportal
name: mojoPortal
urls:
  home: https://www.mojoportal.com
  repository: https://github.com/i7MEDIA/mojoportal
  docs: https://www.mojoportal.com/docs
category:
  - cms
description: Content management system and web application framework written in C# for ASP.NET, running on SQL Server, MySQL, PostgreSQL or SQLite.
status: active
maintainer: i7MEDIA, LLC
maintainerType: company
firstRelease: 2004
hqCountry: US
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
contentStore:
  - database
databases:
  - sqlserver
  - mysql
  - postgres
  - sqlite
adminUi: true
i18n: partial support for multiple languages within a site; a site can be localized into one language
installMethod: deployment zip for the chosen database, uploaded to the site root
licenseModel: open-source
license: CPL-1.0, EPL-1.0, GPL (the mojoPortal Data Library for MySQL only)
currentMajor: "3"
latestReleaseDate: 2026-08-10
githubStargazers: 212
contributors: 9
social:
  forum: https://www.mojoportal.com/forums
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.mojoportal.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.mojoportal.com/docs
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/i7MEDIA/mojoportal
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.mojoportal.com/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.mojoportal.com/contribute
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/i7MEDIA/mojoportal
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/i7MEDIA/mojoportal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/i7MEDIA/mojoportal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.mojoportal.com/installation-quick-start.aspx
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.mojoportal.com/installation-quick-start.aspx
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.mojoportal.com/installation-quick-start.aspx
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.mojoportal.com/docs/database-configuration
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://www.mojoportal.com/hosting-requirements
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://www.mojoportal.com/features
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.mojoportal.com/localization
    checkedAt: 2026-10-26
  - field: license
    url: https://www.mojoportal.com/license.aspx
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/i7MEDIA/mojoportal/master/LICENSE.md
    checkedAt: 2026-10-26
  - field: license
    url: https://www.mojoportal.com/license.aspx
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/i7MEDIA/mojoportal/master/LICENSE.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/i7MEDIA/mojoportal/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/i7MEDIA/mojoportal/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://www.mojoportal.com/come-and-get-it.aspx
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/i7MEDIA/mojoportal
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/i7MEDIA/mojoportal/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://i7media.com
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

mojoPortal is a C# and ASP.NET web application framework and CMS. Content is created and managed in the browser. The documentation covers roles and permissions, LDAP and OpenID Connect sign-in, and several sites in one installation sharing one database. A site can be localized into one language, with partial support for several languages within a site.

i7MEDIA primarily develops and supports the project, and also runs hosting plans that include free installation of the latest mojoPortal version.

## Worth knowing

The project names two licenses that disagree. The license page says the Common Public License, and the LICENSE.md file in the repository says the code is primarily licensed under the Eclipse Public License 1.0; both are recorded. The license page also releases the MySQL data library under the GPL. The README also lists Commercial Features, among them Form Builder, Event Calendar with ticketing, Paywall and Fundraiser System, each with its own product page. Those are add-ons, not editions of the core.
