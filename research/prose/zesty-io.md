Zesty.io is a hosted content platform for headless and hybrid sites. Content is authored in its Content Manager, and each item gets a JSON endpoint. Pages can be rendered by the platform with the Parsley templating language, or served as JSON to a separate front end through the REST and GraphQL APIs. The docs describe static site generation and server-side rendering as built in. Zesty.IO Platform, Inc. runs the service on Google Cloud Platform, with Fastly in the CDN.

Customers configure multilingual content, instance roles and sign-in through Okta or Microsoft Entra, which both use OpenID Connect.

## Worth knowing

Platform rate limits apply to headless requests, and the docs advise sending requests with a fingerprint based on client IP address and user agent. GraphQL endpoints are off until the developer setting is turned on under Settings in the Manager UI.
