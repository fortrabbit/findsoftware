Wagtail is a content management system built on Django, a Python web framework. Editors manage a page tree in a built-in admin, and page content can be built from StreamField blocks. Wagtail runs as a Django application, so a production deployment needs a WSGI server, a database, file storage for media and a web server that serves static files. Content is available through a built-in REST API with two coexisting versions: one read-only, the other allowing authenticated create and edit. Torchbox maintains Wagtail and sells support services.

## Worth knowing

GraphQL is not built in. A GraphQL endpoint needs a third-party package such as wagtail-grapple.
