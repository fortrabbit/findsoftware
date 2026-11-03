---
id: docraptor
name: DocRaptor
urls:
  home: https://docraptor.com
  docs: https://docraptor.com/documentation/getting-started
  pricing: https://docraptor.com/signup
category:
  - media
description: Hosted HTML-to-PDF conversion API that renders HTML and CSS to PDF with the Prince engine.
status: hosted-service
maintainer: DocRaptor, LLC
maintainerType: company
parent: Artifex Software, Inc.
headlessApi:
  - rest
licenseModel: saas
social:
  x: https://twitter.com/DocRaptor
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://docraptor.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://docraptor.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://docraptor.com/documentation/getting-started
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://docraptor.com/security-and-privacy
    checkedAt: 2026-11-03
  - field: parent
    url: https://docraptor.com/security-and-privacy
    checkedAt: 2026-11-03
  - field: category
    url: https://docraptor.com
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docraptor.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://docraptor.com/signup
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
templating: null
i18n: null
renderingModes: null
---

DocRaptor is a hosted HTML-to-PDF conversion API, built on the Prince PDF engine. A caller sends HTML and CSS to the REST interface and receives a PDF, and the [security and privacy page](https://docraptor.com/security-and-privacy) names DocRaptor, LLC as the contracting entity, now part of the Artifex Software group. Accounts are on monthly plans based on usage, with a free plan that allows no overage. The documentation lists limits on generation time, simultaneous requests and documents per billing period, and no hard limits on the number of pages or the size of input and output.

## Worth knowing

Rendering runs on AWS in the us-east-1 region, which the security page states. A site or app that calls the service depends on that infrastructure and on the document limits of its plan.
