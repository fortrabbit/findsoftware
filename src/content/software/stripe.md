---
id: stripe
name: Stripe
urls:
  home: https://stripe.com
  docs: https://docs.stripe.com
  pricing: https://stripe.com/pricing
category:
  - e-commerce
description: Hosted payments and billing platform, with APIs and a dashboard, operated by Stripe, LLC.
status: hosted-service
maintainer: Stripe, LLC
maintainerType: company
adminUi: true
headlessApi:
  - rest
licenseModel: saas
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://stripe.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.stripe.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://stripe.com/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://stripe.com/en-de/legal/ssa
    checkedAt: 2026-11-03
  - field: category
    url: https://stripe.com/en-de
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://stripe.com/en-de
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.stripe.com/api
    checkedAt: 2026-11-03
ai: authored
---

Stripe is a hosted payments and billing platform. Sites and apps take payments and manage subscriptions through its [REST API](https://docs.stripe.com/api), and account users work in the Stripe Dashboard, where team roles are managed. Stripe runs the service on its own infrastructure, so nothing is installed on the site that uses it.

The Dashboard login supports single sign-on through SAML 2.0.

## Worth knowing

The API applies a global limit of 100 requests per second in live mode, per the [rate limit page](https://docs.stripe.com/rate-limits).
