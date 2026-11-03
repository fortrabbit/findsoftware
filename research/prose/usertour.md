Usertour adds in-app onboarding to a web app: product tours, checklists and surveys. The app connects through the usertour.js SDK, which is installed from npm. The software can run on the team's own infrastructure with Docker, and the same product is also offered as a hosted cloud service. The README describes an MCP server that lets an AI assistant build flows.

## Worth knowing

A self-hosted instance needs PostgreSQL and Redis. The Docker documentation recommends running them as separate services in production and pointing the application at them through environment variables.

Code that controls features for Business and Enterprise plans, such as SSO, is under a separate enterprise license. Production use of that code requires a Business or Enterprise subscription.
