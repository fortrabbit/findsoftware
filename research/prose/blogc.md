blogc is a command-line blog compiler. Each run compiles one source file and its templates into website resources, and the homepage says it is designed to be used with make. It does not know about the other files of a blog. The build tool blogc-make can turn blogc into a blogging engine, according to the homepage.

Content lives in source files in a directory, written in blogc's own markup language and rendered through its own template engine. Built files can be served by any web server: blogc-git-receiver rebuilds a site on every git push and links the built files as the web server's document root, and blogc-runserver is a local test server.

## Worth knowing

The homepage describes an autotools build, while the current README describes a CMake build.
