---
title: "Why do half of new Swiss companies close within five years?"
date: "2026-10-02"
summary: "A consulting-style study of company survival across five cantons and thirteen sectors, built on official BFS data, the Swiss Venture Capital Report and 30+ verified sources."
cover: /assets/img/sectors.png
pdf: /assets/files/swiss-startup-survival-study.pdf
tags: ["Power BI", "Research", "Strategy"]
question: "Why do half of new Swiss companies close within five years, and what makes the other half survive?"
data: "BFS company demography (26 cantons, 2013 to 2023), BFS population, Swiss Venture Capital Report 2026"
tools: "Python, Power BI, Excel"
time: "One week"
role: "Solo project: framing, data, analysis, writing"

steps:
  - title: "Framed the question"
    text: "Split one big question into five testable parts (regions, sectors, money, size, AI) and wrote a hypothesis for each before looking at the data."
  - title: "Collected official data"
    text: "Downloaded raw tables from the Federal Statistical Office (BFS) and extracted funding figures from the Swiss Venture Capital Report 2026."
  - title: "Cleaned it in Python"
    text: "Translated German and Italian tables, reshaped them to one value per row, and checked totals against published figures (46,883 vs 46,931 new companies)."
  - title: "Built the analysis in Power BI"
    text: "A four-page report: founding rate against survival by canton, survival by sector, venture capital by sector, and survival by company size."
  - title: "Researched every why"
    text: "Tested each explanation against at least two sources, then audited the sources themselves: who was counted, and how."
  - title: "Turned findings into strategy"
    text: "PESTEL, Five Forces, eight sector diagnoses, scenarios to 2030 and recommendations for founders, investors and cantons."

findings:
  - "How a company starts matters most: one-person starts survive 49%, companies with 10 or more employees 68%."
  - "Health survives best (63%), hospitality worst (38%); ICT (46%) and finance (47%) are below average."
  - "Zug founds 2.5 times more companies per resident than Zurich, and keeps the fewest (46.8%)."
  - "Venture capital does not explain survival: Lucerne gets almost none and survives as well as Zurich."
  - "AI is not yet the main cause of failure, but it is crowding knowledge work and concentrating capital."

visuals:
  - image: /assets/img/regions.png
    caption: "Founding rate against 5-year survival by canton"
  - image: /assets/img/sectors.png
    caption: "5-year survival by sector"
  - image: /assets/img/money.png
    caption: "Venture capital by sector, 2025"
  - image: /assets/img/size.png
    caption: "5-year survival by size at founding"

sources:
  - name: "BFS, company demography: survival rates"
    url: "https://www.bfs.admin.ch/bfs/de/home/statistiken/industrie-dienstleistungen/unternehmen-beschaeftigte/unternehmensdemografie/ueberlebensraten.html"
  - name: "BFS STAT-TAB, company demography by canton"
    url: "https://www.pxweb.bfs.admin.ch/pxweb/de/px-x-0602030000_204/-/px-x-0602030000_204.px/"
  - name: "Swiss Venture Capital Report 2026"
    url: "https://www.startupticker.ch/en/swiss-venture-capital-report"
  - name: "EY Startup Barometer Switzerland 2026"
    url: "https://www.ey.com/en_ch/newsroom/2026/02/ey-start-up-barometer-switzerland-2026-significant-increase-in-investment-volume-ai-start-ups-becoming-much-more-important"
  - name: "SECO economic forecast, September 2026"
    url: "https://www.seco.admin.ch/seco/de/home/wirtschaftslage---wirtschaftspolitik/Wirtschaftslage/konjunkturprognosen.html"
---

## Why this question

Switzerland creates record numbers of companies every year, yet only 50.7% of those founded in 2018 still existed five years later. A founding boom means little if half of it disappears, so I wanted to know what separates the survivors.

## How I chose the data

- **BFS company demography** counts only genuinely new companies. It excludes mergers, relaunches and holding companies, and follows each founding year for five years. The 2018 cohort is the latest with a full five-year record.
- **Population data** turned raw counts into rates per 1,000 residents, because Zurich is twelve times larger than Zug.
- **The Swiss Venture Capital Report** is the only complete record of Swiss startup funding. Bern and Lucerne are not shown separately, so I rebuilt their figures from the list of individual rounds.

## The hypothesis I got wrong

I expected regions with little venture capital to survive less. Lucerne proved me wrong: almost no venture capital, and survival as good as Zurich. Venture capital reaches about 350 companies a year, against more than 46,000 new ones, so it cannot explain the survival of companies it never touches.

## What I would do next

- Test how much of Zug's churn comes from foreign-owned and mobile companies.
- Survey Swiss SMEs on which AI projects they tried, dropped and why.
- Rerun the analysis when BFS publishes the next cohorts.
