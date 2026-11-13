---
# Copy this file into the _projects folder and rename it, e.g. _projects/my-new-project.md
# The file name becomes the web address: /projects/my-new-project/
title: Project name
summary: One sentence describing the problem this project solves.
status: in-progress        # in-progress, completed or ongoing
role: Solo project
tracks: [analytics]        # any of: data-quality, analytics, data-engineering, ai-automation (first one sets the colour)
tools: [Excel, Power BI]
skills: [Data cleaning, Dashboard design]
data_note: Synthetic data  # or "Public data", or delete this line
repo: ""                   # link to the GitHub repository, or leave ""
dashboard: ""              # link to a NovyPro / Tableau / other dashboard, or leave ""
cover: ""                  # main image, e.g. /assets/img/projects/my-project.png (16:9 works best)
cover_alt: ""              # one sentence describing the image
featured: false            # true shows it on the home page (keep it to 3)
order: 7                   # position in the project list, lowest first
---

## Context

Who would care about this problem, and why.

## The data

Where it came from, how big it is, and what was wrong with it.

## Approach

The steps you took, the decisions you made, and the alternatives you rejected.

## Validation

The checks you ran and the issues they caught.

## Results

Findings, numbers and screenshots. To add a screenshot with a caption, upload it to assets/img/projects/ and write:

{% include figure.html src="/assets/img/projects/your-image.png" alt="What the image shows" caption="One sentence on what to notice." %}

## What I would do next

Limits of this version and what you would improve.
