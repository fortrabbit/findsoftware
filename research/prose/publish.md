Publish is a static site generator for Swift developers, in which each website is a Swift package and its configuration, content and publishing pipeline are written as Swift code. By default it reads Markdown files from a `Content` folder, and extra items and pages can be added in code. HTML is rendered through Plot, a Swift library for HTML, so themes are written in Swift against it. The build produces static files, and the command line tool can start a localhost server for local testing and development. Built-in deployment methods publish the output to Git and GitHub.

## Worth knowing

Building a site needs Swift 5.4 or later on the machine that runs the build.
