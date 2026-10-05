---
title: "Why do half of new Swiss companies close within five years?"
date: "2026-10-02"
kind: "Individual research project"
status: "Completed"
solo: true
summary: "An individual research and data analysis project. I collected official Swiss statistics, cleaned and analysed them in Power BI, and researched every explanation against at least two sources to find out which new companies survive, and why."
cover: /assets/img/cover-startup-survival.png
pdf: /assets/files/swiss-startup-survival-study.pdf
tags: ["Individual research", "Power BI", "Strategy"]
question: "Why do half of new Swiss companies close within five years, and what makes the other half survive?"
data: "BFS company demography (26 cantons, 2013 to 2023), BFS STATPOP population, Swiss Venture Capital Report 2026, and 30+ verified sources"
tools: "Power BI, Excel, issue tree, PESTEL, Five Forces, scenario planning"
time: "One week"
role: "Individual project: framing, data collection, cleaning, analysis, research and writing"
data_link: true
powerbi: true

steps:
  - title: "I framed the question"
    text: "I split one big question into five testable parts (regions, sectors, money, size and AI) and wrote down a hypothesis for each before looking at any data."
  - title: "I collected the official data"
    text: "I downloaded the raw survival and company tables from the Federal Statistical Office (BFS), population figures for each canton, and the funding tables from the Swiss Venture Capital Report 2026."
  - title: "I cleaned and checked it"
    text: "The tables came in German and Italian with merged headers. I translated them, reshaped them to one value per row, and checked my totals against the published ones: 46,883 against 46,931 new companies, with the small gap from cells BFS hides for confidentiality."
  - title: "I built the analysis in Power BI"
    text: "Four report pages: founding rate against survival by canton, survival by sector, venture capital by sector, and survival by company size."
  - title: "I researched every why"
    text: "For each finding I looked for the reason, checked every claim against at least two sources, and audited the sources themselves: who was counted, and how."
  - title: "I turned findings into strategy"
    text: "A PESTEL scan, a Five Forces comparison, eight sector diagnoses, four scenarios to 2030 and recommendations for founders, investors and cantons."

findings:
  - "How a company starts matters most: one-person starts survive 49%, companies starting with 10 or more employees 68%."
  - "Which market it enters comes next: health survives best (63%), hospitality worst (38%); ICT (46%) and finance (47%) are below the 50.7% average."
  - "Location matters less: Zug founds 2.5 times more companies per resident than Zurich and keeps the fewest (46.8%)."
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
  - name: "BFS, new enterprises and survival"
    url: "https://www.bfs.admin.ch/bfs/de/home/statistiken/industrie-dienstleistungen/unternehmen-beschaeftigte/unternehmensdemografie/neugruendungen-ueberlebensraten.html"
  - name: "BFS STAT-TAB, company demography by canton and industry"
    url: "https://www.pxweb.bfs.admin.ch/pxweb/de/px-x-0602030000_204/-/px-x-0602030000_204.px/"
  - name: "Swiss Venture Capital Report 2026 (startupticker.ch and SECA)"
    url: "https://www.startupticker.ch/en/swiss-venture-capital-report"
  - name: "EY Startup Barometer Switzerland 2026"
    url: "https://www.ey.com/en_ch/newsroom/2026/02/ey-start-up-barometer-switzerland-2026-significant-increase-in-investment-volume-ai-start-ups-becoming-much-more-important"
  - name: "SECO economic forecast, September 2026"
    url: "https://www.seco.admin.ch/seco/de/home/wirtschaftslage---wirtschaftspolitik/Wirtschaftslage/konjunkturprognosen.html"
  - name: "ILO Working Paper 140: generative AI and jobs (2025)"
    url: "https://webapps.ilo.org/static/english/intserv/working-papers/wp140/index.html"
  - name: "GastroSuisse and KOF business survey, Q1 2026"
    url: "https://gastrosuisse.ch/assets/de/branchenwissen/zahlen-und-trends/aktuelle-geschaeftslage/konjunkturkof/gastrosuisse-kof-zusammenfassung-2026-q1.pdf"
  - name: "Swiss Post: Swiss e-commerce 2025"
    url: "https://digital-commerce.post.ch/de/pages/blog/2026/schweizer-e-commerce-6-prozent-wachstum"
  - name: "Crypto Valley Top 50 Report 2026"
    url: "https://cryptovalleyjournal.com/hot-topics/news/crypto-valley-top-50-report-2026-47-percent-european-investments/"
---

## Why I asked this question

Switzerland creates record numbers of companies every year, yet only **50.7%** of those founded in 2018 still existed five years later. For every two new companies, one was gone by 2023. A founding boom means little if half of it disappears, so I wanted to know what separates the survivors from the rest.

## How I collected and prepared the data

| Data | Where I got it | Why I chose it |
| --- | --- | --- |
| Survival of new companies by canton, sector, size and legal form | BFS company demography | It counts only genuinely new companies, excludes mergers, relaunches and holding companies, and follows each founding year for five years |
| New companies, closures and active companies by canton and industry, 2013 to 2023 | BFS STAT-TAB | It gives counts, not only rates |
| Population per canton, end of 2023 | BFS STATPOP and cantonal statistics offices | It turns counts into comparable rates per 1,000 residents, because Zurich is twelve times larger than Zug |
| Venture capital by sector, canton and round, 2025 | Swiss Venture Capital Report 2026 | It is the only complete record of Swiss startup funding |

