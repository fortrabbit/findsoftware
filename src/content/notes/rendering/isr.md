---
description: Software that serves statically built pages and regenerates them on the server after a set time or on demand.
lead: Static pages that rebuild themselves.
---

Incremental regeneration serves a page as a prebuilt file and rebuilds it in the background when it is older than a set interval or when a webhook asks for it. Large sites avoid rebuilding every page on each content change, and visitors still get cached HTML. It needs a host that supports the mechanism, which in practice means the framework's own adapter for a given platform. A record holds this value when its documentation describes this mode by name, as [Next.js](/nextjs/) and [Nuxt](/nuxt/) do.
