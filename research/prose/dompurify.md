DOMPurify is a DOM-based sanitizer that removes unsafe content from HTML, MathML and SVG strings to prevent cross-site scripting. The [README](https://github.com/cure53/DOMPurify/blob/main/README.md) says DOMPurify is included on a website and runs in the browser, and that it also works server-side with Node.js, where a DOM such as jsdom has to be supplied.

## Worth knowing

The README says that server-side use depends on the DOM supplied, that happy-dom is not considered safe for it, and that legacy browsers such as MSIE get no sanitizing; security updates for MSIE come from an older branch.
