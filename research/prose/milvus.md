Milvus is a vector database written in Go and C++ that stores and searches embeddings, with full-text and hybrid search alongside vector search. The open-source project sits under the LF AI & Data Foundation, and Zilliz is its major contributor. The [docs](https://milvus.io/docs) describe the deployment options: Milvus Lite, a Python library installed with pip for local use, a standalone server in a Docker container, and a distributed deployment on Kubernetes. Access control is role-based.

## Worth knowing

The standalone server runs as a long-lived Docker container, and the overview names a message queue, object storage and a metadata store as dependencies of every instance, by default Woodpecker, MinIO and etcd. A fully managed version runs on Zilliz Cloud, which is operated by a company other than the project's foundation.
