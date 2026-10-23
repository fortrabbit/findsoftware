parklife is a Ruby gem that renders a Rack application, such as one built with Rails or Sinatra, into a static build. It is added to the application's Gemfile, and the parklife build command crawls the application and writes the static files to a build directory. The build can be served by GitHub Pages, Netlify, S3, Vercel, or any other server.

## Worth knowing

The README says parklife does not handle assets such as images and CSS, which have to be generated and copied into the build directory separately.
