LINQ to DB is a data access library for C# that maps classes to database tables and translates LINQ queries into SQL. The README places it one step above micro-ORMs and lighter than LINQ to SQL or Entity Framework, and says it has no change-tracking, so the application manages that itself.

The repository also holds the linq2db.cli dotnet tool and integrations with Entity Framework Core, ASP.NET Core Identity and LINQPad.

## Worth knowing

Database access goes through ADO.NET providers that the project lists, some installed from NuGet and some locally. The NuGet package targets .NET Framework 4.6.2, .NET Standard 2.0 and newer .NET versions. The README states that F# use is supported through a separate project in the repository.
