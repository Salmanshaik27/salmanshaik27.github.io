---
layout: project
title: "SAP S/4HANA transformation: why only 8% finish on time, and how to lead one that works"
date: '2026-10-26'
kind: Independent consulting report
status: Completed
solo: true
fullreport: true
summary: "An independent consulting report. I analysed official SAP announcements, user-group surveys and a 200-company study in Power BI to find out why most S/4HANA transformations miss their plan, and built a consulting approach that puts leadership and people first."
cover: /assets/img/cover-sap-transformation.png
pdf: /assets/files/sap-s4hana-transformation-report.pdf
tags:
- Consulting
- Digital transformation
- Power BI
question: Why do so many SAP S/4HANA transformations stall, and how should a company lead one so that people adopt the new system?
data: SAP News Center, DSAG Investment Report 2026, ASUG research 2024 and 2025, Horváth study 2025 (200 companies), Gartner via The Register, Prosci research
tools: Power BI, Excel, issue tree, SAP Activate, ADKAR, Kotter, prioritisation matrix
time: One week
role: 'Individual project: framing, data collection, analysis, frameworks and writing'
powerbi: true
sources:
- name: 'SAP News Center: Aligned extended maintenance commitments'
  url: https://news.sap.com/2020/08/aligned-extended-maintenance-commitments/
- name: 'SAP News Center: Updates for SAP ERP, private edition, transition option (updated 13 October 2026)'
  url: https://news.sap.com/?p=233946
- name: 'SAP Learning: Analyzing each phase of SAP Activate'
  url: https://learning.sap.com/courses/discovering-sap-activate-implementation-tools-and-methodology/analyzing-each-phase-of-sap-activate
- name: 'DSAG: Investment Report 2026'
  url: https://impulsant.dsag.de/formate/pressemeldung/dsag-investment-report-2026-companies-are-investing-more-selectively-ai-is-becoming-established-cloud-computing-is-being-put-to-the-test/
- name: 'Horváth: SAP S/4HANA transformations rarely go as planned (2025)'
  url: https://www.horvath-partners.com/en/press/detail/study-shows-sap-s-4hana-transformations-rarely-go-as-planned-60-percent-exceed-budget-and-schedule-two-thirds-dissatisfied-with-result-quality
- name: 'ASUG: The State of SAP S/4HANA Adoption (2024)'
  url: https://www.asug.com/insights/the-state-of-sap-s-4hana-adoption-trends-successes-and-challenges
- name: 'The Register: Gartner on ECC customers (March 2025)'
  url: https://www.theregister.com/software/2025/03/20/legacy-sap-erp-customers-still-foot-dragging-move-to-s/4hana/1352379
- name: 'The Register: ASUG and Freeform Dynamics surveys (November 2025)'
  url: https://www.theregister.com/2025/11/05/two_years_out_from_support/
- name: 'The Register: Kingfisher stays on ECC (November 2025)'
  url: https://www.theregister.com/2025/11/19/kingfisher_sap/
- name: 'Born City: DSAG chairman on the consultant shortage (2024)'
  url: https://borncity.com/blog/?p=296125
- name: 'Prosci: The correlation between change management and project success'
  url: https://www.prosci.com/blog/the-correlation-between-change-management-and-project-success
- name: 'SAPinsider: S/4HANA Public Cloud at a midsize manufacturer'
  url: https://sapinsider.org/articles/successful-sap-s-4hana-public-cloud-implementation-for-a-manufacturing-company
- name: "TechRepublic: Haribo's S/4HANA migration (2019)"
  url: https://www.techrepublic.com/article/how-a-troubled-sap-s4hana-migration-caused-a-gummy-bear-shortage-in-germany/
- name: 'Consultancy.uk: Lidl cancels SAP introduction (2018)'
  url: https://www.consultancy.uk/news/18243/lidl-cancels-sap-introduction-having-sunk-500-million-into-it
