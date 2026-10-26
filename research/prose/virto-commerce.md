Virto Commerce is written in C# and runs on .NET. Its business logic is reached through REST or GraphQL endpoints, and administration happens in a browser-based interface called the Platform Manager. The platform stores its content in a SQL Server, MySQL or PostgreSQL database named in its connection strings.

The platform is installed from a precompiled release or with the vc-build command-line tool, then started with the .NET runtime, after which it keeps running and accepts connections. One installation can serve several stores, each with its own domain, catalog and theme. The Windows install guide recommends Elasticsearch for search, because the default Lucene .NET engine is not meant for production.

## Worth knowing

The source code is public, but the license does not work like a typical open-source license. The [license page](https://virtocommerce.com/open-source-license) allows use of the source only for non-production purposes, by entities with annual group revenue of US$1,000,000 or less, and requires a commercial license agreement for any production use. The commercial license has a Small Business License edition that is offered free of charge under the same revenue limit. The license also requires a "powered by Virto Commerce" notice on screens and at start-up, which a commercial license can remove.

Virto also offers a hosted option, Virto Cloud, next to the self-hosted platform.
