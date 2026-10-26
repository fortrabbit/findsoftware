Storytime is a Rails engine that adds a content management system and blogging to a Rails application. Its dashboard manages content and other Rails models, and one deploy can serve several sites.

Installation adds a gem to the Gemfile and runs an install generator or a command-line setup; the manual route assumes the host has an authentication system, such as Devise. The [setup guide](https://github.com/CultivateLabs/storytime/wiki/Setup) describes the steps.

## Worth knowing

The README divides the work between the CMS and the host: Storytime edits content, copy and basic formatting, while the host app provides the page structure, styling and interactions. A site that needs a custom layout is therefore built in the host app, not in the dashboard.

Image uploads need ImageMagick installed. The engine runs inside a Rails server that stays running.
