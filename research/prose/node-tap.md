node-tap lets Node.js programs be tested with the Test Anything Protocol, and it ships a command line runner that reports the results. Its documentation is the [Getting started guide](https://node-tap.org/basics/) on the project's site.

## Worth knowing

The package tap is part of the tapjs monorepo on GitHub. Its nock and sinon integrations are plugins of tap that load those libraries into tap tests, so they do not appear as separate records.
