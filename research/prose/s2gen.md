s2gen is a static site generator written in Scala. It reads content written in Markdown, renders it with Freemarker templates, and writes HTML files to a site directory, and it can build localized versions of a site alongside the default one. In monitor mode it watches for file changes and serves the generated files from an embedded web server, which the README describes as enough for testing.

## Worth knowing

The generator needs a Java runtime, JRE 8 at least, on the machine that builds the site.
