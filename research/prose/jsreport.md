jsreport is an open-source reporting server that runs on Node.js and produces reports from HTML and JavaScript templates. It renders PDF, Excel, DOCX, HTML and CSV outputs, and it offers a web-based designer, a REST API and a command line tool. Templates are written with handlebars or jsrender, and they are stored on the file system by default, with store extensions for SQL Server, PostgreSQL, MongoDB and Oracle.

The [install page](https://jsreport.net/on-prem) starts the server with npm and the [Docker page](https://jsreport.net/learn/docker) runs it as a container. The Docker page suggests running the container as a daemon with a restart policy, which keeps the server running across reboots.

## Worth knowing

On-premise use is free up to five report templates. Beyond that a commercial enterprise license is needed, and the commercial End User License Agreement governs that software. The repository is licensed under the LGPL.
