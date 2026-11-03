Ory Polis is a single sign-on service written in TypeScript. It takes SAML and OIDC identity providers and presents their login to an application as a standard OAuth 2.0 flow. The README says it was formerly known as BoxyHQ Jackson, and its Docker image and npm package still use that name. It runs as a separate Next.js service with an admin portal for managing SSO and Directory Sync connections, or it can be embedded in an application as an npm library. Directory sync uses the SCIM 2.0 protocol to automate provisioning and de-provisioning of users. The [service guide](https://www.ory.com/docs/polis/guides/service) lists the databases the service can use.

## Worth knowing

An Enterprise License build adds features the open-source version does not have, and the Ory Network offers SAML and SCIM as a hosted service.
