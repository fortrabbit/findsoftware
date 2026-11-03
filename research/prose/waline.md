Waline is a comment system for web pages. A client script shows the comment list and the comment box on a page, and a server stores the comments and sends notifications. The client loads from unpkg or installs from npm, and the page names the server in its serverURL option. The server is deployed to Vercel from a template or run from a Docker image or as a Node process behind a proxy, as the [get-started guide](https://waline.js.org/en/guide/get-started/) and the [self-host page](https://waline.js.org/en/guide/deploy/vps.html) describe. The project began as a backend for Valine, and its FAQ describes Waline as Valine with a backend.

Comments are stored in the database the server is configured with: MongoDB, MySQL, PostgreSQL or SQLite. The server sends e-mail notifications for replies and new comments and gives an administrator a comment management dashboard. Visitors can register through the comment box, and the first person to register becomes the administrator.

## Worth knowing

The client and the server are separate packages in one repository, and the server's update path differs by host, as the FAQ explains.
