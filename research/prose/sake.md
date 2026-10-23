Sake is a static site generator that runs from a Makefile. Its build is driven by make and its templates are rendered with Jinja2, so the Makefile is copied or linked into a project and run there. Site and custom data are written as YAML, and the generated files are written to an output folder.

## Worth knowing

The build needs make and the Jinja2 command line tool installed on the machine that runs it. The repository has no release or tag, so the default branch is the only version to read.
