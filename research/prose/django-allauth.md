django-allauth is an integrated set of Django applications for authentication, registration and account management. It covers local accounts that sign in with a username or email address, and third-party accounts through social providers. Its `allauth.idp` module adds an OpenID Connect identity provider, and its `allauth.headless` app serves single-page and mobile applications. A Django project installs it with pip, adds the apps to its settings, as the [documentation](https://docs.allauth.org/en/latest/) describes. Raymond Penners and contributors maintain it. The source code is on Codeberg, and a GitHub repository mirrors it.

## Worth knowing

The Django admin login does not go through the django-allauth workflow, so rate limits and two-factor checks do not apply to it by default.
