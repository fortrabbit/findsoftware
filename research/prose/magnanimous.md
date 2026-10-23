Magnanimous is a static website generator written in Go that ships as one executable. It reads source files from a source directory, processes the files in its processed directory with its own expression language, copies the static directory as it is, and writes the site to a target directory. Markdown files become HTML pages, and components with slots let a template reuse fragments.

## Worth knowing

The generator runs from the command line on a local machine and writes files, and the site is served as static files. Files whose names start with an underscore are fragments and are not copied to the site.
