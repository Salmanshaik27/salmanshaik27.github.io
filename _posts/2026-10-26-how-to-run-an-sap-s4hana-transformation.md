---
layout: post
title: "SAP S/4HANA transformations: how to lead one that finishes"
date: 2026-10-26 11:00:00 +0100
series: "SAP S/4HANA transformation, part 3 of 3"
summary: "Putting it together: the consulting approach I would recommend. Departments that talk every morning, a first wave that is smaller but done fully, and SAP's own method run in parallel with change management and clear leadership decisions."
tags: ["Research", "Digital transformation", "SAP", "Consulting"]
image: /assets/img/blog-sap-part3.png
tone: "#3B2F5C"
stat: "78%"
stat_label: "of companies say too many topics were packed into the transformation"
takeaways:
  - "A 15-minute daily update between departments catches problems before they spread."
  - "Do the core first and fully; plan, minimise or park everything else."
  - "Run three workstreams through SAP Activate: the project, the people and the leadership decisions."
related:
  - /blog/why-sap-s4hana-projects-stall/
  - /blog/sap-s4hana-people-side/
  - /work/sap-s4hana-transformation/
---

In [part 1](/blog/why-sap-s4hana-projects-stall/) I showed why S/4HANA projects stall, and in [part 2](/blog/sap-s4hana-people-side/) what people and leaders need. This part is the consulting answer: how to organise the transformation so it does not become one of the 92% that miss their schedule.

## 1. Departments talk every morning

S/4HANA removes the buffer between departments, so a small problem in one team becomes another team's problem within hours. The cheapest protection is a short daily update.

<figure><img loading="lazy" src="/assets/img/sap-daily-update.png" alt="A daily cross-team update catches problems in a day, not at month-end"/><figcaption><span>Illustrative scenario at a fictional manufacturer, with and without a daily update.</span><span class="credit">Diagram by Salman Shaik</span></figcaption></figure>

- **Who:** one lead or key user from each department in the same process, chosen by their managers.
- **When:** every morning, 15 minutes, through testing and the first weeks after go-live.
- **Three questions:** what changed, what is blocked, and what could affect a neighbouring department.
- **Rule:** nobody is blamed for raising a problem, only for hiding one.

## 2. Smaller waves, done fully

Too much scope is the most-named barrier (78%).[^horv] Looking back, companies say they would plan more time, a higher budget and a tighter scope.[^sot] The fastest safe route is neither a rush nor endless perfection. It is a smaller first wave, done fully.

<figure><img loading="lazy" src="/assets/img/sap-priorities.png" alt="Prioritisation matrix: wave 1 do now, wave 2 plan, keep minimal, park or drop"/><figcaption><span>Sorting the scope by value and by whether the first go-live needs it.</span><span class="credit">Diagram by Salman Shaik</span></figcaption></figure>

Wave 1 gets the full effort: people, testing and training. Everything that can wait is written down and parked, not started halfway. Two things done fully beat five things done halfway, because a half-finished process still has to be supported and fixed after go-live.

## 3. One method, three workstreams

SAP's own method, SAP Activate, runs in five phases.[^activate] Most companies treat it as an IT plan. I would run two more workstreams through the same phases: the people steps and the leadership decisions.

<figure><img loading="lazy" src="/assets/img/sap-roadmap.png" alt="Every SAP Activate phase needs a matching people step and a leadership decision"/><figcaption><span>The recommended approach.</span><span class="credit">Diagram by Salman Shaik</span></figcaption></figure>

The frameworks behind it are the standard consulting toolkit: fit-to-standard workshops, a clean core, ADKAR for adoption, Kotter's steps for leadership momentum, a design authority that decides within days, and hypercare after go-live.

> Go-live is a business decision. Take it on readiness, such as trained users and clean data, not on a date fixed a year earlier.
{: .remember}

## The first 90 days

If I had to pick three moves for a company starting now: write a one-page business case with one accountable owner, cut the first wave to the core, and free up key users for weekly training. They cost little, they are leadership decisions, and they address the two biggest barriers.

The full report, with the data, all visuals, seven recommendations with KPIs and a PDF, is [here](/work/sap-s4hana-transformation/).

[^horv]: Horváth, [SAP S/4HANA transformations rarely go as planned](https://www.horvath-partners.com/en/press/detail/study-shows-sap-s-4hana-transformations-rarely-go-as-planned-60-percent-exceed-budget-and-schedule-two-thirds-dissatisfied-with-result-quality), April 2025.
[^sot]: Horváth hindsight figures (46% more time, 41% higher budget, 30% tighter scope), reported by [The Sign-Off Table](https://www.thesignofftable.com/blog/sap-ecc-end-of-maintenance-statistics).
[^activate]: SAP Learning, [Analyzing each phase of SAP Activate](https://learning.sap.com/courses/discovering-sap-activate-implementation-tools-and-methodology/analyzing-each-phase-of-sap-activate).
