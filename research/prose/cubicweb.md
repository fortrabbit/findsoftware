CubicWeb is a Python web framework for data-centric applications, built with Semantic Web principles and driven by an explicit schema of the application's data. The homepage describes reusable components called cubes and says permissions are defined in the data model. It relies on a standard SQL database for storing and managing data; the configuration guide names PostgreSQL as the recommended database, with SQLite also supported.

Applications are installed with pip. The [deployment guide](https://cubicweb.readthedocs.io/en/stable/book/admin/deploy.html) runs an application under uWSGI as a long-running process. Python is the templating language, and the LDAP integration pages describe LDAP as a source of user credentials. The package is developed at Logilab, the name the PyPI description gives.

## Worth knowing

The stable documentation still carries an older release number than the newest release, so the reference pages can lag the code.
