Mercur is a headless platform for multi-vendor marketplaces, built as a Medusa application with a marketplace layer on top, as its [architecture guide](https://docs.mercurjs.com/learn/architecture.md) describes. Marketplace operators use an admin panel and sellers use a vendor panel. Each store's members hold roles that are resolved per store, and PostgreSQL stores all data.

The [self-host guide](https://docs.mercurjs.com/resources/deployment/self-host.md) runs the API in server mode, which serves the admin panel, and deploys the vendor panel as a separate static app.

## Worth knowing

The repository is MIT-licensed, but the Mercur Enterprise modules are a separately licensed suite that comes with a support contract. Medusa Cloud is named as a managed deployment target next to self-hosting. The README lists Redis next to Node.js and PostgreSQL as a prerequisite.
