---
layout: ../layouts/Article.astro
title: About
published: 2026-10-18
updated: 2026-10-21
description: Who publishes FindSoftware and why, the rules every record follows, and how records are sourced.
lead: A register of software to build websites with, in every language, recorded field by field with a source for every answer.
---

FindSoftware lists the tools web creators build with: content management systems, web frameworks, static site generators, headless CMSs, e-commerce, UI libraries, CSS frameworks, site search, and the plugins and packages built on them. Each record holds facts read from the project's own pages, its repository and package registries, each with a link and the date it was read.

## Rules

- **No ranking.** The order is alphabetical. Stars and downloads are recorded as facts with a date, never used to sort. [Momentum](#momentum) decides which records the default view shows.
- **Absent means unknown.** A blank field was not found, not a "no".
- **Every fact has a source.** The numbered list at the bottom of each record says where it came from and when.
- **No affiliate links.**
- **Mechanical inclusion.** The [listing criteria](/criteria/) decide what is listed, and where a record appears when it fails one.

## Adoption figures

GitHub stars, package downloads and plugin counts are recorded because they show that people use a project. They do not compare across records on their own:

- **Stars** count bookmarks, not use. They grow with a project's age and with attention on launch days, and they stay when a project is abandoned. Software hosted outside GitHub has none, and a repository holding several products shares one count.
- **Downloads** include CI runs, mirrors and installs pulled in as a dependency of another package. Registries count different periods: npm per week, Packagist in total.
- **Plugin counts** depend on what each directory lists: some include themes and abandoned entries, some do not.

Each figure carries the date it was read. Nothing on this site sorts or ranks by them. The usage band and momentum below are the two measures built from them.

The usage band on the [Usage](/usage/) page puts each record in one of five bands, from its place among the records holding each of its figures, averaged and cut into fifths. It is rough: the figures cover different periods, and a record with fewer figures rests on fewer of them. No band means not measured, not unused. The band counts use, not quality.

## Momentum

The register, the lists and the graph show the records with momentum by default. The [full list](/all/) holds the rest as well; every record keeps its page and stays in search. Momentum is measured by a script from public APIs, never typed by hand, and each measurement carries its date.

A record has momentum when it had a release, a pre-release or a push to its repository in the last 12 months, and one of these:

- **Activity:** at least 104 commits to the default branch in the last 13 weeks, and in the last 26 weeks at least one and a half times as many as in the 26 before.
- **Downloads:** up 25% or more against the same weeks a year ago, from at least 4,000 npm downloads in 28 days or a daily average of 33 on Packagist.
- **Wide use:** usage band 5, the top fifth on the [Usage](/usage/) page.

A record not measured yet is shown. Growth counts a young project rising from few downloads the same as a large one, and wide use keeps a project people rely on when its activity is steady.

A person can also take a record out of the default view after looking at it. It becomes a stub, with the reason recorded. This is the one judgement in the default view, and it only ever removes a record.

## Publisher

FindSoftware is published by [fortrabbit](https://www.fortrabbit.com), a hosting company. It is the sibling of [FindHost](https://www.findhost.app), a register of hosting providers built the same way. Hosting on fortrabbit is never a reason to be listed and never a field on a record.

## Hosting suggestions

A record page names up to four hosts from [FindHost](https://www.findhost.app): hosts that list the software, or, where FindHost has no page for the software, hosts that run its runtime. Hosts built for that one software come first. The rest are drawn by a fixed hash of the record and the host, so a page shows the same hosts on every build and another page shows others. No measure of quality enters the pick, and the hosts shown are listed alphabetically. Each links to its own site and to its FindHost page, and a link below the list leads to all of them.

When FindHost lists fortrabbit for the software, fortrabbit appears first, labeled "Publisher", on top of the four.

## Credits

Records are researched by AI agents from primary sources only: the project's own site, its repository and package registries, never directories or comparison sites. A second agent checks every fact against its quote, and a script fetches each quoted page again to confirm the words are still there. A person reads the records after they are published and corrects what is wrong. Each record says how much of its description a machine wrote. The data is licensed CC BY 4.0, the code MIT.

Logos belong to the projects. Each one was fetched from the project's own site and is served from here, so your browser never asks a project's site for anything. They identify the software and nothing more; a project that wants its logo gone gets it removed.

## State

This is an early version. Research runs one area at a time, starting with CMSs, frameworks and static site generators, so whole kinds of software are still missing. Fields and filters will change.
