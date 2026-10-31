WildFly is a Java application server that the [Getting Started guide](https://docs.wildfly.org/42/Getting_Started_Guide.html) installs by extracting a zip or tgz distribution and starts with standalone.sh or domain.sh. It is an open source community project sponsored by the Commonhaus Foundation, and it has a web administration console.

The distribution can also be built with the WildFly Maven Plugin, packaged as a container image, or deployed to Kubernetes and OpenShift with a Helm chart.

## Worth knowing

The guide describes running the server as a systemd service, so it starts when the system boots. The project maintains only its newest series, and earlier releases no longer receive maintenance.
