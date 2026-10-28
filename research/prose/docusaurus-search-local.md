@easyops-cn/docusaurus-search-local is a search theme for Docusaurus sites. It is added to the Docusaurus configuration as a theme, and it indexes the docs and blog of the site locally, so search does not depend on an external search service. The README describes an option that adds a hash to the index request, so that the index file can be cached for a long time.

The theme ships interface translations for en, de, vi and zh-CN. Other languages are indexed through lunr-languages, and the README names zh as a supported index language.

## Worth knowing

The theme can also show answers from an AI service. The Ask AI option is opt-in, off unless the site sets askAi, and calls an external AI service at a URL the site configures.
