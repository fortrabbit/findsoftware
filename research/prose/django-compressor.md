Django Compressor is a Django app that combines and minifies the linked and inline JavaScript and CSS used in Django templates, and writes the result to cacheable static files. It is a Python package installed with pip. Templates can also use it through Jinja2, which the project supports through an extension.

Compression can run during a request, or offline: offline compression runs the compress management command during deployment, as a build step.

## Worth knowing

The pip package is named django_compressor, and the Python module is named compressor.
