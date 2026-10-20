Daux.io is a PHP documentation generator. It reads Markdown files from a `docs` folder, builds the navigation from the folder structure, and is installed with Composer or run from a Docker image. The [getting started guide](https://daux.io/Getting_Started.html) describes writing pages and running `daux generate`.

The content stays in the Markdown files, and the same source can be written out as a set of static files, or served live by a web server that runs PHP for each request.

## Worth knowing

The [live mode page](https://daux.io/Features/Live_mode.html) says live mode can be used for production but is not recommended. It scans the whole documentation directory on each request, which can become a bottleneck on larger documentation sets.
