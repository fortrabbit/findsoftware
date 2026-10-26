py4web is a Python web framework for database-driven web applications, and the [homepage](https://py4web.com) calls it the successor of web2py. It is installed with pip, and a built-in `_dashboard` app replaces the admin and appadmin of web2py. Templates use yatl and Renoir. The reference manual lists drivers for SQLite, PostgreSQL, MySQL and other databases, and a RestAPI that comes from pyDAL. For production, the [installation chapter](https://py4web.com/_documentation/static/en/chapter-03.html) shows the application running as a WSGI app under gunicorn.

## Worth knowing

The Python minimum is stated several ways: the docs say 3.7 or later, the README 3.9 or later, and the PyPI package requires 3.10 or later. The README says the project is not yet stable. GitHub has tags but no releases; the PyPI package is where new versions are published.
