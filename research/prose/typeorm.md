TypeORM maps database tables to classes in TypeScript or JavaScript. Entity classes declare their columns and relations with decorators, and the application reads and writes rows through repositories, the entity manager or a query builder. The same entities can follow a DataMapper style, where a repository handles the rows, or an ActiveRecord style, where the entity class carries its own save and find methods.

The package also covers migrations and a CLI whose `init` command generates a starter project for a Node.js application. The [getting-started guide](https://typeorm.io/docs/getting-started) walks through the setup.

## Worth knowing

Entities rely on decorators, so the project's TypeScript configuration enables experimentalDecorators and emitDecoratorMetadata, and the reflect-metadata shim is installed beside the package. Each database needs its own driver package, installed as that driver's documentation describes.
