Symfony HtmlSanitizer is a PHP component that cleans untrusted HTML before it is inserted into a document. It rebuilds the markup from the elements and attributes a configuration allows, and its docs give output from WYSIWYG editors as an example of untrusted input. It is based on the W3C HTML Sanitizer standard proposal.

The Symfony framework exposes the sanitizer as a service. It integrates with Symfony Forms through an option on text fields, and the docs show a Twig filter and a standalone use.

The repository is a read-only split of the main Symfony repository, which takes the issues and pull requests.
