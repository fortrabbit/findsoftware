Graylog is a log management platform with a web interface that users work in. Applications and devices send log data to it through listener inputs, including GELF, raw HTTP and syslog, and people search that data in the web interface or through the REST API.

The project recommends Graylog Data Node as the search backend and documents self-managed OpenSearch as an alternative. The operating system packages install the server and the data node, and the project also publishes a Docker Compose setup.

## Worth knowing

The server is released under the Server Side Public License, version 1. Some features need a Graylog Enterprise license from the vendor, among them team management and sign-in through Okta or OIDC.
