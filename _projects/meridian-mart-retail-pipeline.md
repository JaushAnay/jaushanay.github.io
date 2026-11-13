---
title: Meridian Mart retail data pipeline and warehouse
summary: A daily pipeline that pulls sales data from five mismatched sources into a tested star schema, and keeps the numbers right when files arrive late, twice, or in a new shape.
status: in-progress
role: Solo project
tracks: [data-engineering]
tools: [Python, PostgreSQL, dbt, Apache Airflow, Docker, pytest, GitHub Actions, BigQuery]
skills: [Multi-source extraction, Watermark and incremental loading, Late data and backfills, Type 2 dimensions, Star schema modelling, Data testing and reconciliation, Orchestration]
data_note: Simulated business, including its awkward behaviour
repo: ""
cover: /assets/img/projects/meridian-mart-retail-pipeline.svg
cover_alt: "Meridian Mart pipeline: five sources extracted into raw tables, transformed with dbt into staging views and a tested star schema"
featured: false
order: 4
---

## The business

Meridian Mart is a simulated Nigerian grocery and pharmacy chain with 24 stores and an online shop. Its data lives in five places that were never designed to meet:

- Till files sent by each store as CSV
- An operational PostgreSQL database
- An online orders API that returns results page by page
- Supplier price lists in Excel, in two different layouts
- A daily foreign-exchange rate, from a file or an API

## The problem

Real pipelines rarely fail loudly. A store file arrives a week late, or twice, or with a new column, and the warehouse quietly reports the wrong sales. Prices change, and old sales get costed at today's price. This project is built to keep the numbers right through all of that, and to prove it.

## How it works

1. **Extract and load.** Python extractors pull from all five sources every day and land the data unchanged. Each file is identified by a fingerprint of its contents, so a re-sent file is skipped. The database extractor reads only rows changed since the last run (a watermark), and moves the watermark in the same step as the load. The API extractor retries with growing delays and writes nothing until every page has arrived.
2. **Raw layer.** Append-only and untyped. Every version of every row is kept, which is what makes history rebuildable.
3. **Staging.** One dbt view per source table casts types, converts naira to whole kobo, derives the sale date in Lagos time, and keeps the latest copy of each record.
4. **Marts.** A star schema: sales, online orders, daily inventory snapshots and exchange rates, with product, store, supplier, date and channel dimensions. The product dimension keeps every price version, so each sale is joined to the price in force at the moment it happened.
5. **Tests.** Keys are unique and complete, every fact links to a dimension, warehouse totals equal source totals for every date in the lookback window, and each product has exactly one current version.
6. **Orchestration.** An Airflow DAG runs the five extracts in parallel, then the dbt build, then freshness and volume checks.

## Design choices

- **Transform inside the warehouse (ELT).** Raw data lands first; dbt does the shaping, so every model is version-controlled and tested.
- **Money as integer kobo.** No rounding drift in totals.
- **A seven-day lookback for incremental loads,** plus a single backfill command for anything later.
- **Never two runs at once,** because overlapping runs would race on the watermarks.

{% if page.status == "completed" %}
## Results

Measured over 21 simulated days: 24 stores, 1,200 products, about 14,000 receipt lines and 300 online orders a day, 297,872 sales lines in total.

| Measure | Result |
| --- | --- |
| Source-to-warehouse sales variance inside the lookback window | 0 kobo |
| Late store files | 25: 21 absorbed automatically; 4 arrived nine days late and needed one backfill command |
| Variance across all 21 days after the backfill | 0 kobo |
| Duplicate file deliveries refused | 4 of 4 |
| New column appearing in till files mid-run | Kept and reported; nothing failed |
| Sales costed against the wrong product version | 0 of 297,872 |
| Daily run: 5 extracts, 19 models, 30 tests | About 10 seconds on a 4 GB virtual machine |

## Limitations

- A watermark sees only the latest state of a row, so a price that changes twice between runs loses its middle version, and deletes are invisible. Change data capture would fix both.
- Files more than seven days late need the backfill command; a monitor comparing raw and warehouse totals for all dates would catch them automatically.
- Incremental loading saves little at this data size. The benefit needs re-measuring with more history.
{% endif %}

<!-- When the project is finished and you have checked every number above against your own run, change status: to completed. The Results and Limitations sections then appear automatically. Add the repo link and a screenshot of the dbt lineage graph. -->
