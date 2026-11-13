---
title: Kadara Pay payments reconciliation platform
summary: A platform that matches every payment across ledger, card processor and bank each day, classifies every mismatch by cause, and sends only true exceptions to a person.
status: in-progress
role: Solo project
tracks: [data-engineering, data-quality]
tools: [Python, PostgreSQL, Great Expectations, pytest, GitHub Actions, Docker, Excel, Power BI]
skills: [Idempotent ingestion, Data contracts and quarantine, Three-way reconciliation, Entity resolution, Exception workflows, Audit trails, Precision and recall evaluation]
data_note: Simulated company, with planted defects and an answer key
repo: ""
cover: /assets/img/projects/kadara-pay-reconciliation.svg
cover_alt: "Kadara Pay reconciliation: ledger, settlement and bank data ingested, standardised and matched, with exceptions routed to review"
featured: false
order: 5
---

## The problem

A payments company records every transaction three times: in its own ledger, in the card processor's settlement files, and on its bank statement. When the three disagree, money is missing, duplicated or late, and someone has to find out which. Done by hand across hundreds of thousands of transactions, that is slow and error-prone.

This platform ingests all three every day, proves they agree, classifies every disagreement by cause, and sends only the genuine exceptions to a person, with the evidence and a full audit trail.

## How it works

1. **Ingest.** Each file is identified by a fingerprint of its contents, so it can only ever load once, whatever it is called. Registration and loading happen in one transaction, so a failure leaves nothing half-loaded.
2. **Standardise.** Amounts become whole kobo, timestamps become UTC, and each transaction gets its business date in West Africa Time. A row that breaks a rule goes to quarantine with the rule's name, and the rest of the file still loads. Great Expectations then checks each file against its data contract.
3. **Core.** A normalised model with primary keys, foreign keys and constraints, where every row records the file and line it came from.
4. **Resolve merchants.** Duplicate merchant records are found by comparing likely pairs (same bank account, same phone, or similar name) and scoring them: high scores merge, borderline scores go to review.
5. **Reconcile.** Ledger, settlement and bank records are matched in passes: exact matches, matches within a rounding tolerance, late arrivals, amount mismatches, status conflicts, and records missing on one side. A repair pass pairs records whose references were garbled.
6. **Review.** Open exceptions export to Excel with a dropdown of decision codes. Decisions are imported, recorded permanently and never overwritten, and the system closes its own exceptions when a later run resolves them.

## Design choices

- **Six schemas** (raw, staging, core, reconciliation, data quality, audit), so each stage is separate and inspectable.
- **Quarantine, don't reject.** One bad row never blocks a whole file.
- **Append-only decisions,** so the full history of every exception is preserved.
- **A generator that writes an answer key,** so every accuracy figure is measured, not estimated.

{% if page.status == "completed" %}
## Results

Measured on 30 simulated days: 600,000 ledger transactions across 3,000 merchants.

| Measure | Result |
| --- | --- |
| Transactions matched automatically | 98.6% |
| Planted defects raised as exceptions (recall) | 100% of 8,880 |
| Exceptions that were real defects (precision) | 88.1% |
| Rounding differences absorbed | 3,000 of 3,000 |
| Late settlement lines matched and closed automatically | 2,900 of 2,900 |
| Truncated bank references matched | 1,650 of 1,650 |
| Merchant de-duplication precision / recall | 100% / 91.9% |
| Rerun of all 30 days | No change in any table |

## Limitations

- Garbled references are repaired only when the amounts match exactly. That choice causes the whole precision gap: allowing a tolerance would repair more, but risk pairing unrelated payments.
- Merchants who changed both bank account and phone number share only a name, so some duplicates are missed.
- The simulated defects are cleaner than real ones. Partial settlements, reversals and chargebacks are not modelled.
{% endif %}

<!-- When the project is finished and you have checked every number above against your own run, change status: to completed. The Results and Limitations sections then appear automatically. Add the repo link and a screenshot of the review workbook or Power BI report. -->
