---
id: aws-cognito
name: Amazon Cognito
urls:
  home: https://aws.amazon.com/cognito
  docs: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
  pricing: https://aws.amazon.com/cognito/pricing/
category:
  - auth
description: Hosted identity platform run by AWS for web and mobile apps, with a user directory, sign-in and OAuth 2.0 tokens.
status: hosted-service
maintainer: Amazon Web Services, Inc.
maintainerType: company
parent: Amazon.com, Inc.
hqCountry: US
adminUi: true
licenseModel: saas
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://aws.amazon.com/cognito
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
    checkedAt: 2026-10-31
  - field: urls
    url: https://aws.amazon.com/cognito/pricing/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://aws.amazon.com/privacy/
    checkedAt: 2026-10-31
  - field: parent
    url: https://aws.amazon.com/privacy/
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://aws.amazon.com/privacy/
    checkedAt: 2026-10-31
  - field: category
    url: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
    checkedAt: 2026-10-31
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

Amazon Cognito is an identity platform for web and mobile apps, run by Amazon Web Services. It has two parts that work alone or together: a user pool, which is the user directory and sign-in, and an identity pool, which exchanges a trusted sign-in for temporary AWS credentials. User pools accept SAML 2.0 and OIDC identity providers for single sign-on, and the AWS Management Console is where user profiles are managed.

## Worth knowing

Cognito is a hosted service with no install step. It runs only inside AWS, and the docs describe no way to run it elsewhere. Pricing is per monthly active user, and the free tier covers the Essentials and Lite tiers, so the figures sit on the [pricing page](https://aws.amazon.com/cognito/pricing/) rather than here.
