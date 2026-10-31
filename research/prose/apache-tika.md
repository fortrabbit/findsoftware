Apache Tika is a Java toolkit that detects file types and extracts metadata and text from documents such as PPT, XLS and PDF files. It can be embedded in a Java application through its Java API, or run as a separate service: tika-server exposes Tika over HTTP, standalone or in a container. The project publishes official Docker images, zip distributions and Maven artifacts. The Apache Software Foundation maintains it under the Apache-2.0 license.

## Worth knowing

The docs recommend running Tika as a separate service for most use cases, because a parser crash then cannot affect the application that calls it. The current line ships zip distributions rather than runnable jars.
