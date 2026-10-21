docmd compiles a folder of Markdown into more than a website: the README lists a search index, llms.txt files, Open Knowledge Format bundles and an MCP interface among the outputs of the same build. The site itself is static HTML with minimal vanilla JavaScript. It can be installed locally, globally or as a Docker image (see the [installation guide](https://docs.docmd.io/getting-started/installation/)), and a migration command covers Docusaurus, VitePress, MkDocs and Starlight projects.

## Worth knowing

The AI Assistant is a chat over the documentation. It can connect to the project's own backend or a local AI provider, and for static sites the README names the hosted Cloud Relay as the bridge. The relay is free to use with the user's own provider key, and the provider may charge for model usage. Generated documentation does not require docmd-hosted infrastructure.
