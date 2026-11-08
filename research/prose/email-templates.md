Email Templates is a Node.js library for creating, previewing and sending email templates. Each message is a folder of template files: one for the HTML body, one for the subject and an optional one for plain text. The default engine is Pug, and the README names EJS as another option. The library renders the templates with the values passed in, inlines the CSS of linked stylesheets and returns the result for sending or rendering.

Sending goes through a Nodemailer transport, and the library can also stop after rendering. Localization uses an i18n configuration object that is passed to the library.

## Worth knowing

Preview is an optional dependency. It opens rendered emails in a browser or the iOS Simulator during development, and the README treats it as a development aid. The README recommends Forward Email as the transport, a separate service the user chooses.
