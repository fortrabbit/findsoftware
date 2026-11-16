OverblogGraphQLBundle adds a GraphQL server to a Symfony application. It integrates GraphQL with webonyx/graphql-php and GraphQL Relay, and the project's docs enable its endpoint in the application's routing configuration, with a second route for setups that serve several schemas. The bundle is installed with Composer into a Symfony project.

## Worth knowing

Some optional features need packages the application does not get from the bundle itself: the validator and annotation features depend on Symfony and Doctrine packages, and the Doctrine type guesser needs the Doctrine ORM. The README's version table lists older lines than the current release, so the release history is the reference for versions.