- name: 'The Sign-Off Table: S/4HANA statistics incl. Horváth hindsight figures'
  url: https://www.thesignofftable.com/blog/sap-ecc-end-of-maintenance-statistics
related:
- /blog/why-sap-s4hana-projects-stall/
- /blog/sap-s4hana-people-side/
- /blog/how-to-run-an-sap-s4hana-transformation/
stat: 8%
stat_label: of completed S/4HANA transformations finished on schedule
tone: '#0B3B5C'
takeaways:
- Only 39% of about 35,000 ECC customers had licensed S/4HANA by the end of 2024, three years before support ends
- 65% of completed projects went over budget; five of the six most-named barriers are organisational
- 'A consulting approach in three parallel workstreams: project, people and leadership'
---

## Executive summary

**Only 8% of completed S/4HANA transformations finish on schedule, and the main causes are organisational.** SAP ends mainstream support for its old ERP system, ECC, at the end of 2027. About 35,000 companies run ECC, and only 39% had licensed the successor by the end of 2024.

**What goes wrong.** 65% of completed projects went over budget and 65% report serious quality gaps. The most-named barriers are too much scope (78%) and people planned too late (75%). Only one of the six main barriers, data migration, is technical.

**Why it matters beyond IT.** S/4HANA changes how finance closes the books, how sales books orders, how plants plan production and how warehouses ship. One wrong entry in one department now shows up in another department the same day.

**What works.** Change management is the strongest lever in the evidence: projects with excellent change management meet their objectives 88% of the time, against 13% with poor change management.

**The recommended approach** combines SAP's own method (SAP Activate) with structured change management, in five moves:

1. **Leadership decides first:** business case, scope and one accountable owner before the build.
2. **People are planned first:** key users freed up, weekly training, and a culture where asking for help is normal.
3. **Departments talk daily:** short cross-functional updates so problems surface before they spread.
4. **Scope is sequenced:** do the core first, park what can wait, and do each wave fully rather than everything halfway.
5. **Progress is measured:** adoption and process KPIs, not only go-live dates.

## 1. The problem: a fixed deadline and a slow market

