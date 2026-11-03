Pinpoint is an application performance management tool for large distributed systems. It traces transactions across distributed applications, with agents for Java, PHP and Python, and charts their topology. A Java agent is attached to each monitored application with a JVM argument, and it reports to a collector.

The collector and the web component are Java applications that the install guide says are deployed on a web container. Their data is stored in HBase, and metric and statistics data in Pinot.

## Worth knowing

The install guide names HBase and Pinot as storage, MySQL for Web configuration and Kafka for the Pinot ingestion path, so a self-hosted instance is several services rather than a single program.
