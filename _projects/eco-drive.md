---
title: "Eco Drive: gamified carbon footprint tracking"
date: "2025-05-06"
kind: "B.Tech capstone project"
status: "Completed"
summary: "A mobile app that detects how people travel, calculates the carbon emissions of every trip, and uses points, badges, leaderboards and community challenges to nudge them towards greener commuting."
cover: /assets/img/cover-eco-drive.png
tags: ["Technology", "Sustainability", "Product design"]
question: "How can technology help people close the gap between climate awareness and their daily travel habits?"
data: "Trip data from smartphone sensors, emission factors per travel mode"
tools: "React Native, Firebase, GPS and motion sensors, Android activity recognition, OAuth 2.0 and JWT"
time: "Final-year capstone, Presidency University, 2025"
role: "Team member, team of five"
findings:
  - "Published in the journal IJSREM."
  - "Supports UN Sustainable Development Goals 11 (sustainable cities) and 13 (climate action)."
steps:
  - title: "Automatic trip tracking"
    text: "GPS, accelerometer data and Android's activity recognition detect whether a trip was by car, bus, bike or on foot, with minimal input from the user."
  - title: "Emissions per trip"
    text: "Emission factors turn mode, distance and duration into a carbon footprint, compared with regional and global averages."
  - title: "Gamification"
    text: "Points and badges for greener choices, and a leaderboard to make sustainable travel competitive."
  - title: "Community"
    text: "Users form groups and work together to reduce their combined emissions."
  - title: "Privacy and security"
    text: "OAuth 2.0, SSL and JWT protect personal data."
---

## The problem

Transport is one of the largest sources of carbon emissions, and most people underestimate the impact of their own daily travel. Existing carbon calculators ask people to enter trips by hand, so they stop using them after a few days.

## How Eco Drive works

1. **It detects trips automatically.** GPS, the accelerometer and Android's activity recognition tell whether a trip was made by car, bus, bike or on foot, so users barely need to type anything.
2. **It turns each trip into emissions.** Emission factors convert mode, distance and duration into a carbon footprint, and the app compares it with regional and global averages.
3. **It rewards greener choices.** Points and badges for walking, cycling or public transport, and leaderboards that make sustainable travel competitive.
4. **It makes change social.** Users form community groups and work together to reduce their combined emissions.
5. **It protects personal data.** Location data is sensitive, so sign-in uses OAuth 2.0 with Firebase Authentication, and data travels over SSL with JWT-based sessions.

## Why this matters beyond the app

Eco Drive is a small version of a big business question: **how do you change behaviour, not just inform people?** The answer we designed around (make the better choice visible, rewarding and social) is the same one I now look for in consulting problems, such as getting staff to actually use a new system.

## What I learned

Information alone rarely changes behaviour. Making the greener choice **visible, rewarding and social** works better, which is a lesson I now apply to business problems too.
