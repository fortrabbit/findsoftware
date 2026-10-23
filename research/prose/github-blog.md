Github Blog is a TypeScript library that reads blog posts from the issues of a GitHub repository. Each issue is one post, and labels with a key and a value, such as type, state, tag and slug, classify it. The library is installed from npm and created with a repository name and a GitHub token. It provides methods for fetching posts and comments, with search, sorting and cursor pagination. The README says the repository covers only the API, and Renato Ribeiro holds the copyright.

## Worth knowing

Posts are read through the GitHub API, so the repository and a token are required. The README notes that random people can open issues on a public repository but cannot add labels, so a label such as type:post controls which issues appear, and that the library fetches only open issues.
