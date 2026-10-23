20ful is a static site generator that takes the files in `src/`, processes them and writes the result to `_site/`, keeping the directory structure. Markdown, Pug and Nunjucks sources become HTML, Stylus and Sass become CSS, and LiveScript becomes JavaScript, and other files are copied as they are. Front matter at the top of each file sets its template, layout, table-of-contents entry and cache busting, and a `20ful-config.yaml` file sets the source and output folders and the Markdown plugins. The `20ful serve` command builds the site and starts a development server that reloads the browser on change, using browser-sync. The npm package lists Iļja Ketris as its author.

## Worth knowing

The `20ful proxy <port>` command starts a proxy to a server that is already running, for a site with parts that need that server. Two files whose paths differ only by the `html/` folder collide in the output, and only one of them is written.
