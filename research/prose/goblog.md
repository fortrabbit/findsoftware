GoBlog is a single-user, multi-blog publishing platform written in Go. It runs as one binary that keeps posts, comments and sessions in a SQLite database, and writing happens in a web editor. One installation can host several blogs, and login works with a password or through OpenID Connect. Jan-Lukas Else maintains it, and it is distributed as a Docker image or built from source.

## Worth knowing

GoBlog is a long-running server, not a set of static files, so the host has to keep a process running to serve the blog.
