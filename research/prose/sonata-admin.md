Sonata Admin is a Symfony bundle that generates an admin interface for an application's data. It is installed with Composer into a Symfony application, and its admin pages are placed in blocks through SonataBlockBundle.

The bundle does not reach a database on its own. The [installation guide](https://docs.sonata-project.org/projects/SonataAdminBundle/en/4.x/getting_started/installation/) says it needs a storage bundle before it can talk to a database: SonataDoctrineORMAdminBundle for Doctrine ORM, or SonataDoctrineMongoDBAdminBundle for the Doctrine MongoDB ODM.
