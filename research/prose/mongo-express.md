mongo-express is a web-based admin interface for MongoDB and compatible services, written in JavaScript for Node.js with Express. It connects to a MongoDB server through a connection string and lets a browser view and edit its databases, collections and documents. It can be installed globally from npm, run from a Docker image, or mounted as middleware inside an Express application. It also supports sign-in through OpenID Connect.

## Worth knowing

The README says mongo-express should only be used privately for development purposes, because JSON documents pass through a JavaScript virtual machine and the web interface can run JavaScript on the server. Its newest versions are release candidates, and the last stable release is older. Docker Hub labels the image the README links as deprecated.
