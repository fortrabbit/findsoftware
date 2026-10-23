NotCMS is a hosted service that connects Notion databases to the website built from them. Writers edit content in Notion, the NotCMS dashboard connects the Notion workspace, and a TypeScript SDK published on npm as notcms reads the synchronized content for the site. Notion is the editor, so the service has no admin interface of its own.

## Worth knowing

The service is hosted, and paid plans are listed on the [pricing page](https://www.notcms.com/pricing). The sync and the dashboard run on the hosted service, and no self-hosted option is stated. The content API has [rate limits](https://docs.notcms.com/en/usage/errors-and-rate-limits) that are the same on every plan. Content editing depends on Notion, so the content store sits outside the software.
