Twikoo is a comment system for static websites. A front-end script on each page shows the comments and the form, and a backend stores them and sends the notifications. The backend runs either as cloud functions on one of several hosting platforms, or as a self-hosted server started with the tkserver package on Node.js.

The front end is a JavaScript file that the page includes by hand, or through a site theme that supports Twikoo. Comments are stored in MongoDB or in D1 on Cloudflare, and the self-hosted server falls back to a local lokijs file when no MongoDB connection is set. The comment panel has an embedded management area behind a password, where comments can be hidden, deleted and reviewed, and the settings changed. Comments can be imported from Valine, Artalk and Disqus, and the interface has nine locales.

## Worth knowing

The cloud functions need Node.js 20 or newer. The self-hosted server runs as a long-running process that the operator starts with nohup or a systemd service, and the docs advise a reverse proxy in front of it for HTTPS. Spam checks through Akismet or Tencent Cloud content security each need the operator's own account.
