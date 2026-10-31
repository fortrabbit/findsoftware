Amazon Cognito is an identity platform for web and mobile apps, run by Amazon Web Services. It has two parts that work alone or together: a user pool, which is the user directory and sign-in, and an identity pool, which exchanges a trusted sign-in for temporary AWS credentials. User pools accept SAML 2.0 and OIDC identity providers for single sign-on, and the AWS Management Console is where user profiles are managed.

## Worth knowing

Cognito is a hosted service with no install step. It runs only inside AWS, and the docs describe no way to run it elsewhere. Pricing is per monthly active user, and the free tier covers the Essentials and Lite tiers, so the figures sit on the [pricing page](https://aws.amazon.com/cognito/pricing/) rather than here.
