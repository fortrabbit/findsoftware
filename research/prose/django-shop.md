django-SHOP is an e-commerce framework based on Django. It does not ship a finished shop: the [tutorial](https://django-shop.readthedocs.io/en/latest/tutorial/intro.html) starts from a cookiecutter template, and the merchant writes the project on top, including the product models and an administration interface for them. The framework's own pages describe its views as REST based, with translatable product fields.

The [Docker reference](https://django-shop.readthedocs.io/en/latest/reference/docker.html) runs the shop as a uWSGI application server container next to PostgreSQL, Redis and Elasticsearch containers under Docker Compose. Jacob Rief holds the copyright and is the PyPI author.

## Worth knowing

The compatibility table in the docs ends at Django 3.0, and the package metadata limits Django to versions below 3.1.
