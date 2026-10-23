Stacy is a website generator that combines content from Contentful with Handlebars templates. It is installed globally with npm and runs on a developer's machine, where it serves the site locally during development.

The README describes automatic publishing to an Amazon S3 bucket, where the generated site is served from. The [tutorial](https://github.com/boylesoftware/stacy/blob/master/docs/tutorial/index.md) walks through the setup.

## Worth knowing

The content stays in Contentful, a separate hosted service that Stacy reads through its API. Automatic publishing relies on an AWS publisher that Contentful webhooks call.
