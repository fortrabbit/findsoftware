Cantaloupe is an image server written in Java that generates derivatives of source images on request, such as cropped, scaled, rotated or watermarked versions. It runs as a standalone Java process with its own web server, started from a release JAR or from a JAR built with Maven, and it needs Java 21 as its base requirement. The server follows the IIIF Image API, and a delegate class written in Ruby or Java can customize its behavior.

## Worth knowing

The manual lists eight image processors: Java 2D, which is the default, and JAI, TurboJPEG, Kakadu Native, OpenJPEG, Grok, FFmpeg and PDFBox. The project ships no official Docker image. A web-based Control Panel is available and is off by default.
