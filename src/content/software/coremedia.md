---
id: coremedia
name: CoreMedia Content Cloud
urls:
  home: https://www.coremedia.com
  docs: https://documentation.coremedia.com/
category:
  - cms
  - headless-cms
description: Proprietary enterprise content management system and digital experience platform, offered as a hybrid headless CMS.
status: active
maintainer: CoreMedia GmbH
maintainerType: company
hqCountry: DE
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes
installMethod: Docker Compose
licenseModel: commercial
license: All Rights Reserved
currentMajor: "13"
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.coremedia.com
    checkedAt: 2026-10-26
  - field: urls
    url: https://documentation.coremedia.com/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.coremedia.com/imprint
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.coremedia.com
    checkedAt: 2026-10-26
  - field: category
    url: https://www.coremedia.com
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://documentation.coremedia.com/how-to-guides/quick-start/quickstart-docker/cmcc-12/
    checkedAt: 2026-10-26
  - field: license
    url: https://www.coremedia.com/product-support-lifecycle
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.coremedia.com/product-support-lifecycle
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://www.coremedia.com/product-support-lifecycle
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://www.coremedia.com/content-management-system/headless-cms
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.coremedia.com/content-management-system/headless-cms
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://www.coremedia.com
    checkedAt: 2026-10-26
ai: authored
---

CoreMedia Content Cloud is a proprietary content management system and digital experience platform, offered as a hybrid headless CMS. CoreMedia GmbH, registered in Hamburg, Germany, maintains it. Content is delivered over REST and GraphQL APIs, editors work in a content interface with in-context preview, and the product page lists role-based access control and multilingual content management. The cloud offering runs on AWS in European data centers, and private cloud and on-premises deployment are also offered. The documented development setup uses Docker Compose.

## Worth knowing

The system is licensed. The development setup expects license files for the cms, mls and rls servers in a local directory before the containers start, so a developer needs those files to run it.
