---
id: silktide-consent-manager
name: Silktide Consent Manager
urls:
  home: https://silktide.com/consent-manager/
  repository: https://github.com/silktide/consent-manager
  docs: https://silktide.com/consent-manager/docs/
category:
  - forms
description: Free, open-source cookie consent banner for websites that loads third-party scripts and passes consent choices to Google Consent Mode.
status: active
maintainer: Silktide
maintainerType: company
firstRelease: 2025
hqCountry: US
language: javascript
i18n: multilingual, texts can be translated
installMethod: cdn
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-07-02
githubStargazers: 145
contributors: 4
social:
  x: https://x.com/silktide
  youtube: https://www.youtube.com/silktide
  facebook: https://www.facebook.com/silktide/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://silktide.com/consent-manager/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/silktide/consent-manager
    checkedAt: 2026-11-03
  - field: urls
    url: https://silktide.com/consent-manager/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/silktide/consent-manager/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/silktide/consent-manager/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://silktide.com/contact/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/silktide/consent-manager
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/silktide/consent-manager/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://silktide.com/consent-manager/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://silktide.com/consent-manager/install/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://silktide.com/consent-manager/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/silktide/consent-manager/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/silktide/consent-manager/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://silktide.com/consent-manager/docs/change-log/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/silktide/consent-manager/tags
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://silktide.com/consent-manager/docs/change-log/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/silktide/consent-manager
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/silktide/consent-manager/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
---

Silktide Consent Manager is a cookie consent banner for websites, delivered as one JavaScript file and one stylesheet. A page loads both, from the jsDelivr CDN or from files the site hosts, then calls an init function with the consent types the site uses. The banner stores each visitor's choice in the browser and loads third-party scripts only after consent. It updates Google Consent Mode and can fire a custom event for Google Tag Manager. The code is published in the repository of Silktide, a company that also sells a separate platform for website governance.

## Worth knowing

Choices are kept in the visitor's browser and nothing is sent to Silktide. The project's FAQ says a site that needs to show a visitor consented has to send each choice to its own server or analytics. The banner's compliance statements are the project's own claims about GDPR and ePrivacy.
