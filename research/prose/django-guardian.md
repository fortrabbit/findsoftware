django-guardian is an extra authentication backend that stores permissions on individual model objects and answers checks for them, so a user can hold a permission on one record without holding it on the model. It builds on the object-level permission facilities that Django's authorization system provides. Projects add it to the authentication backends next to Django's default model backend and run the migrations that create its tables.

## Worth knowing

By default Guardian relates permissions to any Django model through generic foreign keys, which has performance implications. The docs point new projects to their performance tuning and configuration pages.
