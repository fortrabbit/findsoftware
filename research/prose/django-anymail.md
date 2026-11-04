Anymail is Django email integration for transactional email service providers. It lets a Django project send and receive email through the provider it chooses, using Django's built-in email functions, and it exposes common provider features such as tags, metadata and tracking behind one API. Inbound email arrives through a provider's webhooks, which connect to Django signals. A project installs it with pip and sets one backend per provider in its settings, as the [documentation](https://anymail.dev/en/stable/) describes. The Anymail Contributors maintain it, and the source is on [GitHub](https://github.com/anymail/django-anymail).

## Worth knowing

Sending depends on an account with the chosen provider. The provider is a third-party hosted service that the library calls.
