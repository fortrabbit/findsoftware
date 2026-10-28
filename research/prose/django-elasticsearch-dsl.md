Django Elasticsearch DSL is a Django package that indexes Django models into Elasticsearch. Each indexed model gets a Document class, registered with a decorator, that lists the model fields to index. Django signals keep the index in sync on save and delete, and management commands create, delete, rebuild and populate indices.

It is installed with pip and added to the Django INSTALLED_APPS setting, with the Elasticsearch connection set in the ELASTICSEARCH_DSL setting. Sabricot is named as the author on PyPI, and the repository belongs to the django-es GitHub organization.

## Worth knowing

The README asks that the package's major version match the major version of the Elasticsearch server in use.
