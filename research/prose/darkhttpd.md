darkhttpd is a web server for static files, written in C and distributed as a single binary. The web root is its only required argument, and it reads no configuration file. The README covers a build with make and a Docker build from the repository's Dockerfile. It runs as one event loop with no forking or threads, and it can run in the background and write a pidfile.

## Worth knowing

darkhttpd serves static content only and does not run CGI.
