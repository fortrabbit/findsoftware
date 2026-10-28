minify is a Go library and command-line tool that minifies HTML, CSS, JavaScript, JSON, SVG and XML. The library associates media types with minifier functions, so CSS and JavaScript embedded in an HTML file are minified along with it, and a user can add minifiers for other types. The command-line tool is a separate build of the same library, installed through go install, a prebuilt binary, Homebrew, apt, scoop or Docker. Python and JavaScript bindings are published as separate packages on PyPI and npm.

## Worth knowing

The library includes HTTP middleware that minifies responses as they are served, based on the Content-Type header or the file extension. The README says these results should preferably be cached, because the processing happens on the fly for each request.
