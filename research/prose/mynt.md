mynt is a Python static site generator that builds a site from posts, pages, templates and assets kept as plain files in a project directory. Jinja is the default renderer, and the docs describe tag and archive pages generated automatically, content containers handled like posts, and localization through .mo files.

It installs with pip, with an optional extra for reStructuredText. The gen command writes the site to a destination directory and watch regenerates it on changes. The quickstart says to upload the generated site to a host such as GitHub Pages or a VPS.

## Worth knowing

The docs say the serve command is for local development and testing only, not for hosting a site publicly. The project has no GitHub release; its release history here comes from PyPI.
