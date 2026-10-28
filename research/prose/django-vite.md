django-vite is a Python package that connects Vite, the JavaScript build tool, to Django templates. It is installed with pip. In development mode its template tags include assets from the Vite development server, and in production mode they read the Vite manifest and include the built assets as standard assets.

## Worth knowing

The Vite configuration has to enable the manifest output, since production mode reads the manifest file.
