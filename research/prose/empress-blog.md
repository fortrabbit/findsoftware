empress-blog is a blog system built on EmberJS that produces a fully static site. Posts and authors are Markdown files in the project, and the Ember build turns them into HTML, so the output works with S3 or any other static site hosting, as the [README](https://github.com/empress/empress-blog) describes. The README describes the system as mostly compatible with Ghost, and its two themes are shallow forks of Ghost themes. A beta import command reads exports from Ghost, WordPress and Tumblr. The project is installed into an Ember app with `npx ember install`.

## Worth knowing

The system has no user roles. The demo blog says it is entirely static and will never have the concept of user roles, so a site with several editors works from the files, not from a login.
