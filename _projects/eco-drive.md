---
layout: project
title: 'Eco Drive: gamified carbon footprint tracking'
date: '2025-05-06'
kind: B.Tech capstone project
status: Completed
summary: A mobile app that detects how people travel, calculates the carbon emissions of every trip, and uses points, badges, leaderboards and community challenges to nudge them towards greener commuting.
cover: /assets/img/cover-eco-drive.png
tags:
- Technology
- Sustainability
- Product design
question: How can technology help people close the gap between climate awareness and their daily travel habits?
data: Trip data from smartphone sensors, emission factors per travel mode
tools: React Native, Firebase, GPS and motion sensors, Android activity recognition, OAuth 2.0 and JWT
time: Final-year capstone, Presidency University, 2025
role: Team member, team of five
findings:
- Published in the journal IJSREM.
- Supports UN Sustainable Development Goals 11 (sustainable cities) and 13 (climate action).
steps:
- title: Automatic trip tracking
  text: GPS, accelerometer data and Android's activity recognition detect whether a trip was by car, bus, bike or on foot, with minimal input from the user.
- title: Emissions per trip
  text: Emission factors turn mode, distance and duration into a carbon footprint, compared with regional and global averages.
- title: Gamification
  text: Points and badges for greener choices, and a leaderboard to make sustainable travel competitive.
- title: Community
  text: Users form groups and work together to reduce their combined emissions.
- title: Privacy and security
  text: OAuth 2.0, SSL and JWT protect personal data.
sources:
- name: 'United Nations: Sustainable Development Goals 11 (sustainable cities) and 13 (climate action)'
  url: https://sdgs.un.org/goals
related:
- /work/hslu-dining-research/
- /work/smart-waste-management/
- /work/change-management-digital-transformation/
stat: 5 steps
stat_label: from phone sensors to greener commuting, published in IJSREM
tone: '#1E5C4A'
takeaways:
- A gamified app that tracks the carbon footprint of daily travel
- Detects travel mode automatically and rewards greener choices
- Built with React Native and Firebase, published in IJSREM
---
## The problem

Most people underestimate the climate impact of their daily travel, and the tools meant to help them ask too much: existing carbon calculators expect users to enter every trip by hand, so people stop after a few days. We wanted to know whether technology could close the gap between **knowing** and **doing**.

## How Eco Drive works

{% include diagrams/ecodrive-flow.html %}

1. **It detects trips automatically.** GPS, the accelerometer and Android's activity recognition tell whether a trip was made by car, bus, bike or on foot, so users barely need to type anything.
2. **It turns each trip into emissions.** Emission factors convert mode, distance and duration into a carbon footprint, compared with regional and global averages.
3. **It rewards greener choices.** Points and badges for walking, cycling or public transport, and leaderboards that make sustainable travel competitive.
4. **It makes change social.** Users form community groups and work towards shared reduction goals.
5. **It protects personal data.** Location data is sensitive, so sign-in uses OAuth 2.0 with Firebase Authentication, and data travels over SSL with JWT-based sessions.

> The design principle: **information alone rarely changes behaviour**. Making the better choice visible, rewarding and social works better.
{: .key}

## Why this matters beyond the app

Eco Drive is a small version of a big business question: how do you change behaviour, not just inform people? It is the same problem I later met in two very different settings: students who value sustainable food but buy on price ([dining research](/work/hslu-dining-research/)), and employees who keep old manual steps alongside a new system ([change management](/work/change-management-digital-transformation/)). In all three, the answer starts with making the desired behaviour **easier and more rewarding** than the old one.

## What I learned

How to turn a behaviour problem into product features, how to design around privacy from the start, and how to write research for publication. The project was published in the journal IJSREM and supports UN Sustainable Development Goals 11 (sustainable cities) and 13 (climate action).
