GLAuth is an LDAP server. Systems that authenticate against LDAP can use it as their directory. It is written in Go and runs as one process, started with a configuration file. The user directory can stay in that file or sit in another backend: flat files, S3, ownCloud, a SQL database or another LDAP server. An optional web UI shows statistics and application health on the same address as a REST API. The project distributes a standalone executable, a container image and a Helm chart.

## Worth knowing

The quickstart configuration is meant for trying the server out, and the docs say to set up TLS before production use. The README places the single-server setup, driven by a configuration file, in production when it is deployed with Puppet, Chef or Ansible, and calls GLAuth an alternative to OpenLDAP and Active Directory for development or a homelab.
