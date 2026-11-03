Nextcloud Forms is a survey and questionnaire app that runs inside a Nextcloud server. Forms are shared through public share links, and a share link can be converted to an embeddable link. The [embedding guide](https://github.com/nextcloud/forms/blob/main/docs/Embedding.md) shows an iframe that places the form on an external website, with messages that resize the frame and report a saved submission. The app also has a Forms Public API for custom forms, described in the repository, and the Nextcloud server can send Forms events to webhook listeners.

The repository describes a development setup that clones the app into the apps folder of a Nextcloud server and builds its JavaScript. The app's PHP side runs on the Nextcloud server, and results can be exported as CSV in the format Google Forms uses.

## Worth knowing

The app runs only on the Nextcloud server versions named in its metadata, so it depends on that server for its database and storage.
