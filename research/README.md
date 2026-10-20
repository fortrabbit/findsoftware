# Research

Working state, not data. Nothing here is read by a build or covered by a data license yet. It is the input for the schema (MR-409) and the queue that feeds the future `src/content/software/`.

## candidates-<area>.csv

One file per area: `php-cms`, `php-framework`, `js-framework`, `ssg-other`, `headless-selfhosted`, `hosted-service`, `other-languages`, `css-ui`, `search`, `site-services`, `build-dev`, `app-services`, `server-infra`, `dev-libs`. A row asserts that the name, homepage and repository are real and records the criteria check; every fact on the eventual record comes from primary sources.

Directories, awesome lists and comparison sites gave the names. They are a discovery source and never a data source.

### Columns

- **id**: the slug the record will take, matching `facts/<id>.yml` and the future `src/content/software/<id>.md`
- **name**: the project's own spelling
- **homepage**, **repo**: URLs
- **language**: main implementation language
- **categories**: semicolon-separated, free words until `fields.yml` sets the vocabulary
- **status**: `accepted`, `rejected`, `hosted-service`, `discontinued` or `boundary`
- **criterion**: for `rejected`, the number of the failing criterion in `AGENTS.md`; for `discontinued`, the signal and the date it was read; for `boundary`, what needs deciding
- **adoption**: the figure behind criterion 5, with its source, such as `gh 85k stars`
- **lastRelease**: date of the latest release, shown on the record; it decides nothing on its own
- **note**: one clause, no commas

## notes-<area>.md

What discovery saw per area: sources swept and how many names each gave, fact kinds recurring across projects, findings that could change how the directory is shaped.

## visitor-questions.md

Filters and columns of competing directories, the decision criteria people name in forums and threads with frequency and example URLs, and the most asked "X vs Y" pairs.

## notes-waiting/

Facet notes for a value no record holds yet. Validate fails a note whose page is not built, so it waits here and moves back to `src/content/notes/` with the first record that holds the value.

## facts/<id>.yml

One file per candidate, written by `.claude/skills/write-record/SKILL.md`. Each fact carries `field`, `value`, `url`, `checkedAt` and `via` (`api` or `page`). The `field` names are free camelCase until MR-409 maps them to `fields.yml`; the `sources` entries carry over to the record unchanged.
