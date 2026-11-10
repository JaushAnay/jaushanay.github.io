---
title: Football DQ Lab
summary: A SQL data-quality system that ingests a deliberately imperfect football database, then detects, classifies, tracks and resolves its errors.
status: in-progress
role: Solo project
tracks: [data-quality, data-engineering]
tools: [PostgreSQL, SQL]
data_note: Synthetic data, designed with deliberate errors
repo: ""
cover: /assets/img/projects/football-dq-lab.svg
cover_alt: "Football DQ Lab pipeline: ingest, validate, detect, classify, track, resolve and report"
featured: false
order: 5
---

## Why I'm building it

At work I find and fix data problems one record at a time. Football DQ Lab is my attempt to turn that judgement into a system: rules that find problems automatically, classify them, and track each one until it is resolved.

## The data

Real football data comes with licensing restrictions, so I designed my own. The database uses fictional clubs and people placed in real countries, with around 22,000 players and different coverage tiers by competition, mirroring how real providers have rich data for top leagues and sparse data for lower ones. It includes Castlebridge Albion FC, the fictional club from my [club analytics project](/projects/castlebridge-albion-analytics/), as an English top-flight side.

The data is imperfect on purpose. Errors are planted so the system has something real to catch.

## How it works

The pipeline follows the life of a data-quality issue:

1. **Ingest** raw records into PostgreSQL.
2. **Validate** them against rules.
3. **Detect** records that break a rule.
4. **Classify** each issue by type and severity.
5. **Track** issues over time.
6. **Resolve** them, recording what changed.
7. **Report** on data quality across the database.

<!-- As the project progresses, add: the types of rules you wrote, an example query, the number of issues found by type, and a screenshot of your issue report. -->

## Status

In progress. I'll document each stage here as it is built, with the SQL on GitHub.
