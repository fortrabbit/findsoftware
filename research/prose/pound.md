Pound sits in front of one or more backend web servers and handles their HTTPS. The [manual](https://www.gnu.org.ua/software/pound/manual/) documents the poundctl management client and the optional Lua extension. Pound is installed by building it from a source tarball or a git clone, and building it needs OpenSSL. Once started, it detaches from the controlling terminal and serves requests.

## Worth knowing

The code was first written at Apsis GmbH, which discontinued the project in 2022. The current maintainer continued it from a fork, and the README says Pound is not a web server, although its special backends can serve static files.
