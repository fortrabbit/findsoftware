Nanogen is a Node.js command line tool that turns a folder of EJS, Markdown and HTML pages into a static website. Pages are combined with EJS layouts and partials, and each source file becomes an `index.html` in a folder of its own name. Site-wide data comes from a configuration file, and each page can carry its own YAML front matter.

The [documentation](https://doug2k1.github.io/nanogen/docs/) describes a development server that rebuilds the site on every change. The output folder is cleaned and regenerated on each build, so nothing should be placed there by hand.
