Bullet is a PHP micro-framework that builds applications around HTTP URIs and defined paths. Its router handles one path segment at a time: static segments are declared with `path`, variable segments with `param`, and HTTP method handlers sit inside the path they belong to. The homepage describes it as built for REST APIs and web applications, and the README says a Bullet application can sit under an existing web app to serve an API or dynamic pages.

Requests reach the application through PHP: the README's Apache setup passes every request that is not an existing file or directory to `index.php`. The project is installed with Composer.

## Worth knowing

The README opens with a section titled "PROJECT MAINTENANCE RESUMES", which says Bullet becomes an active project again under a changing of the guard.
