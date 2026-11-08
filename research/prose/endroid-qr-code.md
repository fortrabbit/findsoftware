Endroid QR Code is a PHP library that generates QR codes and writes them as PNG, WebP, SVG, EPS or binary output. A builder sets the content, encoding, error correction, size, margin, a logo and a label, and each output format has a writer with its own options.

A separate Symfony bundle in its own repository adds configuration, multiple configurations and Twig functions on top of the library.

## Worth knowing

Image output needs the PHP GD extension. Validation, which reads a generated code back to check it, is off by default because it affects performance.
