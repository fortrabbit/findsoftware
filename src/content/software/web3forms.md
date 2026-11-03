---
id: web3forms
name: Web3Forms
urls:
  home: https://web3forms.com
  docs: https://docs.web3forms.com/
category:
  - forms
description: Hosted form backend that sends contact-form submissions from static websites to an email inbox, without server code.
status: hosted-service
maintainer: Web3Creative
parent: Web3Creative
hqCountry: IN
adminUi: true
headlessApi:
  - rest
licenseModel: saas
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://docs.web3forms.com/getting-started/installation
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.web3forms.com/
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.web3forms.com/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://docs.web3forms.com/getting-started/faq
    checkedAt: 2026-11-03
  - field: parent
    url: https://docs.web3forms.com/getting-started/faq
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://docs.web3forms.com/getting-started/faq
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.web3forms.com/getting-started/pro-features
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.web3forms.com/getting-started/submissions-api
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
templating: null
i18n: null
renderingModes: null
---

Web3Forms is a hosted form backend. A form on a static site posts its fields to the vendor's endpoint with an access key, and the submission is sent to the email address that issued the key. The site needs no server code: the [installation guide](https://docs.web3forms.com/getting-started/installation) shows an HTML form whose action points at the endpoint, and the same fields can be posted from JavaScript.

The reserved field names set the subject, reply-to address, CC address, redirect and spam checks, and a submissions API is documented separately. The paid features include captchas, file attachments, webhooks and domain restriction, and the dashboard holds the settings for them.

## Worth knowing

Server-side submissions need a paid plan and a whitelisted server address, according to the API reference. The FAQ says the service does not store form submissions, and that it runs on servers in the United States. The service is a subsidiary product of Web3Creative, a registered business based in Kerala, India.
