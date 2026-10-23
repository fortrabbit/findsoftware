---
layout: ../layouts/Article.astro
title: Listing criteria
published: 2026-10-18
updated: 2026-10-22
description: The five criteria a piece of software meets to be listed on FindSoftware, and where a record appears when it fails one.
lead: What a project needs to be listed, and where its record goes when it falls short.
---

1. **Used to build, run or extend a website or web app.** It serves HTTP, produces web output, or is a library, plugin or tool added to one. Software built on other software, such as a WordPress plugin or a Hugo theme, gets its own record.
2. **Installable by the user.** Source code or a distributable is available.
3. **Documented installation or deployment.** Install steps in the README count.
4. **Not declared ended.** What counts as an end signal is under Defunct below.
5. **A signal of use.** A company behind it, or a public adoption figure such as GitHub stars or package downloads. The figure is recorded with its date and never used to sort or filter.

## Where a record appears

Every candidate that was researched keeps a record or a row. Nothing is deleted.

- **The register** lists software that meets all five criteria and has released something in the last four years.
- **[Stubs](/stubs/)** hold records with no release or pre-release in four years, and records whose project site no longer shows the software. They keep their page and are checked again. A project that never tags a release is judged by its last commit instead. A record with neither date stays in the register.
- **[Hosted services](/hosted/)** sit beside the register: software sold only as a hosted service, such as a SaaS headless CMS. Criterion 2 is waived for them.
- **[Defunct](/defunct/)** holds software with a clear end signal: the repository is archived, the package registry flags it abandoned or deprecated, the project states it has ended or is unmaintained, or every version is past its end of life on endoflife.date. A long gap between releases is no end signal, and neither is a named successor on its own.
- **[Boundary cases](/boundary/)** are candidates not clearly in or out, listed until that is settled.

Every record is read again within a year of its last check.
