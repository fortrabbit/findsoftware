ALTCHA is a CAPTCHA widget that runs a proof-of-work calculation in the visitor's browser instead of showing visual puzzles. A site adds the widget as a web component, either from the npm package or from a script tag. The site's server then checks the submitted payload with one of the official verification libraries, which cover TypeScript, Python, Go, PHP, Java, Ruby, Rust and several other languages, as the [server integration page](https://altcha.org/docs/integration/server/) lists.

ALTCHA Sentinel is the self-hosted server for the widget. It runs on the operator's own infrastructure, stores its data in embedded storage by default or in an external database, and adds risk scoring, adaptive challenges and an admin app. A hosted service, ALTCHA Cloud, runs the same engine in the EU.

## Worth knowing

Sentinel is a separate product under its own license and needs a paid license before it runs in production; a 30-day trial is available. The widget's code challenge option requires Sentinel or a custom server. Sentinel verifies its license by default with a server at eu.altcha.org.