**Why the 2018 founding year:** it is the most recent year with a full five years of follow-up, because BFS data runs about two years behind.

**Why five cantons:** each plays a different role. Zurich is the hub, Basel-Stadt the life-science cluster, Zug the formation machine, Lucerne the rising challenger and Bern the control case.

**How I made the data usable:** the raw tables came in German and Italian, with merged headers and footnotes. I translated them, put one value per row, mapped standard canton codes, and left missing values blank instead of zero so they could not distort averages. Bern and Lucerne are not shown separately in the venture capital report, so I rebuilt their figures from the list of individual financing rounds.

**How I checked it:** my cleaned canton data adds up to 46,883 new companies in 2023, against 46,931 published by BFS. The venture capital tables by canton and by sector both add up to exactly CHF 2,948 million.

## What I found, finding by finding

### 1. Regions: Zug founds the most and keeps the fewest

| Canton | New companies per 1,000 residents | 5-year survival |
| --- | --- | --- |
| Zug | 13.7 | 46.8% |
| Basel-Stadt | 6.9 | 50.1% |
| Zurich | 5.4 | 52.3% |
| Lucerne | 4.7 | 52.0% |
| Bern | 3.8 | 50.3% |

Zug had the lowest survival of the five cantons in **every founding year from 2013 to 2018**. It is a revolving door, with the highest founding and closure rates. Size, shell companies and money do not explain it. Foreign-owned and mobile companies probably do. [Read part 2 of the series](/blog/zug-founds-the-most-keeps-the-fewest/).

### 2. Sectors: the hype sectors survive below average

Health survives best (63%), hospitality worst (38%). ICT (46%) and finance (47%) are below average. **The gap between sectors (25 points) is five times the gap between cantons.** Barriers to entry and stable demand protect survival; easy entry and funding cycles hurt it. [Read part 4](/blog/health-vs-hospitality-sectors/).

### 3. Money: venture capital does not explain survival

My hypothesis was that regions with little funding survive less. **The data rejected it.** Zug gets CHF 2,026 of venture capital per resident and survives worst; Lucerne gets almost nothing and survives as well as Zurich. Venture capital reaches about 350 companies a year, against more than 46,000 new ones. [Read part 6](/blog/money-does-not-explain-survival/).

### 4. Size and structure: do not start alone

One-person starts survive 49%, two to four employees 59%, ten or more 68%. GmbHs (56%) and AGs (55%) beat sole proprietorships (48%); foreign companies survive only 35%. **The big jump comes from adding one or two people.** [Read part 5](/blog/why-solo-founders-close-more-often/).

### 5. AI: who gains and who loses

In 2023, new companies in AI-exposed industries fell 1.3% while low-exposure industries grew 7.1%. Doing businesses (office support, publishing, IT services) shrank; advising businesses (consulting, advertising) grew, in sectors that already close most often. Its direct effect on five-year survival can only be measured around 2030. [Read part 7](/blog/ai-after-chatgpt-swiss-industries/) and [part 8](/blog/hidden-denominator-ai-success-rates/).

## The strategy view

I used standard consulting tools to move from findings to recommendations:

- **PESTEL:** for most Swiss small firms in 2026, the biggest threats are costs, demand and competition (US tariffs, the franc, energy, rents), not AI.
- **Five Forces:** the sectors with the lowest survival face the highest combined pressure. Health is the only sector where licences restrict entry, and it survives best.
- **Eight sector diagnoses:** for each sector I set out where companies go wrong and how they could move. The repeating mistakes are an irreversible bet before the concept is proven, no clear position, and one person carrying everything. [Read part 10](/blog/hospitality-retail-not-ai/).
- **Scenarios to 2030:** my base case is an AI shake-out, with cost turbulence as the wild card. [Read part 11](/blog/four-scenarios-to-2030/).

## What the data cannot tell us

1. **Patterns, not causes.** Small starts survive less, but hiring alone would not make a company survive.
2. **A two-year lag.** BFS survival data ends in 2023.
3. **No canton-by-sector view.** BFS publishes survival by canton or by sector, not both.
4. **Closure is not always failure.** Some companies are sold, merged or retired.
5. **Different sector definitions** between BFS and the venture capital report.

## What I learned

Writing hypotheses down before looking at the data kept me honest: my money hypothesis was wrong, and that became one of the most useful findings. I also learned to audit sources as carefully as numbers, because "record foundings", "record bankruptcies" and "60% AI adoption" each hide a definition that changes the story. [Read part 9](/blog/five-headlines-that-mislead/).

## The answer

New Swiss companies mostly fail because of **how they start and which market they enter**, not because of where they are or how much money they raise. The survivors start with a team, enter a market with a real barrier or stable demand, and keep their early bets small and reversible. [Read my recommendations](/blog/what-i-would-tell-founders/).
