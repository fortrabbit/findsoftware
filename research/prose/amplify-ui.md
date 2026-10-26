Amplify UI is the open-source component library of AWS Amplify. It has primitive components, connected components such as the Authenticator that connect to the cloud, and themes built on CSS variables. The packages install from npm next to aws-amplify, and the application imports a stylesheet for the default theme. The project says its components follow WCAG and WAI-ARIA practice.

## Worth knowing

The introduction says primitive components are React-only for now, with other frameworks in planning, while the Authenticator is available for several frameworks. The default theme names the Inter font, which the library does not bundle, so the application must load it. The [installation guide](https://ui.docs.amplify.aws/react/getting-started/installation) covers both steps.
