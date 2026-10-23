Bonobo is a static site generator written in C that builds pages from Markdown files. Each page starts with a JSON metadata block, and the content follows in Markdown. The Makefile in the repository builds a single bonobo binary, and an install target copies it to a system binary folder.

## Worth knowing

The repository has no release or tag, and its README has no install section, so the build steps are read from the Makefile alone.
