Basildon is a static site generator written in PHP. It reads Markdown files with YAML frontmatter from a content/ directory, makes that frontmatter queryable through SQLite from within Twig templates, and writes the rendered site to an output/ directory. Its output is HTML or any other text-based format, and PDF through LaTeX.

A site is created with Composer from the samwilson/basildon-skeleton package. The output directory is ready to upload to a web server as the top level of the site. A Docker image is also published for running Basildon.

## Worth knowing

Basildon empties the output directory on every run, so anything placed there by hand is removed at the next build.
