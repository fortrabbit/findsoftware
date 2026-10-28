importmap-rails is a Ruby gem that adds import maps to Rails, so the browser loads JavaScript ES modules directly. The application's `config/importmap.rb` pins logical module names to local files or CDN URLs, and the layout helper `javascript_importmap_tags` writes the map into the page. The `./bin/importmap` command downloads npm packages from a CDN into `vendor/javascript`, where they are served by the asset pipeline.

The README presents this as an approach that avoids transpiling and bundling, so an application ships many small files instead of one bundle. Rails 7 and later include the gem by default in new applications.

## Worth knowing

Subresource integrity is opt-in: the gem adds hashes only after `enable_integrity!` is called in the importmap configuration, and Propshaft needs an integrity algorithm set in the application.
