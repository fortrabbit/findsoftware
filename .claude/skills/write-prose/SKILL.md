---
name: write-prose
description: Write the prose body of one FindSoftware record from its fact file, to research/prose/<id>.md. Use when asked to write or draft record prose, or when a prose batch runs over research/facts/.
---

# Write record prose

Read `AGENTS.md` first, section "Record prose". This can run unattended. Never ask a question.

## Input

One or more ids, each with a fact file at `research/facts/<id>.yml`. The fact file is the only source. Do not browse, search or fetch anything: prose that says more than the facts is prose nobody can check.

## What to write

`research/prose/<id>.md`, plain markdown, no frontmatter, no heading over the opening.

- **The opening:** what the software is and how it works, in one or two paragraphs. What it does, what it is built on or with, how it is installed and run, how content or data is stored where that applies, who maintains it.
- **`## Worth knowing`:** constraints a reader would want before choosing, one or two short paragraphs: a commercial license for some uses, a hosted dependency, a long-running process where a reader might expect static files, a project in maintenance mode. Omit the section when the facts hold nothing material. Never invent a reservation to fill it.
- **Length:** up to 250 words, no minimum. A 30-word record that says only what is known is a good record; never add a sentence to reach a length.

## Rules

- **Do not restate what the record page shows as a field.** The page already lists license, language, runtime, hosting needs, rendering modes, databases, install method, build command, output directory, maintainer and links. Prose explains how the parts fit together and what that means for running it; "the build command is hugo" or "the project is MIT-licensed" is a row, not a sentence. A field may appear when the sentence says something the row cannot, such as why static hosting is enough.
- **Read compressed values literally and keep their scope.** "long-running Node process for all features" means the full feature set needs one, not that every feature does. When a value is ambiguous, leave it out.
- **Only what the fact file states.** Every sentence traces to a fact entry or the `notes`. A fact in `notFound` is unknown: do not mention it, do not hint at it.
- **Describe, never judge.** No "popular", "powerful", "modern", "lightweight", "fast", "easy", "flexible", "robust", "best", "leading", "simple". No recommendation, no "ideal for", no comparison except a factual relationship (built on, fork of, successor to, alternative named on its own pages).
- **Nothing that rots.** No version numbers, no star or download counts, no prices, no dates of releases. Those are fields with a date. A founding year is fine.
- **No PHP lens.** Describe each software on its own terms.
- **Link text names the document**, sparingly, using a URL from the fact file: "the [deployment guide](…) describes…". At most three links.
- **US English.** No em dashes. No "not X, it's Y", no rule-of-three lists for rhythm, no closing aphorism, no "actually", "simply", "really", "already".
- **Name the software, not "it", in the first sentence**, and do not repeat the `description` line word for word.

## Report

A table: id, words, links, whether `## Worth knowing` was written. Then any id skipped because its fact file was too thin to write two sentences.
