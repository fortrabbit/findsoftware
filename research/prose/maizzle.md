Maizzle is a framework for building HTML emails with Vue and Tailwind CSS. Each email is a Vue single-file component that uses the built-in components, such as Container, Button and Heading, or plain HTML. The build renders the components to HTML, runs transformers that inline the CSS and produce email-safe output, and writes HTML files to an output directory. The deployment pages name Nodemailer, SendGrid, Mailgun, Postmark, Resend, AWS SES and Cloudflare as ways to send them.

A dev server with live preview runs on the developer's machine. It shows each email at several device sizes, runs compatibility checks and can send a test email. The documentation has migration guides from [React Email](https://maizzle.com/docs/migrate/react-email) and [MJML](https://maizzle.com/docs/migrate/mjml), and a page on internationalization through vue-i18n.

## Worth knowing

Mailviews, a paid subscription of components and templates from the same makers, is a separate product.
