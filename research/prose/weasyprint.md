WeasyPrint turns HTML and CSS into PDF documents. Its layout engine is written in Python and designed for pagination, and it does not use a full browser engine. A web application calls it from Python to produce a PDF from a page, and the `weasyprint` command does the same from the shell.

WeasyPrint needs Pango, a text-layout system library, next to the Python package. The [installation guide](https://doc.courtbouillon.org/weasyprint/stable/first_steps.html) lists the platforms and their packages. The documentation's "Why WeasyPrint?" section names wkhtmltopdf as one of the projects that add paged-media features to existing browsers.

## Worth knowing

The docs warn that untrusted HTML or CSS can cause high memory use, endless renderings or access to local files, and advise running the service as a user with limited access or in a container. WeasyPrint can take a long time to render long documents. For many documents, the docs suggest the Python API in long-lived processes to avoid start-up costs on every run.
