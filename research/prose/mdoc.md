mdoc is a markdown documentation tool for Scala. It reads markdown sources, compiles and evaluates the Scala code blocks in them, and writes markdown in which each block shows its result, so the examples in the documentation are type-checked. It runs as the sbt-mdoc plugin in an sbt build, where the docs/mdoc task generates the documentation, from the command line through coursier, or as a library API. The project is maintained by the mdoc developers. A [migration guide](https://scalameta.org/mdoc/docs/tut.html) covers moving documentation over from tut.

## Worth knowing

mdoc writes markdown. Its DocusaurusPlugin builds a static site from that markdown with Docusaurus, which needs node and yarn. The JDK requirement differs between releases, as the README's compatibility table shows.
