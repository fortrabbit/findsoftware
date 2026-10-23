Coisas is a headless CMS for editing the files of a GitHub repository. The README names Netlify CMS and Prose as similar tools, and says Coisas does not use a custom schema and is not tailored to Jekyll or any other site structure. It offers a file tree view, a metadata editor with automatic saving of Markdown and HTML files that have YAML front matter, an image gallery, and behavior and style customization from a file kept in the repository. Users go to the hosted address the README gives, or embed the app in their own site, for example in an `/admin/` section. The README describes a local build with npm and says a static server is needed.

## Worth knowing

The repository has no GitHub release and no tag. The project's own address returns an empty application page to a plain request, so no text was read from it. The README recommends HTTPS, because the service worker needs it.
