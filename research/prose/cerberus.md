Cerberus is a Python library that checks data against a schema of rules. A Validator is built from a schema dict, and its validate method returns whether a dictionary matches it. The library provides type checking and other base functionality, and custom validation can be added to it. Nicola Iarocci maintains the project.

The package is installed from PyPI with pip. The [documentation](https://docs.python-cerberus.org/) is the project's own reference.

## Worth knowing

Python versions below 3.8 install one extra dependency, importlib-metadata, so the package is not dependency-free on those interpreters.
