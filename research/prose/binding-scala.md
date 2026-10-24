Binding.scala is a data-binding library for Scala that runs on the JVM and on Scala.js. Its data-binding expressions recalculate when the values they depend on change, and the core module is added to an sbt build as a library dependency. The current line ships no UI framework of its own; the README points to html.scala, which builds an HTML UI on top of Binding.scala.

## Worth knowing

The README states that the current line only works on one Scala version series and sends projects on older Scala versions to an earlier line of the library, which it links.
