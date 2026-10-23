Marmite is a static site generator, written in Rust, that turns a folder of Markdown files into a static site, aimed at blogs. A workspace can hold several sites built by one command, and language streams handle multilingual content. It is installed with an install script, cargo, pip or uvx, Homebrew, Docker and other routes.

## Worth knowing

The editor and the content management API run only inside the development server started with the serve option. The deployed site is static files, and the project's hosting guide shows a GitHub Actions workflow that builds it and publishes it to GitHub Pages.
