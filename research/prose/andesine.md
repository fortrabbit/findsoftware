Vrite is an open-source platform for creating, managing and publishing product documentation, technical blogs and knowledge bases. Content is delivered to any frontend through its REST API, and a built-in dashboard with Kanban and list views handles planning. Content variants cover translations and A/B testing. The software keeps its content in MongoDB and stores uploaded images in S3-compatible storage.

The [self-hosting guide](https://docs.vrite.io/self-hosting/docker/) describes cloning the repository, filling in a docker.env file from the example and starting the stack with Docker Compose. The example compose file runs the API, asset, collaboration and web app services next to MongoDB, Redis and MinIO, with an optional Weaviate instance for search.

## Worth knowing

Vrite Cloud, the hosted version, runs next to the open-source code. The docs describe the Extension System as in Beta and limited to first-party extensions available only through Vrite Cloud. Semantic search needs a Weaviate instance, and AI question answering also needs OpenAI credentials. Git sync needs a GitHub App.

The source is under AGPL-3.0 by default, with some files under MIT or Elastic License 2.0 where a licensing file or file header says so. The repository's default branch is a work-in-progress v2 rewrite codenamed Andesine, and its README points to the main branch for the stable version.
