Nchan is a pub/sub server module for Nginx. Publishers send messages to a channel with HTTP POST requests, and subscribers receive them over WebSocket, EventSource (Server-Sent Events), long-polling and other HTTP-based methods. It is written in C and runs inside Nginx, with connections handled by the Nginx worker processes. The project documents a source build and packages for Homebrew, Debian, Fedora and Arch Linux.

## Worth knowing

Because Nchan is an Nginx module, a site that uses it runs it on an Nginx build that loads the module. The first version was written in 2009 and 2010 as the Nginx HTTP Push Module.
