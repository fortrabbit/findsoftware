Plone is an open source content management system built on Python and the Zope application server. It offers two frontends: Volto, a single-page application, and Classic UI, whose pages are server-side templates written in the ZPT language. It also serves content over a REST API. Content is stored in the Zope Object Database, which writes to files by default and can use PostgreSQL, MySQL or Oracle as a backend. A single installation can run many Plone sites. The Plone Foundation, a 501(c)(3) non-profit organization, maintains the project.

## Worth knowing

Volto runs its frontend in a separate Node process beside the Python backend. The [interface guide](https://6.docs.plone.org/conceptual-guides/choose-user-interface.html) states that there is no migration path from Volto to Classic UI.
