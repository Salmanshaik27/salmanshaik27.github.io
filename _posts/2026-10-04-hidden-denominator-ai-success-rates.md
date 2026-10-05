---
layout: post
title: "The hidden denominator: why AI success rates mislead"
date: 2026-10-04 15:00:00 +0200
series: "Swiss startup survival, part 8 of 12"
summary: "Five well-known studies put AI success somewhere between 5% and 74%. The difference is not the technology. It is who was asked, what counted as success, over what time, and who published it."
tags: ["Research", "AI", "Due diligence"]
image: /assets/img/blog-hidden-denominator.png
tone: "#3B2F5C"
stat: "5–74%"
stat_label: "the range of AI success rates in five serious studies"
takeaways:
  - "Studies disagree because of sampling, definitions, time windows and who publishes them."
  - "In one McKinsey survey, 88 of 100 organisations use AI, 39 see any profit effect, 6 a large one."
  - "A 70% success rate is fine for many small experiments and dangerous for one big bet."
related:
  - /blog/ai-after-chatgpt-swiss-industries/
  - /blog/five-headlines-that-mislead/
  - /work/swiss-startup-survival/
---

When I researched AI for my study, I found headlines claiming that most companies succeed with AI and others claiming that almost all of them fail. Both cited serious studies. For a market researcher, that is the moment to stop reading conclusions and start reading methods.

| Study | Who was asked | Success means | Window | Result |
| --- | --- | --- | --- | --- |
| Google Cloud[^cg] | Leaders at firms already using AI | Any ROI | First year | 74% achieve ROI |
| IBM[^ibm] | 2,000 CEOs in 33 countries | The ROI they expected | Recent years | 25% delivered |
| McKinsey[^mck] | 1,993 participants | Any profit (EBIT) effect | Current | 39% see an effect |
| S&P Global[^sp] | Companies in 2025 | Projects kept or dropped | One year | 42% dropped most |
| MIT NANDA[^mit] | 300+ initiatives | Measurable P&L impact | Six months | 5% |

The table makes the problem visible. The studies disagree not because one is right and the others are wrong, but because they measure different things. A study that only asks companies whose AI is already running never counts the projects that died before launch, which is survivorship bias. "Any return" is far easier to reach than "the return we expected" or "a measurable effect on profit". A project can look like a failure at six months and a success at eighteen. Executives usually rate projects they sponsored themselves. And some publishers also sell AI products or AI transformation work, which does not make their data wrong, but a careful reader notes it.

## The hidden denominator

Even inside a single study, the headline depends on which line you choose to quote.

{% include diagrams/funnel.html %}

"88% use AI" and "6% get significant value" are both true at the same time.[^mck] Combining two samples shows how large the effect can be: if about half of AI proofs of concept are scrapped before production, as S&P Global found,[^sp] then a 74% success rate among deployed projects is closer to 40% of all projects started. Treat that as an illustration of the denominator problem rather than a statistic.

## Why even a 25 to 30% failure rate matters

Failures are informative. Klarna let an AI assistant handle around two thirds of its customer conversations, the work of about 700 agents, and in May 2025 its chief executive admitted that quality had suffered and began hiring people again.[^klarna] The AI worked for routine questions and failed on complex ones; the failures showed exactly where the boundary lay. Scale matters too. A large company can run forty pilots and accept that a third fail. A small Swiss firm usually gets one bet.

> A 70% success rate is fine for many small, reversible experiments, and dangerous for one large, irreversible bet. For small firms, the AI decision itself is a survival risk.
{: .key}

Since writing this, I ask four questions before using any statistic: who was counted, what counted as success, over what time, and who published it. [Part 9](/blog/five-headlines-that-mislead/) applies the same questions to five Swiss headlines, and [section 8 of the study](/work/swiss-startup-survival/#s8) has the full audit.

[^cg]: Google Cloud figures as compared in [CodeIT's methodology comparison](https://codeit.us/blog/ai-roi).
[^ibm]: IBM, [CEO Study 2025](https://newsroom.ibm.com/2025-05-06-ibm-study-ceos-double-down-on-ai-while-navigating-enterprise-hurdles).
[^mck]: McKinsey, State of AI 2025, [summary](https://aistatisticscenter.com/statistics/ai-roi-revenue-impact).
[^sp]: S&P Global 2025 figures, [compiled](https://www.pertamapartners.com/insights/ai-project-failure-statistics-2026).
[^mit]: MIT NANDA, The GenAI Divide 2025, [summary](https://letsdatascience.com/news/mit-report-documents-genai-pilot-roi-gap-e0924d7d).
[^klarna]: [Entrepreneur](https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396), Klarna reverses course on AI-only customer service.
