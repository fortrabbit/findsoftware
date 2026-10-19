Hugo is a static site generator that builds websites from Markdown, HTML, Org mode and, through external tools, AsciiDoc and reStructuredText files. Templates use Go's text and html/template packages. Hugo ships as one self-contained binary, so building a site needs no separate language runtime, and the output needs only static file hosting. Multilingual sites can run on a single host or on multiple hosts. Extensions come as modules and themes, which are listed in a theme gallery. The Hugo Authors maintain it as a community project, and JetBrains and CloudCannon are named as sponsors. The [host and deploy guide](https://gohugo.io/host-and-deploy/) lists the deploy targets.

## Worth knowing

Hugo comes in standard, deploy, extended and extended/deploy builds. The deploy builds upload straight to Google Cloud Storage, AWS S3 or Azure Storage. The extended builds bundle LibSass for Sass to CSS, which the project has deprecated.
