Zope is a web application server written in Python, first released in 1998. It keeps its data in ZODB, an object database, and its templates are Zope Page Templates, which the project describes as a web page generation tool. Zope is installed with pip or with zc.buildout, as the [installation guide](https://zope.readthedocs.io/en/latest/INSTALL.html) describes. Administrators work in the Zope Management Interface, and users hold roles such as Manager.

The Plone Foundation is the copyright holder of the software, according to the [community page](https://www.zope.dev/community.html) on zope.dev.

## Worth knowing

Zope is a long-running process rather than a set of files. It is served by a WSGI server, with waitress built in, so a host has to keep a Python process running to serve its pages.
