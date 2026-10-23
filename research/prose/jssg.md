jssg is a static site generator written in Java. It reads posts and pages written in Markdown or Textile and merges them into HTML with Freemarker layouts, writing the result to a build folder. The project is installed by cloning the repository and running `mvn package`. `jssg -build -serve` builds the site and starts a local server that rebuilds changed files, and the README says the built site can be put on any web server.

## Worth knowing

The repository holds no LICENSE file.

Code snippet highlighting uses Pygments, which has to be in the PATH or set in the config.properties file.
