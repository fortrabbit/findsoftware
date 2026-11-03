d8a is a web analytics pipeline that receives Google Analytics 4 and Matomo tracking and writes sessions to a warehouse. It writes events and sessions as flat tables to BigQuery or ClickHouse, or to CSV and Parquet files on S3, MinIO, GCS or a local disk. It ships without a reporting UI, so a BI tool or the prebuilt Data Studio dashboard reads the data.

The documented production setup is single-node Docker Compose with ClickHouse, described in the [production operations guide](https://docs.d8a.tech/articles/production-operations). Its receiver runs as an HTTP server that publishes to a queue. The software is written in Go.

## Worth knowing

The code is MIT-licensed. d8a.tech Cloud runs the same pipeline in the EU, as a hosted service next to the open-source code.
