---
layout: ../layouts/Article.astro
title: About
published: 2026-11-05
updated: 2026-11-10
description: Why FindSoftware and who.
lead: FindSOftware is a register of software to build websites with, by language, recorded field by field.
---

FindSoftware lists tools web creators build with: content management systems, web frameworks, static site generators, headless CMSs, e-commerce, UI libraries, CSS frameworks, site search, the plugins and packages built on them. Each record holds facts read from the project's own pages, its repository and package registries. The result is a database of web creation software. This website is the UI for it.

## Motivation

There is so much nice software out there, so many flavors and colors, not only the big 20. This project aims to make that more visible to discover and use. That goes for people and for coding agents, specifically the later, as their role in choosing software is getting more and more important. Software creation will change because of that. Hopefully this page can positive impact on variety.

I run [fortrabbit](https://www.fortrabbit.com), a hosting company, specialized in PHP. I have a natural interest to see what people build websites with today. No list I found showed that like this. FindSoftware is the bigger sibling of [FindHost](https://www.findhost.app), a register of hosting providers built the same way.

Make no doubt. This is also a cheap marketing trick. FindSoftware puts the fortrabbit as a hosting provider and a publisher. I hope it is not too biased.

## Rules

- **No affiliate links.**
- **No ranking.** Order is alphabetical.
- **Adaption is data.** Stars and downloads are recorded as facts.
- **Absent means unknown.** A blank field was not found, not a "no".
- **Fact have sources.** The numbered list at the bottom of each record says where it came from and when.
- **Mechanical inclusion.** The [listing criteria](/criteria/) decide what is listed.

## Adoption figures

GitHub stars, package downloads and plugin counts are recorded because they show that people use a project. They do not compare across records on their own:

- **Stars** count bookmarks, not use. They grow with a project's age and with attention on launch days, and they stay when a project is abandoned. Software hosted outside GitHub has none, and a repository holding several products shares one count.
- **Downloads** include CI runs, mirrors and installs pulled in as a dependency of another package. Registries count different periods: npm per week, Packagist in total.
- **Plugin counts** depend on what each directory lists: some include themes and abandoned entries, some do not.

Each figure carries the date it was read. The usage band and momentum built from them. The usage band on the [Usage](/usage/) page puts each record in one of five bands, from its place among the records holding each of its figures, averaged and cut into fifths. It is rough: the figures cover different periods, and a record with fewer figures rests on fewer of them. No band means not measured, not unused. The band counts use, not quality.

Take those with a lot of salt grains. The data is fuzzy. Different eco systems count differently. NPM installs can not be easily compared to Packagist numbers. GitHub stars can be misleading too, some software might not be as visible on GitHub but still popular.

## Momentum

I found myself overwhelmed when looking at total data set of currently 2K+ software projects. The website get's a bit slow with so many records, but it also feels like a wall. The default momentum filter aims to show software that is currently popular, while keeping the old dinosaurs out.  Momentum is measured by a script from public APIs. The [full list](/all/) holds the rest as well. A record has momentum when it had a release, a pre-release or a push to its repository in the last 12 months, and one of these:

- **Activity:** at least 200 commits to the default branch in the last 13 weeks, and in the last 26 weeks at least twice as many as in the 26 before.
- **Downloads:** doubled or more against the same weeks a year ago, to at least 100,000 npm downloads in 28 days or a daily average of 1,000 on Packagist.
- **Wide use:** the top tenth of the records on the [Usage](/usage/) page.

Growth counts a young project rising from few downloads the same as a large one, and wide use keeps a project people rely on when its activity is steady. A person can also take a record out of the default view after looking at it. It becomes a stub, with the reason recorded.

## Hosting suggestions

A record page names up to four hosts from [FindHost](https://www.findhost.app): hosts that list the software, or, where FindHost has no page for the software, hosts that run its runtime. Hosts built for that one software come first. The rest are drawn by a fixed hash of the record and the host, so a page shows the same hosts on every build and another page shows others. No measure of quality enters the pick, and the hosts shown are listed alphabetically. Each links to its own site and to its FindHost page, and a link below the list leads to all of them. When FindHost lists fortrabbit for the software, fortrabbit appears first, labeled "Publisher", on top of the four.

## Credits

AI agents did most of the work, from research to code. I curated and micromanaged heavily, but barely looked at the code. 

Machines research the records, scripts check them against sources, I read them after, but I only have a superficial look. SoSo, please expect mistakes.

Records are researched from primary sources only: the project's own site, its repository and package registries, never directories or comparison sites. A second agent checks every fact against its quote, and a script fetches each quoted page again to confirm the words are still there. The data is licensed CC BY 4.0, the code MIT.

Logos belong to the projects. Each one was fetched from the project's own site.

## State

This is an early version. Research runs one area at a time, starting with CMSs, frameworks and static site generators.
