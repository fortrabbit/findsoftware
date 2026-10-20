Last is a static site generator for Symfony applications, installed as a Symfony bundle with Composer. Its dump command runs requests against the application and writes each response as a static HTML file to a dist folder, as the [README](https://github.com/franzwilding/last/blob/master/README.md) describes. Static routes are covered by a built-in request provider; routes with mandatory placeholders, such as one page per article, need a custom provider that lists the requests.

## Worth knowing

The README says the bundle is not yet production ready: testing with more real-life projects and copying assets to the dist folder are listed as still missing. The repository has no license, so its terms of use are not stated.
