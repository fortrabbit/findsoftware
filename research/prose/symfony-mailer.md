Mailer is a PHP component of Symfony that creates email messages and sends them. The docs list multipart messages, Twig integration, CSS inlining and file attachments among its features, and installing it also installs the Mime component, which creates the messages.

Messages leave through a transport: SMTP, the local sendmail binary or a third-party service such as Amazon SES or Mailgun, installed as a separate Composer package.
