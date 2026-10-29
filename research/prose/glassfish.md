Eclipse GlassFish is an open-source application server that implements Jakarta EE. It comes as a zip distribution whose default domain, started from the command line, keeps a server process running, and as an embedded executable JAR that needs no installation. The server includes an administration console. Docker images and Maven artifacts are published for it as well. The Eclipse Foundation maintains the project.

Because the server domain is a long-running process, a host has to allow processes that keep running; static file hosting does not fit.

## Worth knowing

The server runs on a Java virtual machine and needs JDK 21 or higher on the host for the current release line. The project is offered under the Eclipse Public License 2.0 or the GNU General Public License 2.0 with the Classpath exception, and a user may choose either.
