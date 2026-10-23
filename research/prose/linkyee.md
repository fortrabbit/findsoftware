linkyee is a template for a personal link page, named on its own pages as an open-source LinkTree alternative. The page is configured in one YAML file, `config.yml`, rendered with Liquid, which sets the theme, the profile and the links. Plugins written as Ruby classes fetch data at build time, such as GitHub star counts, feed items and profile figures, and insert it into the page. The site is generated as static files and deployed to GitHub Pages by a GitHub Actions workflow. Setting `i18n` renders one static site for each locale. The project is maintained by ZhgChgLi.

## Worth knowing

The Docker deployment runs the site as a service on port 8080, with plugin data refreshed at the interval set by `REBUILD_INTERVAL`. Building locally needs Ruby, and the README states no minimum Ruby version.
