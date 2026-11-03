Grist is a relational spreadsheet that combines spreadsheet formulas with database tables. Formulas can be written in Python. Each document is a SQLite file, and the server runs as a Docker container or from a source build. It serves a browser interface, an Admin Panel at /admin and a REST API.

A document with public access can be embedded on another site with HTML code, and grist-static is a separate build for displaying spreadsheets on a website without back-end support. Grist Labs, a company based in New York, maintains it and also offers a hosted service at getgrist.com.

## Worth knowing

Grist Labs sells a full edition with features that grist-core does not include, among them single sign-on through OIDC or SAML, audit log streaming and automations. The default Docker image holds extensions for that edition under a non-open-source license, inactive in the Community edition. The gristlabs/grist-oss image holds only open-source code.
