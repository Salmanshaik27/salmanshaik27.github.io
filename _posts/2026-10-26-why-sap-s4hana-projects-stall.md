---
layout: post
title: "SAP S/4HANA transformations: why only 8% finish on time"
date: 2026-10-26 09:00:00 +0100
series: "SAP S/4HANA transformation, part 1 of 3"
summary: "About 35,000 companies must leave SAP's old ERP system, and most completed migrations miss their plan. I analysed the official numbers in Power BI. The surprise: five of the six biggest barriers have nothing to do with technology."
tags: ["Research", "Digital transformation", "SAP", "Power BI"]
image: /assets/img/blog-sap-part1.png
tone: "#0B3B5C"
stat: "8%"
stat_label: "of completed S/4HANA transformations finished on schedule"
takeaways:
  - "Only 39% of about 35,000 ECC customers had licensed S/4HANA by the end of 2024; support ends in 2027."
  - "65% of completed projects went over budget and 65% report serious quality gaps."
  - "Too much scope (78%) and people planned too late (75%) top the barriers. Only data migration is technical."
related:
  - /blog/sap-s4hana-people-side/
  - /blog/how-to-run-an-sap-s4hana-transformation/
  - /work/sap-s4hana-transformation/
---

SAP ECC runs the orders, stock, production and finances of around 35,000 companies worldwide. SAP ends mainstream support for it at the end of 2027 and extended support at the end of 2030.[^sap1] A paid option stretches that to 2033, and since October 2026 possibly to 2035, but only for customers who move to SAP's private cloud by 2030.[^sap2] Every ECC customer has to move to S/4HANA, its successor, or leave SAP.

So how is it going? I collected the numbers from SAP, its two big user groups and a 200-company study, and analysed them in Power BI.

## The market is moving slowly

<figure><img loading="lazy" src="/assets/img/sap-adoption.png" alt="Share of ECC customers with an S/4HANA licence: 34% in Q2 2023, 37% in Q2 2024, 39% in Q4 2024"/><figcaption><span>Share of ECC customers that have bought or subscribed to S/4HANA.</span><span class="credit">Built by Salman Shaik in Power BI · Data: Gartner via The Register</span></figcaption></figure>

The licensed share rose from 34% to 39% in eighteen months.[^g] Among German-speaking companies still investing in ECC, only 37% plan to finish by 2027.[^dsag] And a licence is only a contract, so the share of companies actually live is lower still.

## Most completed projects miss the plan

<figure><img loading="lazy" src="/assets/img/sap-outcomes.png" alt="Out of 100 completed transformations: 65 over budget, 65 with serious quality gaps, 8 on schedule"/><figcaption><span>Out of every 100 completed transformations. Each bar is a separate question.</span><span class="credit">Built by Salman Shaik in Power BI · Data: Horváth 2025</span></figcaption></figure>

In a Horváth survey of 200 companies, 65% went over budget, 65% report serious quality gaps, and only 8% of completed projects finished on schedule. On average they ran 30% longer than planned.[^horv]

## The barriers are mostly not technical

The two most-named problems are packing too much into the project (78%) and planning people too late (75%).[^horv] Next come business process change (49%) and customisations (44%).[^asug] Only data migration (46%) is a technical problem. The rest are decisions about scope, people, process and leadership.

<figure><img loading="lazy" src="/assets/img/sap-barriers.png" alt="Why S/4HANA projects stall: share of companies naming each barrier"/><figcaption><span>Share of companies naming each barrier, coloured by dimension.</span><span class="credit">Built by Salman Shaik in Power BI · Data: Horváth 2025, ASUG 2024 and 2025</span></figcaption></figure>

> Only one of the six biggest barriers is about technology. The others are decided in the steering committee, long before the system goes live.
{: .key}

## Why it hits every department

S/4HANA puts finance and operations on one shared record. That is its biggest benefit, and also its biggest risk.

<figure><img loading="lazy" src="/assets/img/sap-order-flow.png" alt="One order crosses five departments: sales, planning, production, warehouse and finance"/><figcaption><span>Order-to-cash at a fictional manufacturer.</span><span class="credit">Diagram by Salman Shaik</span></figcaption></figure>

On the old system, each department kept its own data and finance reconciled the differences at month-end. On S/4HANA there is nothing in between. A wrong price in sales or a late booking in the warehouse shows up in finance the same day. Departments that never had to coordinate now must.

The public failures follow the same pattern. Lidl kept its own inventory valuation method, customised SAP around it and cancelled after seven years.[^lidl] Haribo moved 16 plants in 10 countries from old regional systems, and supermarket shipments slipped.[^haribo]

## What comes next

If the problem is organisational, so is the fix. In [part 2](/blog/sap-s4hana-people-side/) I look at the people side: training, psychological safety and what leaders must do. In [part 3](/blog/how-to-run-an-sap-s4hana-transformation/) I put it together into a consulting approach. The full report, with all visuals and a PDF, is [here](/work/sap-s4hana-transformation/).

[^sap1]: SAP News Center, [Aligned extended maintenance commitments](https://news.sap.com/2020/08/aligned-extended-maintenance-commitments/).
[^sap2]: SAP News Center, [Updates for SAP ERP, private edition, transition option](https://news.sap.com/?p=233946), updated 13 October 2026.
[^g]: The Register, [Legacy SAP ERP customers still foot-dragging](https://www.theregister.com/software/2025/03/20/legacy-sap-erp-customers-still-foot-dragging-move-to-s/4hana/1352379), March 2025, reporting Gartner data.
[^dsag]: DSAG, [Investment Report 2026](https://impulsant.dsag.de/formate/pressemeldung/dsag-investment-report-2026-companies-are-investing-more-selectively-ai-is-becoming-established-cloud-computing-is-being-put-to-the-test/), 198 companies.
[^horv]: Horváth, [SAP S/4HANA transformations rarely go as planned](https://www.horvath-partners.com/en/press/detail/study-shows-sap-s-4hana-transformations-rarely-go-as-planned-60-percent-exceed-budget-and-schedule-two-thirds-dissatisfied-with-result-quality), April 2025, 200 companies.
[^asug]: ASUG surveys: [2024](https://www.asug.com/insights/the-state-of-sap-s-4hana-adoption-trends-successes-and-challenges) (208 members) and [2025 via The Register](https://www.theregister.com/2025/11/05/two_years_out_from_support/) (173 members).
[^lidl]: Consultancy.uk, [Lidl cancels SAP introduction](https://www.consultancy.uk/news/18243/lidl-cancels-sap-introduction-having-sunk-500-million-into-it), 2018. Lidl ran SAP's older retail system, not S/4HANA.
[^haribo]: TechRepublic, [Haribo's troubled S/4HANA migration](https://www.techrepublic.com/article/how-a-troubled-sap-s4hana-migration-caused-a-gummy-bear-shortage-in-germany/), 2019.
