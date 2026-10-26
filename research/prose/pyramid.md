Pyramid is a Python web framework maintained under the Pylons Project. An application is a set of views and routes registered on a configurator, and the same mechanism serves a single-file program and a larger package. The project's cookiecutter generates a package with a configuration file that the pserve command reads to start a server. The documentation says any WSGI server can run a Pyramid application, and names mod_wsgi and gunicorn as production alternatives to the default server. Templating, database and security support come from add-ons, which the project lists in its add-on directory.

## Worth knowing

The default server is Waitress, which the documentation describes as suited to development and light production use. For production it points to mod_wsgi and gunicorn.
