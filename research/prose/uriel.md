Uriel is a static site generator distributed as one Python script that depends only on Python, with no third-party modules. It runs from any directory without installation. A project directory is created on the first run and regenerated on each later run, and the pages go into a `public` directory that any web server can host.

## Worth knowing

Projects can run their own Python code during a build, in the `lib` files of the project. The [documentation](https://documentation.uriel.foo/) says to trust a project before building it.
