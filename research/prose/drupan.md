drupan is a static site generator written in Python. It reads content from files with a YAML header, renders them through Jinja2 templates and writes the site to a directory. A plugin system extends it, and the README lists a markdown plugin, a tags plugin and a blank plugin for index or archive pages.

Running `drupan` with a configuration file generates the site. A `serve` switch starts a development server on port 9000, and the deployment steps publish the output with git or to AWS S3 and CloudFront.
