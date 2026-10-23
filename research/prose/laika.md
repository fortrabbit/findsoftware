Laika turns Markdown and reStructuredText sources into HTML sites and into EPUB and PDF e-books, and is used as a Scala library or an sbt plugin. It runs on the JVM, and its library can also run in the browser through Scala.js. The sbt task laikaSite writes the HTML site to a folder in the project's target directory, and a preview task serves that folder on localhost. The project is hosted under the Typelevel organization on GitHub, and questions go to its discussions or to the Typelevel chat.

## Worth knowing

The sbt plugin needs sbt 1.x, the Scala build tool. Releases before the 1.x line were published under another group ID, so older projects that depend on the library use different coordinates.
