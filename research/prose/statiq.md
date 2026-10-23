Statiq is a static content generation framework for .NET, written in C#. Content and data can come from input files, databases and services, and the resulting documents are processed by pipelines of modules before they are written to output files or deployed to a hosting service. It evolved from Wyam.

Statiq does not ship as a self-contained executable. The generator runs from within the user's own .NET console application, which references a package such as Statiq.App or Statiq.Web, and it writes static site content to an output folder.

## Worth knowing

The repository holds the MIT-licensed framework and also Statiq Web, which is dual-licensed: a public license limits commercial use by size, and a private license is bought per developer. The project calls this scheme open-core.
