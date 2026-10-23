Kart is a static site generator written in Python that uses Jinja2 templates and Markdown to render sites. Content is kept as Markdown files in collection folders such as posts. It is installed with pip. `python main.py build` writes the site into a `_site` folder, which is then pushed to a production environment, and `python main.py serve` starts a development server that reloads when files change.

## Worth knowing

The README says Kart is not yet ready for real-world use and that its API can change between minor versions. Development is on GitLab, and the GitHub repository mirrors it.
