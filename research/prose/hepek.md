Hepek is a Scala toolkit for making websites. Its static site generator, Hepek SSG, writes Scala objects to files: each page is plain Scala built from Scalatags, a Scala DSL for HTML, and from Markdown for text, so there is no separate template language. The repository also holds Hepek Components, a library of typesafe templates, grids, forms, code highlighting and markdown rendering for the JVM and Scala.js, plus integrations for the Sharaf, Play, Http4s and ZIO frameworks.

The generator runs through an sbt or mill plugin, or through hepek-cli with scala-cli. The project has a Discord chat, linked from its homepage.

## Worth knowing

Code snippets and math in Markdown are rendered with Node.js, so a machine that builds the site needs Node.js as well as the JVM tools.
