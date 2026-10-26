Locomotive CMS is a content management platform for creating, publishing and editing websites. The engine is a Ruby on Rails application that generates a back-office for end users from the custom content types and editable regions a developer defines. Developers code the sites locally with Wagon, a separate open source tool, and deploy them to the engine through its internal API. Sites use Liquid templates, and the engine supports several sites, localization of all content and pages, and a REST API for managing sites.

## Worth knowing

The engine runs as a Rails server, so a live site depends on that process rather than on static files. The same company, NoCoffee SARL, runs a [hosting service](https://www.locomotivecms.com/pricing) for sites on the platform, priced separately from the open source engine. The getting-started guide names older Ruby, Rails and MongoDB requirements than the README lists, so check the requirements of the release you install.
