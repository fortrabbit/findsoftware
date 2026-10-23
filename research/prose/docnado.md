docnado is a Python command-line tool that turns a folder of Markdown files into a documentation site. Running `docnado` starts a server on localhost, and the `--html` option freezes the documentation into a set of static HTML files. Documents can also be written out as PDF files through the same server. Each document selects its template and sets its metadata at the top of the file, and the sidebar is generated automatically. The copyright line on the project's site names Hardy & Ellis Inventions LTD.

## Worth knowing

The README describes the localhost output as insecure HTML, and it lists the static HTML files as a separate output. PDF output needs the separate wkhtmltopdf binary, which the README says must be configured or placed in the working directory.
