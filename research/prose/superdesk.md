Superdesk is a newsroom system for news creation, production, curation and distribution, with headless CMS functionality. It is built as a Python server and a separate web client: the server provides the API that processes all client requests, and the client provides the user interface. The [README](https://github.com/superdesk/superdesk/blob/v3.5/README.md) covers a Docker Compose start and a manual installation, and the interface is available in several languages.

## Worth knowing

The server is a process that has to keep running to serve requests, so Superdesk needs a host that runs a long-lived process rather than static files. The README lists MongoDB, Elasticsearch, Redis and Node.js as services to install first. Sourcefabric also offers cloud hosting, training and support next to the open source code.
