django-distill is a static site generator and publisher for Django. It renders the URLs of an existing Django site into HTML files and writes them to a local directory, or uploads them to Amazon S3, Google Cloud Storage or Azure Blob Storage. The process can run in CI/CD to deploy a site on each commit. It is installed with pip.

The project has no website of its own, so the [README](https://github.com/meeb/django-distill/blob/master/README.md) in the repository is its documentation.

## Worth knowing

Internationalization covers URLs only; the tool does not translate page content. The README describes the current release line as a ground-up rebuild that is not guaranteed to be compatible with older releases.
