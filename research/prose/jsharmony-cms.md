jsHarmony CMS is a Node.js content management system with in-page editing, published by apHarmony. Editors change page content and components inside the page itself, and the CMS runs on the jsHarmony framework, configured in app.config.js, with SQLite, MSSQL or PostgreSQL as its database.

The CMS is installed with the jsharmony-cli npm package, which creates a project from the sample or empty project repository, and the server is started with node app.js. Editing happens in that web application; the [deployment targets](https://www.jsharmonycms.com/resources/documentation/deployment-targets/) page describes publishing the site files to SFTP, FTP, S3, Git, a local folder or a CMS deployment host, and users can be granted access to targets by role. One instance can hold several sites.

## Worth knowing

The software is licensed under LGPL-3.0. The starter templates that ship with it come from other authors under CC BY 3.0 licenses. The [pricing page](https://www.jsharmonycms.com/pricing/) lists a free self-hosted option next to paid hosting and support plans.
