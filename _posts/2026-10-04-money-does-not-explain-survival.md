---
layout: post
title: "Money does not explain who survives"
date: 2026-10-04 13:00:00 +0200
series: "Swiss startup survival, part 6 of 12"
summary: "The hypothesis I got wrong. Zug gets more venture capital per resident than Zurich and survives worst; Lucerne gets almost none and survives as well as Zurich. Where Swiss venture capital goes, and why it cannot fix survival."
tags: ["Research", "Money"]
image: /assets/img/money.png
image_alt: "Venture capital by sector, 2025"
tone: "#5A3E2B"
stat: "~350"
stat_label: "VC rounds a year, against 46,000+ new companies"
takeaways:
  - "There is no link between venture capital per resident and survival across the five cantons."
  - "45% of Swiss VC went to health-related startups and 34% to ICT and fintech in 2025."
  - "Venture capital is a growth instrument, not a survival instrument."
related:
  - /blog/lucerne-survives-without-venture-capital/
  - /blog/ai-after-chatgpt-swiss-industries/
  - /work/swiss-startup-survival/
---

In consulting, you are taught to state your hypothesis before you look at the data. Mine for this question was simple: regions with little funding will have lower survival. The data rejected it, and that rejection turned into one of the most useful results of the whole study.

| Canton | VC per resident, 2025 | Rounds, 2025 | 5-year survival |
| --- | --- | --- | --- |
| Basel-Stadt | CHF 2,861 | 18 | 50.1% |
| Zug | CHF 2,026 | 30 | 46.8% |
| Zurich | CHF 745 | 151 | 52.3% |
| Bern | at least CHF 17 | 14 | 50.3% |
| Lucerne | CHF 0.3 | 1 | 52.0% |

*Venture capital from the Swiss Venture Capital Report 2026;[^svcr] survival from BFS;[^bfs] per-resident figures are my own calculation.*

The canton with the second-highest venture capital per resident has the lowest survival, and the canton with almost none ties with Zurich. Across these five cantons there is simply no relationship between money and survival.

> The venture capital report does not list Bern and Lucerne separately, so I rebuilt their figures from the report's list of individual financing rounds. They are minimums, which only strengthens the conclusion.
{: .method}

## Where Swiss venture capital goes

Swiss startups raised **CHF 2,948 million** in 2025 according to the Swiss Venture Capital Report.[^svcr] About 45% of it went to health-related startups (biotech CHF 946 million, medtech CHF 280 million, healthcare IT CHF 90 million), and about 34% to ICT and fintech. Another source, the EY Startup Barometer, shows how quickly the focus is shifting: startups working on AI received about a third of Swiss venture capital in 2025, up from about 5% two years earlier.[^ey] Switch the chart below between sectors and cantons.

<div class="chart-embed" data-chart="vc" data-label="Venture capital by sector or canton"></div>

At sector level, investors partly back the best survivors, since health survives best. At regional level, money and survival do not move together. Three facts explain why. The first is scale: about 350 financing rounds a year against more than 46,000 new companies, so venture capital touches well under one percent of them. The second is purpose: venture capital funds a few companies that might grow very large, and accepts that most will fail. The third is concentration: the money flows to a few hubs and sectors, while the bakery, the IT consultancy and the plumbing firm that make up most new companies are financed by savings, bank loans and customers.

> Venture capital cannot explain the survival of companies it never touches.
{: .key}

For policymakers, attracting venture capital is a growth policy, not a survival policy. For founders, the absence of investors is not a disadvantage in itself; for most businesses, early customers and modest fixed costs matter far more. The full analysis is in [section 4 of the study](/work/swiss-startup-survival/#s4).

[^svcr]: startupticker.ch and SECA, [Swiss Venture Capital Report 2026](https://www.startupticker.ch/en/swiss-venture-capital-report).
[^bfs]: Federal Statistical Office (BFS), [Company demography: survival rates](https://www.bfs.admin.ch/bfs/de/home/statistiken/industrie-dienstleistungen/unternehmen-beschaeftigte/unternehmensdemografie/ueberlebensraten.html).
[^ey]: EY, [Startup Barometer Switzerland 2026](https://www.ey.com/en_ch/newsroom/2026/02/ey-start-up-barometer-switzerland-2026-significant-increase-in-investment-volume-ai-start-ups-becoming-much-more-important).
