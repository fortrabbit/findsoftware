mjml-php is a PHP package that converts MJML, a markup language for responsive email, into HTML. It is installed with Composer and called from PHP code: `toHtml()` returns the converted HTML, and `convert()` also returns the errors MJML reports for the input. The conversion depends on the JavaScript mjml package, which must be installed on the server next to a Node.js executable. The package finds that executable itself, and an environment variable sets its path when it cannot.

## Worth knowing

The conversion needs Node.js on the machine that runs PHP. For Laravel projects the README describes a separate route through Sidecar, which deploys the conversion as a Lambda function instead.
