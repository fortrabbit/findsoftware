Blo is a static site generator for personal blogs, installed with pip. The `blo post` command creates a new note from a draft template and `blo build` builds the site from Markdown posts and Jinja2 page templates. The `blo serve` command runs the blog locally. Global site variables and paths live in `default.json`, and the draft templates live in `draft_templates.json`.

## Worth knowing

A new type of content takes an HTML template in the `templates` folder and an entry in `draft_templates.json`, as the README's customize section describes. The GitHub repository has only one release, while the PyPI package that the install command names has later ones.
