Cryogen is a static site generator written in Clojure. A new site is created from a Leiningen template with `lein new cryogen`, or with the Clojure CLI tools clj-new and deps-new. Posts and pages are Markdown files by default, with AsciiDoc as an alternative, and the layouts use the Selmer templating engine.

The generated site is static files in a `public` folder, which the [deployment documentation](https://cryogenweb.org/docs/deploying-to-github-pages.html) shows publishing through GitHub Pages and Netlify. The homepage copyright line names Carmen La.
