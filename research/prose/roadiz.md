Roadiz is a content management system built on the Symfony framework. Content is organized as a tree of typed nodes, and the back office theme is called Rozier.

A site can be built as classic pages rendered with Twig templates or as a headless site that exposes content through API Platform as a REST API. A new project starts with `composer create-project` from the roadiz/skeleton package, described in the [installation guide](https://docs.roadiz.io/developer/first-steps/installation.html).

## Worth knowing

The [requirements page](https://docs.roadiz.io/developer/first-steps/requirements.html) says Roadiz is not meant to be deployed directly to a production server out of the box. It is a Symfony application configured and customized in a development environment first. Deployment needs cache clearing and migrations, which may require shell access.
