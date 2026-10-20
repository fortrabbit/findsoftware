Ibexa DXP OSS is the open source distribution of Ibexa DXP, a content management and digital experience platform written in PHP and built on Symfony. It is installed with Composer from the ibexa/oss-skeleton project, stores its content in MySQL or MariaDB, and offers an admin interface with REST and GraphQL APIs. The [installation guide](https://doc.ibexa.co/en/latest/getting_started/install_ibexa_dxp/) lists the server stack and the Composer steps.

## Worth knowing

The repository is licensed under two statements: GPL version 2, and the Ibexa Business Use License Agreement, which the LICENSE file says is granted with a valid Ibexa DXP subscription. Ibexa also sells the Headless, Experience and Commerce [editions](https://doc.ibexa.co/en/latest/ibexa_products/editions/) of the same platform. Production installs run on Linux only, and the site needs a cron job that runs `ibexa:cron:run` every minute.
