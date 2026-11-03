Hyvor Talk is a hosted comment service. A website adds a script snippet, and visitors can comment, react and rate. Moderation tools, badges and email notifications are run from the vendor's console, and comments can be imported from Disqus and WordPress.

Nothing is installed on the site's own server. The company's GitHub organization holds client libraries, a WordPress plugin and SSO examples for the service, and none of them is the service itself. A data API returns public comments and pages as JSON over HTTP GET, a console API covers the console's actions, and webhooks notify a receiving endpoint of events such as new comments.

## Worth knowing

The service starts with a 14-day trial and continues on paid plans. The product also offers team single sign-on with OpenID Connect on the higher plans, and a site can let its own accounts comment through a separate stateless SSO flow.
