Lapis is a web framework for Lua and MoonScript, installed with LuaRocks. Applications run inside the Nginx worker of OpenResty, which is the default server in its getting started guide, so the web application is run directly inside Nginx. Lapis provides models for PostgreSQL, MySQL and SQLite, and HTML templating with etlua templates and an HTML builder.

Lapis does not include an HTTP server of its own. Its server backends are OpenResty, cqueues with lua-http, and golapis, which is marked experimental. The project is maintained by Leaf Corcoran.
