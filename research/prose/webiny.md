Webiny is a TypeScript framework and headless CMS that a team deploys into its own AWS account. The README describes it as running on Lambda, DynamoDB, S3 and CloudFront inside the team's account, so the API runs as Lambda functions and content is stored in DynamoDB. The project offers a GraphQL API, an admin panel, and a website builder with a Next.js SDK for rendering pages in a separate frontend.

Behavior is extended in code. The README lists extension types for the API, the admin UI, the AWS infrastructure and the CLI, and content models can be defined in the admin UI or in code.

## Worth knowing

The README says Webiny only runs on AWS. The docs call AWS the only production-ready deployment target. They also describe a Standalone target that runs as a single long-running Node process with SQL storage, and mark it as alpha and local only.

The Community edition is free under the MIT license. The README lists role based access control, multi-tenancy and publishing workflows under a commercial Business edition, and single sign-on, audit logs and team management under an Enterprise edition.