**Every ECC customer has to move to S/4HANA or leave SAP, and most have not started.** SAP ends mainstream maintenance for ECC at the end of 2027 and extended maintenance at the end of 2030, at a fee two percentage points higher ([SAP](https://news.sap.com/2020/08/aligned-extended-maintenance-commitments/)). A paid transition option runs to 2033, and since 13 October 2026 possibly to 2035, but only for customers who move to SAP's private cloud edition by 2030 ([SAP](https://news.sap.com/?p=233946)).

<figure><img loading="lazy" src="/assets/img/sap-adoption.png" alt="Share of ECC customers with an S/4HANA licence: 34% in Q2 2023, 37% in Q2 2024, 39% in Q4 2024"/><figcaption><span>Share of ECC customers that have bought or subscribed to S/4HANA.</span><span class="credit">Built by Salman Shaik in Power BI · Data: Gartner via The Register</span></figcaption></figure>

| Measure | Value | Source |
| --- | --- | --- |
| ECC customers worldwide | about 35,000 | Gartner, end of 2024 ([The Register](https://www.theregister.com/software/2025/03/20/legacy-sap-erp-customers-still-foot-dragging-move-to-s/4hana/1352379)) |
| German-speaking ECC users planning to finish by 2027 | 37% | [DSAG Investment Report 2026](https://impulsant.dsag.de/formate/pressemeldung/dsag-investment-report-2026-companies-are-investing-more-selectively-ai-is-becoming-established-cloud-computing-is-being-put-to-the-test/), 198 companies |
| North American users live or actively switching | about 60% | ASUG, 173 members ([The Register](https://www.theregister.com/2025/11/05/two_years_out_from_support/)) |

The licensed share grew by about three points a year. A licence is a contract, not a running system, so the share of finished migrations is lower still. Around 20,000 companies will compete for the same experienced consultants in the same few years. The DSAG chairman already said in 2024 that there were not enough consultants and integrators, booked months or years ahead ([Born City](https://borncity.com/blog/?p=296125)).

> Companies must run one of the largest change programmes of the decade under deadline pressure, with scarce expert capacity, and most completed projects already miss their plan.
{: .key}

## 2. Research approach

**This is a desk study of official and primary sources, analysed in Excel and Power BI and combined with established consulting frameworks.**

**Sub-questions**

1. Which departments does S/4HANA change, and how does that differ by sector?
2. How far along is the market, and how do completed projects end?
3. What are the main barriers, and which are organisational rather than technical?
4. What do people need to adopt the system, and what is leadership's role?
5. Which consulting approach turns these findings into a plan?

| Source | Type | What it gives | Sample |
| --- | --- | --- | --- |
| [SAP News Center](https://news.sap.com/?p=233946) | Vendor, official | Maintenance deadlines and the transition option | |
| [DSAG Investment Report 2026](https://impulsant.dsag.de/formate/pressemeldung/dsag-investment-report-2026-companies-are-investing-more-selectively-ai-is-becoming-established-cloud-computing-is-being-put-to-the-test/) | User group (Germany, Austria, Switzerland) | Adoption and migration plans | 198 companies |
| [ASUG research](https://www.asug.com/insights/the-state-of-sap-s-4hana-adoption-trends-successes-and-challenges) | User group (North America) | Status, cost overruns, barriers | 208 and 173 members |
| [Horváth study](https://www.horvath-partners.com/en/press/detail/study-shows-sap-s-4hana-transformations-rarely-go-as-planned-60-percent-exceed-budget-and-schedule-two-thirds-dissatisfied-with-result-quality) | Consultancy survey | Budget, schedule and quality outcomes | 200 companies, >€200m sales |
| Gartner via [The Register](https://www.theregister.com/software/2025/03/20/legacy-sap-erp-customers-still-foot-dragging-move-to-s/4hana/1352379) | Analyst, reported by media | Installed base and licence share | about 35,000 customers |
| [Prosci](https://www.prosci.com/blog/the-correlation-between-change-management-and-project-success) | Change management research | Effect of change management on success | 2,600+ practitioners |
| [SAP Activate](https://learning.sap.com/courses/discovering-sap-activate-implementation-tools-and-methodology/analyzing-each-phase-of-sap-activate) | Vendor method | Implementation phases and fit-to-standard | |

**Analysis.** I put every number into one dataset with its source, then grouped each barrier into one of five dimensions: scope, leadership, process, data and people. The Power BI dashboard shows the adoption trend, the project outcomes and the barriers by dimension. The example company in section 4 is fictional; it shows how the published findings play out inside one organisation.

## 3. Which departments S/4HANA changes, by sector

**Finance changes in every sector; the other heavy changes follow where each sector makes its money.** S/4HANA puts finance and operations on one shared data model, so a booking in sales, production or the warehouse lands in finance immediately. That removes reconciliation work, but it also means a mistake in one department is visible everywhere at once.

| Sector | Most affected departments | What changes for them | Published example |
| --- | --- | --- | --- |
| Manufacturing | Production planning, procurement, quality, maintenance, finance | Material planning, production orders, quality checks and costing run on one system | Midsize metal products maker on S/4HANA Public Cloud ([SAPinsider](https://sapinsider.org/articles/successful-sap-s-4hana-public-cloud-implementation-for-a-manufacturing-company)) |
| Consumer goods | Supply chain, plants, sales, finance | Many plants and countries moved onto one template | Haribo: 16 plants in 10 countries; shipments slipped in 2018 ([TechRepublic](https://www.techrepublic.com/article/how-a-troubled-sap-s4hana-migration-caused-a-gummy-bear-shortage-in-germany/)) |
| Retail | Merchandising and pricing, inventory, stores, supply chain, finance | Stock valuation, replenishment and pricing follow SAP's standard logic | Lidl cancelled its SAP retail project in 2018 after keeping its own valuation method ([Consultancy.uk](https://www.consultancy.uk/news/18243/lidl-cancels-sap-introduction-having-sunk-500-million-into-it)) |
| Pharma and life sciences | Quality, batch management, supply chain, regulatory, finance | Batch tracking and validated processes must be re-tested and documented | |
| Utilities and energy | Billing, customer service, asset maintenance, finance | Meter-to-cash and maintenance of networks and plants | |
| Banks and insurers | Finance, controlling, regulatory reporting, procurement, HR | Group reporting and the monthly close; core banking usually runs on other systems | |

The departments in the middle column are where training, key users and testing time must go. In manufacturing that is the plant floor, not only the finance office.

## 4. Example company: one order, five departments

**At a manufacturer, one customer order passes through five departments, and on S/4HANA each of them writes to the same record.** To make the findings concrete, take Alpina Components AG, a fictional Swiss industrial supplier: CHF 800 million in revenue, 2,400 employees, three plants, still on ECC.

<figure><img loading="lazy" src="/assets/img/sap-order-flow.png" alt="One order crosses five departments: sales, planning, production, warehouse and finance, and any mistake reaches finance"/><figcaption><span>Order-to-cash at a fictional manufacturer.</span><span class="credit">Diagram by Salman Shaik</span></figcaption></figure>

On the old system, each department kept its own data and finance reconciled the differences at month-end. On S/4HANA there is nothing in between: a wrong price in sales or a goods issue posted late in the warehouse shows up in finance the same day. That is the benefit of the new system, and it is also why departments that never had to coordinate now must.

- **Sales and finance** agree on one set of customer and price data, owned by named people.
- **Planning and production** work from the same stock and capacity figures, so a late booking on the shop floor changes the plan for everyone.
- **The warehouse** becomes part of the financial close: shipping late now delays invoicing.
- **Every department** needs key users who understand both their own steps and the step after theirs.

## 5. Why projects stall

**Most S/4HANA projects miss their plan, and the reasons are mostly organisational.** Of the companies Horváth surveyed, 65% went over budget, 65% report strong or very strong quality gaps, and only 8% of completed projects finished on schedule. On average projects ran 30% longer than planned. In North America, 49% of ASUG members already live said costs exceeded the original budget, with consulting fees as the biggest surprise.

<figure><img loading="lazy" src="/assets/img/sap-outcomes.png" alt="Out of 100 completed transformations: 65 over budget, 65 with serious quality gaps, 8 on schedule"/><figcaption><span>Out of every 100 completed S/4HANA transformations. Each bar is a separate question.</span><span class="credit">Built by Salman Shaik in Power BI · Data: Horváth 2025</span></figcaption></figure>

<figure><img loading="lazy" src="/assets/img/sap-barriers-organisational.png" alt="Five of six barriers are organisational; only data migration is technical"/><figcaption><span>Share of companies naming each barrier. Surveys differ, so values are not additive.</span><span class="credit">Chart by Salman Shaik · Data: Horváth 2025, ASUG 2024 and 2025</span></figcaption></figure>

The two most-named barriers, too much scope and people planned too late, are decisions taken before the build starts. Process change and customisation are two sides of one choice: change the way you work to fit the standard, or bend the software to fit the old way. Only data migration is a technical problem, and even that is mostly about planning enough time and people for it.

**The published cases show the same pattern.** Lidl kept its own inventory valuation method, customised SAP around it and cancelled after seven years. Haribo moved 16 plants in 10 countries from old regional systems, and supermarket shipments slipped. Kingfisher, owner of B&Q, asked SAP to prove the business value of upgrading, was not convinced, and stayed on ECC with third-party support ([The Register](https://www.theregister.com/2025/11/19/kingfisher_sap/)).

## 6. People: adoption, training and wellbeing

**A system only creates value when people use it the new way, and change management is the strongest lever for that.** Prosci's research with more than 2,600 change practitioners found that projects with excellent change management met or exceeded their objectives 88% of the time, against 13% with poor change management, about seven times more often ([Prosci](https://www.prosci.com/blog/the-correlation-between-change-management-and-project-success)).

<figure><img loading="lazy" src="/assets/img/sap-adkar.png" alt="People adopt a new system in five steps: awareness, desire, knowledge, ability, reinforcement"/><figcaption><span>Prosci's ADKAR model applied to S/4HANA.</span><span class="credit">Diagram by Salman Shaik</span></figcaption></figure>

The steps build on each other. Training (step 3) is wasted on people who do not understand why the change is happening (step 1). Practice (step 4) fails when people are afraid to admit they are stuck. That is why training and a safe culture belong together.

**Why it is not a choice any more.** For employees, S/4HANA is not an optional tool. Once ECC is switched off, the new system is the only way to book an order, close the month or ship a pallet. People who are not trained in time do not simply work more slowly; they block the next department.

**A training rhythm that works (proposal for Alpina)**

| Who | Format | Rhythm |
| --- | --- | --- |
| All affected staff | Short "why and what changes for me" session | Once at the start, then at every wave |
| End users | Hands-on training in their own process, in a test system | Weekly from 8 weeks before go-live |
| Key users (one per team) | Deep training, then they coach their colleagues | Weekly, plus open question time |
| Managers | How to lead the change and support their teams | Monthly |
| Everyone after go-live | Floor support and a daily question slot | Daily for the first 4 to 6 weeks |

**Wellbeing is part of the plan, not an extra.** The months around go-live mean double work: the old job plus learning the new system. Without relief, motivation drops and mistakes rise, which is exactly when a shared data model is least forgiving.

## 7. Leadership: decide, explain, support

**Leadership owns the three decisions that cause most failures: why, how much, and who.** In the Horváth study, lack of decision-making and repeated revision loops are among the main reasons for delay, and 37% of ASUG members name organisational inertia as a barrier.

1. **Decide the why.** A business case in plain words: what gets better for customers, staff and the business. 95% of legacy users say building this case is hard, which is exactly why it cannot be skipped.
2. **Explain the urgency honestly.** Staying on ECC is no longer a free choice: support ends in 2027, and every year of delay costs extra fees and scarcer consultants.
3. **Free people up.** Key users cannot learn a new system and run the old business at full load. Leaders take work off their desks, or the project waits for them.
4. **Support without judgement.** Weekly training only works if people feel safe to say "I don't understand this yet". A manager who mocks a question teaches the whole team to stay quiet. Silent people build workarounds, workarounds become silos, and silos become the bottlenecks that stall the go-live. Harvard professor Amy Edmondson calls the opposite *psychological safety*.
5. **Look after wellbeing.** Realistic workloads, visible thanks, and a clear end date for the extra load.

**One owner, one design authority.** A transformation needs one accountable executive and a small design authority that decides process questions within days. Every week a question stays open, the build either stops or guesses.

## 8. Cross-functional working: daily updates

**When departments share one data model, they must also share one daily picture of what is going wrong.**

<figure><img loading="lazy" src="/assets/img/sap-daily-update.png" alt="A daily cross-team update catches problems in a day, not at month-end"/><figcaption><span>Illustrative scenario at Alpina, with and without a daily update.</span><span class="credit">Diagram by Salman Shaik</span></figcaption></figure>

- **Who:** one team lead or key user from each department in the same process, chosen by managers at the start of the adoption phase.
- **When:** every morning, 15 minutes, during the build, testing and the first weeks after go-live.
- **Three questions:** what changed since yesterday, what is blocked, and what could affect a neighbouring department.
- **Rule:** report a problem early, even if it is small or your own. Nobody is blamed for raising an issue; people are only blamed for hiding one.
- **Output:** a shared issue list with an owner and a date for each item, visible to all departments.

## 9. Speed: slow and right, or fast and broken?

**The fastest safe route is neither a big rush nor endless perfection: it is a smaller first wave, done fully.** Packing too much into the transformation is the most-named barrier (78%). Looking back, companies say they would plan more time (46%), a higher budget (41%) and a tighter scope (30%) (Horváth, reported by [The Sign-Off Table](https://www.thesignofftable.com/blog/sap-ecc-end-of-maintenance-statistics)).

**Big bang or waves.** A big bang moves everything at once: one cutover, but every risk lands on the same weekend. A phased rollout moves one process, plant or country per wave: more cutovers, but each one is smaller and the team learns from the last.

<figure><img loading="lazy" src="/assets/img/sap-priorities.png" alt="Prioritisation matrix: wave 1 do now, wave 2 plan, keep minimal, park or drop"/><figcaption><span>Sorting the scope by value and by whether the first go-live needs it.</span><span class="credit">Diagram by Salman Shaik</span></figcaption></figure>

Wave 1 gets the full effort: people, testing and training. Items that can wait are written down and parked, not started halfway. Doing two things fully beats doing five things halfway, because a half-finished process still has to be supported, trained and fixed after go-live.

## 10. The consulting approach

**The approach runs three workstreams in parallel through SAP's own five phases: the project, the people and the leadership decisions.**

| Framework | What it is | What it solves |
| --- | --- | --- |
| SAP Activate | SAP's implementation method: Prepare, Explore, Realize, Deploy, Run | A shared plan and vocabulary |
| Fit-to-standard | Workshops that show the standard process first; every gap must prove its value | Customisation, process change |
| Clean core | Keep the SAP core standard; put extensions outside it | Future upgrades, cost of ownership |
| ADKAR (Prosci) | Five steps a person goes through to adopt a change | Adoption, training, resistance |
| Kotter's 8 steps | Urgency, coalition, vision, quick wins, anchoring the change | Leadership and momentum |
| Design authority and RACI | One small group that decides; clear owners per process | Slow decisions, unclear ownership |
| Hypercare | Intensive support in the first weeks after go-live | Early errors, user confidence |

<figure><img loading="lazy" src="/assets/img/sap-roadmap.png" alt="Every SAP Activate phase needs a matching people step and a leadership decision"/><figcaption><span>The recommended approach: SAP Activate phases with three parallel workstreams.</span><span class="credit">Diagram by Salman Shaik</span></figcaption></figure>

## 11. Recommendations and KPIs

| # | Recommendation | Barrier it removes | KPI to track |
| --- | --- | --- | --- |
| 1 | Write a one-page business case and name one accountable executive | No business case, slow decisions | Open design decisions older than 10 days |
| 2 | Migrate the core first; park everything that can wait | Too much scope (78%) | Share of scope items delivered per wave |
| 3 | Adopt SAP standard processes; justify every customisation by value | Process change (49%), customisation (44%) | Number of approved customisations |
| 4 | Treat data migration and testing as a workstream from day one | Data migration (46%) | Data error rate per trial migration |
| 5 | Free key users and run weekly training with safe question time | People planned late (75%) | Training attendance, key-user confidence |
| 6 | Hold daily 15-minute cross-functional updates | Silos, late surprises | Issues raised before they hit another department |
| 7 | Measure adoption after go-live, not just the date | Inertia (37%), quality gaps (65%) | Share of transactions in the standard process |

**Priority for the first 90 days:** recommendations 1, 2 and 5. They cost little, they are leadership decisions, and they address the two most-named barriers.

> S/4HANA projects rarely fail in the system. They fail earlier, in decisions about scope, process and people.
{: .remember}

**Limits.** This is a desk study. The surveys differ in region, sample and definitions, so their percentages are never added together. Horváth is a consultancy and DSAG and ASUG are user groups, so each number names its publisher. Gartner's report is paywalled; its figures come from The Register. Published cases lean towards dramatic failures. The example company is fictional. Lidl's project ran on SAP's older retail system, not S/4HANA. The training rhythm and KPIs are my recommendations, not survey findings.
