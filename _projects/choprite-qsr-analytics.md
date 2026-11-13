---
title: ChopRite Foods QSR analytics
summary: An end-to-end Excel and Power BI analysis of a fictional 13-branch Nigerian fast-food chain, built from messy exports of five systems that disagree.
status: in-progress
role: Solo project
tracks: [analytics, data-quality]
tools: [Excel, Power Query, Power Pivot, DAX, Power BI]
skills: [Multi-source data cleaning, Data quality logging, Star schema modelling, DAX measures, Branch profitability analysis, Promotion ROI analysis, Dashboard design, Executive storytelling]
data_note: Synthetic data for a fictional company
dashboard: ""
cover: /assets/img/projects/choprite-qsr-analytics.svg
cover_alt: "ChopRite data architecture: five source systems flow into raw, cleaned and analytical layers, then into Excel and Power BI reports"
featured: false
order: 3
---

## The business

ChopRite Foods is a fictional quick-service restaurant chain that grew from one Lagos store in 2018 to thirteen branches across Lagos, Abuja, Port Harcourt, Ibadan, Ogun, Enugu and Benin City. The data covers January 2022 to August 2026: about 224,500 orders, plus deliveries, stock counts, purchases, waste, attendance, feedback and the finance ledger.

The trends sit against real Nigerian events, including the 2022 ASUU strike, the 2023 naira redesign cash crunch, fuel-subsidy removal and the 2024 minimum wage change, so the story behaves like a real business under pressure.

## The questions

The scenario casts me as the company's first data analyst, preparing for a board meeting. The board wants to know:

- Which branches really make money once rent, labour, waste and delivery commissions are included?
- Did eight menu price increases protect margin, or drive customers away?
- Are promotions profitable, or does Marketing over-report them?
- Where is food being lost to waste, shrinkage and supplier rejections?
- Is each branch staffed for its demand, and where should branch 14 go?

## The data problems

The data comes from five systems that don't agree: two point-of-sale systems with different layouts, an HR system, a finance ledger and a CRM with a stale snapshot. Across them sit about 180 types of data-quality issue, including:

- Report title and subtotal rows inside exports, and column names that change between years
- Prices stored as text with ₦ symbols, mixed date formats, and quantities like "2 pcs"
- The same customer registered twice, re-used order IDs, and a week exported by both POS systems
- Orphan records pointing to a test branch, unknown products and departed staff
- Business-rule breaks: net sales that don't equal gross minus discount, ratings of 10, shifts longer than 24 hours

## Approach

1. **Three data layers.** Raw files are never edited. Power Query builds a cleaned layer, then an analytical star schema, so every change is traceable.
2. **Flag, don't delete.** Questionable rows are flagged with a reason rather than removed, apart from exact duplicates and blank rows, and every rule goes into a data-quality log.
3. **Reconcile.** Cleaned totals are checked against control totals only after my own pass.
4. **Model and measure.** A Power Pivot and Power BI star schema with a proper date table, and DAX measures for sales, profitability, customers, operations, workforce, marketing and data quality.
5. **Tell the story.** A nine-page Power BI report and a short executive summary with clear recommendations.

<!-- As you build: add before/after data examples, your data-quality log counts, the star schema diagram, dashboard screenshots and your top findings with their ₦ impact. -->

## Status

In progress. Volumes are scaled down to keep the files workable in Excel on a normal laptop, so findings will be reported as ratios and trends rather than absolute naira values.
