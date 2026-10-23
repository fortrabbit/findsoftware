pdoc generates API documentation for Python projects. It imports the modules it is given, reads their docstrings and type annotations, and writes standalone HTML. The pdoc command includes a web server with live reloading, and the [pdoc documentation](https://pdoc.dev/docs/pdoc.html) describes its templates and options. The project is installed with pip and is maintained by Maximilian Hils.

## Worth knowing

pdoc runs the code of the modules it documents, so those modules are imported on every run. The README recommends Sphinx for substantially more complex documentation needs and states that the project is not associated with the separate pdoc3 project.
