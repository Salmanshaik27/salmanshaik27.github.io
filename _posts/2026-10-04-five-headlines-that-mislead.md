---
layout: post
title: "Five headlines that are not what they seem"
date: 2026-10-04 16:00:00 +0200
series: "Swiss startup survival, part 9 of 12"
summary: "Record foundings, record bankruptcies, 60% AI adoption: each headline is true, and each hides a definition that changes the story. How I audited the sources behind my study."
tags: ["Research", "Due diligence"]
image: /assets/img/blog-headlines.png
tone: "#4A4A2A"
stat: "4 questions"
stat_label: "to ask before using any number"
takeaways:
  - "Register counts include holding companies; BFS counts only real businesses."
  - "Part of the 2025 bankruptcy jump is a change in the law, not the economy."
  - "AI adoption ranges from 8% to 60% depending on the definition."
related:
  - /blog/hidden-denominator-ai-success-rates/
  - /blog/zug-founds-the-most-keeps-the-fewest/
  - /work/swiss-startup-survival/
---

In consulting, the most expensive mistakes often start with a number nobody questioned. Before building my analysis, I audited the sources behind the claims I planned to use. Five headlines turned out to mean something different from what they seem to say.

The first is **"record company foundings"**. Commercial register counts include holding companies, which are among the largest groups of new entries.[^cr] The Federal Statistical Office counts only companies with real economic activity, and its figures showed foundings flat in 2023.[^bfs] The register measures paperwork; BFS measures businesses.

The second is **"record bankruptcies"**. Since 2025, tax and social insurance authorities must pursue unpaid claims through bankruptcy proceedings rather than the old seizure route, and Dun & Bradstreet notes that this makes comparisons with earlier years misleading.[^db] Part of the jump is a change in the law, not in the economy, and the same effect will flatter the figures once it fades.

The third is **"60% of Swiss firms use AI"**. Depending on the survey, Swiss AI adoption ranges from about 8% of small firms[^kof] to around 60% of all firms, with only 2% of micro-firms using AI systematically.[^ubs] "Using AI" can mean one employee trying a chatbot once, or a company redesigning a process. The definition decides the headline.

The fourth is **"AI projects succeed 74% of the time"**, or 5%, depending on who was asked and what counted as success. [Part 8](/blog/hidden-denominator-ai-success-rates/) takes that apart in detail.

The fifth is a funding total. EY puts Swiss startup funding in 2025 at more than CHF 3.3 billion,[^ey] while the Swiss Venture Capital Report puts it at CHF 2.95 billion.[^svcr] Different databases, different definitions; neither is wrong, but mixing them in one argument would be.

> **Always say which source a number comes from.** In my study I used the Swiss Venture Capital Report for all funding figures, because it is the only source with the full list of rounds by canton.
{: .method}

## How I rated my sources

| Claim | Source | Reliability | Weak point |
| --- | --- | --- | --- |
| Survival by canton, sector, size | BFS company demography | <span class="pill p-lo">High</span> | Two-year lag |
| Venture capital by canton and sector | Swiss Venture Capital Report | <span class="pill p-lo">High</span> | Disclosed rounds only |
| AI share of venture capital | EY Startup Barometer | <span class="pill p-md">Medium to high</span> | EY's own definition of AI |
| AI adoption in firms | AXA/Sotomo, UBS, KOF | <span class="pill p-md">Medium</span> | Each defines "using AI" differently |
| AI project returns | MIT, IBM, McKinsey, S&P | <span class="pill p-md">Medium</span> | Selective samples, self-reporting |

> Who was counted? What counted? Over what time? Who published it? If you cannot answer all four, do not build a decision on the number.
{: .remember}

The full source audit is in [section 18 of the study](/work/swiss-startup-survival/#s18).

[^cr]: Creditreform, via [cash.ch](https://www.cash.ch/news/top-news/rekord-an-firmengrundungen-und-deutlich-mehr-konkurse-950049).
[^bfs]: Federal Statistical Office (BFS), [Company demography](https://www.bfs.admin.ch/bfs/de/home/statistiken/industrie-dienstleistungen/unternehmen-beschaeftigte/unternehmensdemografie/ueberlebensraten.html).
[^db]: Dun & Bradstreet, via [Moneycab](https://www.moneycab.com/schweiz/konkurse-nehmen-im-halbjahr-auch-wegen-gesetzesaenderung-massiv-zu/).
[^kof]: KOF ETH Zurich, [Digital technology: are small firms being left behind?](https://kof.ethz.ch/en/publications/kof-insights/articles/2025/02/digital-technology-are-small-firms-being-left-behind.html)
[^ubs]: UBS AI survey, via [Netzwoche](https://www.netzwoche.ch/news/2026-05-20/ki-kommt-in-schweizer-firmen-an-bleibt-aber-stueckwerk).
[^ey]: EY, [Startup Barometer Switzerland 2026](https://www.ey.com/en_ch/newsroom/2026/02/ey-start-up-barometer-switzerland-2026-significant-increase-in-investment-volume-ai-start-ups-becoming-much-more-important).
[^svcr]: startupticker.ch and SECA, [Swiss Venture Capital Report 2026](https://www.startupticker.ch/en/swiss-venture-capital-report).
