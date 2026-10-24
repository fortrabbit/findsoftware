PMKIN is a hosted content planner and headless CMS. Teams plan content on a shared board and calendar, write briefs, and send drafts to a review queue before anything is published. A website reads only published documents, which it fetches from the GraphQL delivery API; drafts, briefs and reviews stay inside PMKIN. Documents are written in a web editor, and each keeps a draft and a published version. AI agents connect through the MCP server, where they can claim briefs, write drafts and send them to review, the same steps a teammate follows. The developer docs describe a REST management API for scripts and pipelines. PMKIN, the company, maintains the service.

## Worth knowing

A site that reads from PMKIN depends on the delivery API being reachable. Agents never see API keys, members or billing, and their changes show both the agent's name and the person it works for. Single sign-on is listed on the Enterprise plan only.
