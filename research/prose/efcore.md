Entity Framework Core is an object-relational mapper for .NET, developed in the dotnet/efcore repository next to Microsoft.Data.Sqlite, an ADO.NET provider for SQLite. Applications add the Microsoft.EntityFrameworkCore package from NuGet together with the provider package for their database, as the [install guide](https://learn.microsoft.com/en-us/ef/core/get-started/overview/install) describes. The library needs a recent version of .NET at runtime. Database access goes through provider packages, and the [providers list](https://learn.microsoft.com/en-us/ef/core/providers/) names providers from several sources.

## Worth knowing

Not every provider is maintained by the EF Core project. A provider for a database that the core project does not ship, such as Firebird, MongoDB or Oracle, comes from its own maintainer.
