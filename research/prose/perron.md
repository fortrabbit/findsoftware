Perron is a static site generator for Ruby on Rails, built on Rails and installed into a Rails application with bundle add perron and the perron:install task. Content lives in the application as markdown or ERB files, grouped into collections, and the perron:build task writes the finished site to an output directory. The library requires Ruby 3.4 or newer.

## Worth knowing

Perron has two modes. The default standalone mode produces a static site for build-based hosts such as Netlify. The integrated mode adds static pages to a live Rails application, which then runs on a Rails host such as Heroku.
