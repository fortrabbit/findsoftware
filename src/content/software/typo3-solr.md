---
id: typo3-solr
name: Apache Solr for TYPO3
urls:
  home: https://www.typo3-solr.com/
  repository: https://github.com/TYPO3-Solr/ext-solr
  docs: https://docs.typo3.org/p/apache-solr-for-typo3/solr/main/en-us/
category:
  - search
description: TYPO3 extension that connects the TYPO3 CMS to an Apache Solr server for site search.
status: active
maintainer: dkd Internet Service GmbH
maintainerType: company
firstRelease: 2009
hqCountry: DE
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - typo3-cms
templating: fluid
installMethod: composer, typo3 extension manager zip, t3x file
licenseModel: open-source
license: GPL-3.0-or-later
currentMajor: "14"
latestReleaseDate: 2026-09-16
githubStargazers: 146
packagistDownloads: 3505509
contributors: 200
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.typo3-solr.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/TYPO3-Solr/ext-solr
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.typo3.org/p/apache-solr-for-typo3/solr/main/en-us/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://extensions.typo3.org/extension/solr
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.typo3-solr.com/legal-notice/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.typo3-solr.com/legal-notice/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.typo3-solr.com/legal-notice/
    checkedAt: 2026-10-28
  - field: category
    url: https://extensions.typo3.org/extension/solr
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://docs.typo3.org/p/apache-solr-for-typo3/solr/main/en-us/
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/TYPO3-Solr/ext-solr
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/TYPO3-Solr/ext-solr/14.0.2/composer.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/TYPO3-Solr/ext-solr/14.0.2/composer.json
    checkedAt: 2026-10-28
  - field: templating
    url: https://docs.typo3.org/p/apache-solr-for-typo3/solr/main/en-us/Frontend/Concepts.html
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/TYPO3-Solr/ext-solr/14.0.2/composer.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.typo3.org/p/apache-solr-for-typo3/solr/main/en-us/GettingStarted/InstallTYPO3Extension.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/TYPO3-Solr/ext-solr/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/TYPO3-Solr/ext-solr/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/TYPO3-Solr/ext-solr
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/TYPO3-Solr/ext-solr/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/apache-solr-for-typo3/solr.json
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Apache Solr for TYPO3 is a TYPO3 extension that integrates the Apache Solr search server into the TYPO3 CMS. Solr runs as a separate server: the getting-started guide asks for Solr to be installed first, and names a hosted option and a Docker image for it. The extension is added to a site with Composer or the TYPO3 Extension Manager, and its search results are rendered with Fluid templates.

## Worth knowing

A hosted Solr service for TYPO3 sites, Hosted Solr, is offered beside the extension. The extension's getting-started guide names a hosted option for the Solr server.
