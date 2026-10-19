# Hosted services: SaaS headless CMSs

Swept 2026-10-18. 101 rows: 42 hosted-service, 32 boundary, 27 rejected.

## Discovery sources

| Source | Names | New to the list |
|---|---|---|
| jamstack.org headless-cms (repo frontmatter, `opensource: No`) | 71 | 71 |
| postlight/awesome-cms, Closed Source section (SaaS CMSs only) | 38 | 4 |
| Wikipedia List of CMS, SaaS table | 18 | 5 |
| dxpscorecard.com platform list (44) | 44 | 9 |
| npm keyword `headless-cms` search, 500 packages ranked by downloads | 12 over 2k/wk | 1 |
| Web search and own knowledge of vendors, checked on vendor sites | 12 | 12 |
| G2 headless CMS category (108 listings) | blocked (HTTP 403) | 0 |

Left out: website builders, and installable DXPs (Magnolia, Kentico, Liferay, CoreMedia, Jahia, Sitefinity, Brightspot), which belong in the main register.

## Recurring facts

- Pricing: flat tiers plus seat and usage overages (API calls, bandwidth, records, AI credits)
- Free tier: 24 of 42 have one; entry paid plans run from $10/mo (Prismic) to $12,000/yr (Uniform)
- Enterprise tier is always quote-only; about 12 vendors publish no prices at all
- Official SDK on npm: the only machine-readable adoption and release signal
- API style: REST, GraphQL, or both; GROQ for Sanity
- Visual editor
- Content storage: vendor database or the customer's Git repo (CloudCannon, Siteleaf, Spinal, JekyllPad, Usecue)
- On-prem or dedicated option on enterprise plans
- Data residency
- MCP server
- Framework pairing and starters

## Surprises

- Criterion 4 does not fit SaaS. The products are versionless; the npm SDK release is the only date, and 6 vendors show none. The aside needs a rule like "site or SDK activity in 24 months".
- jamstack.org mislabels open-source projects as closed: Directus, Apito, Contentrain, Sitepins, Plasmic. Its list is out of date: 22 of 71 names are dead, pivoted or parked.
- SaaS-only is a blurry line. Sanity Studio and Plasmic are MIT; Caisy, Flotiq, Cloud CMS and Bloomreach sell on-prem. A `hosting: saas | both | self` field would replace the binary status.
- Git-based editors (CloudCannon, Siteleaf) are not headless CMSs; they sit on top of SSGs.
- Pivots are common: TakeShape, graphapi, Pixelesq and FlyCode now sell AI or unrelated products. The aside needs a shorter refresh cycle.
- npm downloads are a poor adoption signal for the aside. HubSpot's SDK covers its whole CRM, and Contentful's 566k/wk dwarfs vendors that ship no SDK at all.
