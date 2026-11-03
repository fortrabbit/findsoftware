Hanko is an authentication backend for passkeys, passwords and passcodes, with an API for user management, organizations and roles. Applications call its HTTP API directly, or they embed hanko-elements, a set of web components for login and registration screens that talk to that API.

The backend runs as a service with a public API and an administrative API, and it keeps its data in PostgreSQL or MySQL. It needs an SMTP server to send mail. It installs from a Docker image, pre-built binaries or a source build, and the docs describe importing users from Firebase.

## Worth knowing

The backend is licensed under AGPL-3.0, while hanko-elements and the frontend SDK are MIT licensed. The project also offers a non-copyleft commercial license on request, and a fully managed service, Hanko Cloud, which is hosted in the AWS Frankfurt region.
