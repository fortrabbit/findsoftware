React Email is an email templating framework: emails are written as React components with TypeScript or JSX and rendered to HTML or plain text, which any email service can then send. A command-line tool starts a local development server that rebuilds a template as its files change.

The repository is a monorepo. The react-email package is the one the install instructions name, and the components, the editor and the create-email scaffolder ship from the same repository. The editor is built on TipTap and ProseMirror. The docs include a guide to translating templates with next-intl and a migration page for moving from MJML.

## Worth knowing

The docs describe deploying the preview server to Vercel, which hosts the template preview, not the emails. The separate @react-email/components package is marked deprecated on npm.
