LaunchDarkly is a hosted service for feature flags and runtime control. Applications read flag values through LaunchDarkly SDKs, and the docs describe a REST API. Its pricing is usage-based with no per-seat fee, and the pricing page offers a free start. Single sign-on through SAML is included on every plan, and custom roles can be organized into teams.

The service runs in the United States and in an EU instance hosted in AWS Frankfurt, documented on the [EU page](https://launchdarkly.com/docs/home/infrastructure/eu). The company is Catamorphic, Co., a Delaware corporation that trades as LaunchDarkly.

## Worth knowing

The open source Relay Proxy holds one connection to the LaunchDarkly streaming API and proxies it to many clients, so the service itself stays hosted. The EU instance only supports new Enterprise accounts and trials. The SDKs are client libraries and are separate from the service.
