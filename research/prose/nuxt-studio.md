Nuxt Studio is a module for Nuxt that adds an editor to a Nuxt Content website in production. Editors sign in through OAuth with GitHub, GitLab or Google, through an SSO server, or through a custom flow, and edit Markdown in a visual editor or a code editor, fill in forms generated from the collection schema, and manage media. Publishing commits the changes to the Git repository, and the site's CI/CD pipeline rebuilds and deploys the site.

The module is installed into the Nuxt application with the Nuxt CLI. Its [introduction](https://nuxt.studio/introduction) says the module evolved from a hosted platform of the same name into an open-source module that runs inside the site's own application.

## Worth knowing

The introduction says the module requires a server-side route for authentication, so the site must be deployed on a platform that supports server-side rendering. Static generation remains supported for the site itself.

The AI features call the Vercel AI Gateway, which is a third-party service the module uses when those features are enabled.
