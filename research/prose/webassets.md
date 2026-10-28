webassets is a Python library that manages the CSS and JavaScript assets of a web application. It merges and compresses source files, runs them through filters and compilers such as CoffeeScript or Sass, and puts a hash of each output's content into its URL, so that changed files get new URLs.

Bundles are defined in code or in an external configuration file. A bundle returns the URL of its merged output, or in debug mode the URL of each source file. The library does not depend on one web framework; the docs describe integration pages for Django, Flask and Pyramid, and a Jinja2 integration.

## Worth knowing

The project's PyPI classifier marks the package as Development Status Alpha. The documentation site's title names an older release than the newest one, so the docs may describe an older version.
