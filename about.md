---
title: About
intro: Data validation specialist in Kano, Nigeria, working across data quality, analytics, data engineering and AI evaluation.
description: About Joshua Anayochukwu, data validation specialist working across data quality, analytics, data engineering and AI evaluation.
---

{% if site.author.photo != "" %}<img class="portrait" src="{{ site.author.photo | relative_url }}" alt="Portrait of {{ site.author.short_name }}">{% endif %}

## How I got here

I studied Public Administration at Ahmadu Bello University, graduating with Second Class Upper in 2023. The degree taught me to think about process, accountability and records: who is responsible for information, how it is kept, and what happens when it is wrong.

My first jobs put that into practice. In a state ministry I kept office records and supported documentation for government programmes. In retail I recorded high volumes of transactions and kept inventory accurate. Then, in February 2026, I joined Sportmonks as a data validation specialist, checking football data for customers around the world.

That work is where data quality became my profession. A single wrongly merged club can corrupt every fixture, lineup and statistic attached to it, so I've learned to verify carefully, weigh conflicting sources, and record why each decision was made.

## Where I'm going

I'm building outward from that core. Analytics turns validated data into decisions. Data engineering puts validation rules into pipelines so they run automatically. AI evaluation and automation apply the same discipline to AI output and routine data work. The [projects](/projects/) on this site show each step.

## Skills, by honest level

{% for group in site.data.skills %}
### {{ group.level }}

{{ group.note }}

{% for s in group.items %}- {{ s }}
{% endfor %}
{% endfor %}

## Education

B.Sc. Public Administration, Second Class Upper Division, Ahmadu Bello University, Zaria, 2023. Courses and certifications are on the [learning page](/learning/).
