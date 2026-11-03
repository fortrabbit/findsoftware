WSO2 Identity Server is an identity and access management server from WSO2 LLC, written in Java. It is installed from a distribution zip and started with its wso2server script, which can also run it in the background on Linux. The [README](https://github.com/wso2/product-is) names a Developer and Administrator Console and an End User Portal as its web applications. Applications call the server through REST APIs and an authentication API for in-app sign-in, and external identity providers can be connected over OAuth 2.0, OpenID Connect and SAML. Its role-based access control covers delegated administration rights.

The server ships with an embedded H2 database, and the install page names Oracle, PostgreSQL, MySQL and MS SQL as production options. A Helm chart deploys it on Kubernetes.

## Worth knowing

The README says the hosted Asgardeo service is built on the same technology core as the server. WSO2 also sells an on-premises subscription that brings expert support, product updates and a licensed distribution for commercial use.
