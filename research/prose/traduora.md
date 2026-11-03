Traduora is a translation management platform for teams. Members work on the same translation projects in a web interface, and a REST API lets a workflow automate the rest. The server is a Node.js application that keeps its data in MySQL. The project documents three ways to run it: a Docker image, plain Kubernetes manifests and a build from source. The FAQ says there is no hosted version at the moment, so the operator runs the server on their own infrastructure.

## Worth knowing

A production instance runs as a server process, and the docs suggest a process manager such as systemd, upstart, supervisord or pm2. The source is under the GNU Affero General Public License, and the company also sells a commercial license for a copy the operator runs, with plans listed on the Ever pricing page.