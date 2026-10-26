Mojolicious is a real-time web framework for Perl. It includes a built-in non-blocking web server, Perl-ish templates, and a toolkit with HTTP and WebSocket client and server components. It is installed from CPAN with cpanm, and the Cookbook covers running it under Hypnotoad, under Morbo during development, or as a CGI script.

## Worth knowing

On its built-in server the application is a process that stays running. As a CGI script it starts for each request and nothing stays running between them.
