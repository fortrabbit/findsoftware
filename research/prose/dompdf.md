Dompdf converts HTML and CSS into PDF inside a PHP application. The application installs it with Composer, as the [README](https://github.com/dompdf/dompdf/blob/v3.1.6/README.md) shows, and loads it as a dependency, so no separate server or process runs. The bundled R&OS CPDF class renders PDFs without an external PDF library; PDFLib is an optional backend that needs a PECL extension.

## Worth knowing

The homepage lists the PHP extensions DOM and MBString as requirements. It says Dompdf does not tolerate poorly formed HTML well, suggests the built-in HTML5 parser or a validator, and states that a table row must fit on one page.
