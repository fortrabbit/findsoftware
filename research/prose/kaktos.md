Kaktos is a Python static site generator. Pages are Jinja2 templates, and a build writes the finished site to a build folder. The frontend is built with Vite, which the Python build invokes, so Node.js must be on the machine that runs the build. A development command rebuilds on each save with LiveReload, and a serve command starts a web server for the build folder. The generated site is static files and needs no server.

## Worth knowing

The repository has no license file. The README's license section states MIT and a copyright line, and that is the only license statement. The project has no versioned releases, only tags named after commits.
