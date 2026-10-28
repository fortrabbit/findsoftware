Walle is a self-hosted deployment system for web projects. It runs as a service on its own server, reads project code from git and deploys it to target machines over SSH. Its web interface runs deployments, shows the console output in real time and rolls them back. Project data lives in a MySQL database that the installation guide asks you to create. Access follows five roles, from super administrator to visitor.

## Worth knowing

The installation guide says the service must be deployed inside an intranet. The host must be Linux with Bash, git and ssh; the dependency page says Windows is not supported and advises against a Mac.

The host needs SSH keys trusted by the code host and by every target machine, because deployment runs through SSH. A Docker setup exists, but the Docker page says a community member contributed it.
