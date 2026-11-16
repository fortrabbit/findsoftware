pytest-django lets a Django project run its tests with pytest. Tests can be plain functions that use pytest fixtures, unittest-style TestCase classes keep working, and the test database can be reused between runs. The README says the suite can run across several processes through the pytest-xdist plugin.

## Worth knowing

Compatibility follows Django and pytest releases: the README says that for older versions one should use previous pytest-django releases.
