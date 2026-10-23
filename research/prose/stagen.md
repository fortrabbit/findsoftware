StaGen is a static site generator written in Java and the generator behind the WizTools.org website. Content is Markdown, StringTemplate 4 renders it, and the build writes HTML files into a target folder. A command starts an embedded Jetty server that rebuilds the site while the developer edits it.

## Worth knowing

The README says StaGen does not support themes or blog-style pages, and suits sites with few pages generated from few templates. It gives Java 17 as a prerequisite for the current code, while the newest release dates from 2014, so the release and the README may not describe the same build.
