Thinking Sphinx is a Ruby library that connects ActiveRecord to the Sphinx or Manticore full-text search servers. It is installed as a gem, and the search server runs beside the application, which queries it through the library. The README says the library integrates closely with Rails and also works with other Ruby web frameworks. Pat Allan develops and maintains it.

## Worth knowing

The search server is a long-running daemon that the application needs in production. The v5 deployment guide also asks for a cron job that regularly processes the indices, so that recent changes become searchable. The documentation site answers with the v5 pages, so its install and deployment steps describe version 5 while the current release is version 6.
