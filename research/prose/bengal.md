Bengal is a static site generator for documentation sites, blogs and other Markdown-based sites, written in Python. Pages are Markdown files in a `content` folder, rendered with Kida templates, and the production build writes the site to `public/` as static HTML, CSS and JavaScript.

It is installed with `pip install bengal`. `bengal new site` creates a project, and `bengal serve` runs a dev server with live reload. The [documentation](https://lbliii.github.io/bengal/) covers configuration, content and deployment.

## Worth knowing

Bengal requires Python 3.14 or later and is marked alpha in its README and on PyPI. The README lists Patitas (Markdown), Rosettes (syntax highlighting), Kida (templates) and Pounce (ASGI server) as parts of The Bengal Ecosystem, the stack the project belongs to.
