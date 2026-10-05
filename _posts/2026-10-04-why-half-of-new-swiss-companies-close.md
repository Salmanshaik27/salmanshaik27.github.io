---
layout: post
title: "Half of new Swiss companies close within five years. Here is why."
date: 2026-10-04 08:00:00 +0200
series: "Swiss startup survival, part 1 of 12"
summary: "I followed every company founded in Switzerland in 2018 for five years. Half were gone by 2023. What separates the survivors is not where they are or how much money they raise, but how they start and which market they enter."
tags: ["Research", "Overview"]
image: /assets/img/cover-startup-survival.png
tone: "#14213D"
stat: "50.7%"
stat_label: "of companies founded in 2018 still existed in 2023"
takeaways:
  - "Switzerland keeps about half of its new companies for five years, slightly better than the EU average of about 45%."
  - "How a company starts (team, capital) and which market it enters explain far more than location or venture capital."
  - "The full 45-page study and 11 follow-up posts explain each finding in depth."
related:
  - /work/swiss-startup-survival/
  - /blog/zug-founds-the-most-keeps-the-fewest/
  - /blog/why-solo-founders-close-more-often/
  - /blog/what-i-would-tell-founders/
---

Every year, Swiss newspapers report record numbers of new companies, and it sounds like a sign of a healthy economy. But a founding boom only matters if the companies last. When I followed a single founding year all the way through, the picture changed. Of all the companies founded in Switzerland in 2018, only **50.7%** still existed five years later.[^bfs] For every two new companies, one was gone by 2023.

That raised the question I wanted to answer the way a consultant would answer it for a client. Not "how many companies are founded?", but **"which ones survive, and why?"**

## Treating it as a consulting case

A consultant does not start by opening a spreadsheet. The first step is to break a big, fuzzy question into smaller questions that do not overlap and that together cover the whole problem. I split mine into five: does survival depend on the region, the sector, the money a company raises, the size it starts with, or the arrival of AI? For each one, I wrote down what I expected to find before I looked at any data, so that I could not quietly adjust my expectations afterwards.

{% include diagrams/issue-tree.html %}

The data came from the Federal Statistical Office (BFS), which follows every genuinely new company for five years and excludes mergers, relaunches and holding companies.[^bfs] I added population figures for each canton to make fair comparisons, and the Swiss Venture Capital Report 2026 for funding.[^svcr] The tables arrived in German and Italian with merged headers, so I translated and reshaped them and checked my totals against the published figures before trusting any result. My cleaned data adds up to 46,883 new companies in 2023, against 46,931 published by BFS; the small gap is cells that BFS hides for confidentiality.

> I chose the 2018 founding year because it is the most recent year with a full five years of follow-up. BFS survival data runs about two years behind, so this is as fresh as a complete five-year view can be.
{: .method}

## Is 50.7% a bad number?

Not by European standards. Eurostat puts the five-year survival rate across the European Union at about 45% for companies founded in 2014.[^eurostat] Switzerland does somewhat better. The real point is that half of all founding effort still disappears, and that the losses are concentrated in predictable places.

## What decides survival

When I ranked the five factors by the size of the survival gap each one creates, a clear order appeared.

{% include diagrams/driver-tree.html %}

The strongest factor is **how a company starts**. Only 49% of companies that start with one employee survive five years, against 68% of those that start with ten or more. Companies founded with share capital, as a GmbH or an AG, also survive better than sole proprietorships. The second factor is **the market**: health survives at 63%, hospitality at 38%, and the fashionable sectors, ICT and finance, sit below the Swiss average. Location matters less than I expected, and mostly through the kind of company a place attracts: Zug founds more companies per resident than any canton I studied and keeps the fewest. Money, which I assumed would matter a great deal, does not explain survival at all. And AI, while it is clearly changing which companies are founded and funded, cannot yet be shown to change how many survive.

> New Swiss companies mostly fail because of **how they start and which market they enter**, not because of where they are or how much money they raise.
{: .key}

## Why it matters

For founders, it means the most important decisions are made before the first customer: whether to start alone, how much capital to commit, and whether the market has any barrier that protects the business. For cantons, it means that counting registrations celebrates the wrong number. For investors, it means venture capital touches a tiny share of the economy and cannot fix survival on its own.

In the eleven posts that follow, I take each finding in turn and explain the evidence, how I found it, why it probably happens and what it means in practice. You can read [the full study](/work/swiss-startup-survival/) in one place, and test every chart yourself on the [data page](/data/).

[^bfs]: Federal Statistical Office (BFS), [Company demography: survival rates](https://www.bfs.admin.ch/bfs/de/home/statistiken/industrie-dienstleistungen/unternehmen-beschaeftigte/unternehmensdemografie/ueberlebensraten.html), and [STAT-TAB company demography by canton and industry](https://www.pxweb.bfs.admin.ch/pxweb/de/px-x-0602030000_204/-/px-x-0602030000_204.px/).
[^svcr]: startupticker.ch and SECA, [Swiss Venture Capital Report 2026](https://www.startupticker.ch/en/swiss-venture-capital-report).
[^eurostat]: Eurostat, [Key figures on European business: business dynamics](https://ec.europa.eu/eurostat/cache/htmlpub/key-figures-on-european-business-2022/business_dynamics.html). Five-year survival of enterprises born in 2014, EU average.
