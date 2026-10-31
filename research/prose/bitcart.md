Bitcart is a self-hosted cryptocurrency payment processor that sends payments directly to the merchant's own wallet. Bitcart Core, the daemons for each currency that wrap the Electrum wallet, is the only required component. The optional Merchants API adds PostgreSQL, Redis and a background worker that follows each enabled currency's daemon, and the optional admin panel is a user interface built around that API. The [architecture page](https://docs.bitcart.ai/development/architecture) describes how the parts fit together.

A website can take payments in two ways: it sends a POST request to the Merchants API to create an invoice, or it loads the admin panel's checkout modal script and opens an invoice by its ID. The [custom integration page](https://docs.bitcart.ai/integrations/custom-integration) describes both, along with a Python SDK that simplifies using the core daemons.

## Worth knowing

The [manual deployment page](https://docs.bitcart.ai/deployment/manual) says manual installation is not recommended in production, and the [Docker deployment page](https://docs.bitcart.ai/deployment/docker) describes the deployment method the project uses. The background worker keeps running, so an installation is a set of long-running services rather than static files.
