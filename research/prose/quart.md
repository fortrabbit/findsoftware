Quart is an async Python web framework built on asyncio. The project describes it as an asyncio reimplementation of Flask, and its documentation includes a migration guide for applications that move from Flask. A Quart application can render HTML templates, write JSON APIs, serve WebSockets and stream request and response data.

Requests reach the application through an ASGI server. The deployment guide recommends Hypercorn and names Daphne and Uvicorn as other servers that work with Quart.

## Worth knowing

The deployment guide advises against running the application through the built-in run method in production. It also describes a serverless option through Mangum on AWS Lambda.
