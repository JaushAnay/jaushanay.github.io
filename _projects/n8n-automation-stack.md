---
title: Self-hosted n8n automation stack
summary: A self-hosted n8n instance on Render, connected to Google Sheets through my own Google Cloud OAuth client.
status: completed
role: Built during The AI Colony's 8-week AI Automation course
tracks: [ai-automation, data-engineering]
tools: [n8n, Render, Google Sheets, Google Cloud OAuth, Supabase]
cover: /assets/img/projects/n8n-automation-stack.svg
cover_alt: "n8n self-hosted on Render, connected to Google Sheets through a Google Cloud OAuth client"
featured: true
order: 3
---

## What I built

Rather than using a hosted automation service, I deployed my own n8n instance on Render. To let workflows read and write Google Sheets, I set up my own Google Cloud OAuth client instead of relying on a shared connector, which meant configuring credentials, consent and permissions myself.

The course also introduced Supabase as a database for automations.

## Why it matters

Self-hosting means understanding the whole chain: where the automation runs, how it authenticates, and what happens when a step fails. That is the foundation for the work I want to do next: automations that check data quality and route problems to a person for review.

<!-- Add: one workflow you built (what triggers it, what it does, what it outputs), a screenshot of the workflow canvas with any credentials hidden, and what you would build next. -->

## Status

Course completed. Next, I plan to build automations that apply data-validation checks to incoming records.
