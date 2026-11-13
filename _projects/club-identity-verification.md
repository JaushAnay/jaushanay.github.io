---
title: Verifying football club identities at scale
summary: How I keep rebranded, relocated and reserve-team clubs from being merged or split in a global football database.
status: ongoing
role: Data Validation Specialist, Sportmonks
tracks: [data-quality]
tools: [Excel, Google Sheets, AI-assisted research]
skills: [Entity and identity resolution, Source verification, Weighing conflicting sources, Transliteration matching, Decision documentation]
data_note: Professional work, described as method only
cover: /assets/img/projects/club-identity-verification.svg
cover_alt: "Five steps of the club identity method: compare, source, weigh, variants, record"
featured: true
order: 1
---

## The problem

Football data breaks in quiet ways. A club rebrands in the middle of a season, moves to another city, takes over another club's licence, or shares a name with its own reserve or youth side. If a database treats two separate clubs as one, or one club as two, every fixture, lineup and statistic attached to them inherits the error, and customers receive it.

These cases are hardest in lower-tier and amateur leagues, where official sources are thin and secondary sources often disagree.

## The scope

I validate sports data records daily across fixtures, seasons, teams, players, referees, coaches and competitions, covering football in Europe, South America, Africa, Asia and Oceania.

## How I approach it

1. **Compare several attributes, not just the name.** A shared name is a starting point, never proof. I check a team against multiple identifying attributes before deciding whether two records describe the same entity.
2. **Go to authoritative sources first.** FIFA, national football associations and official club websites come before aggregators. Transfermarkt, Flashscore and other sports databases help confirm or fill gaps.
3. **Weigh sources when they conflict.** When sources disagree, I judge which is more authoritative and more recent for that specific fact, rather than taking whichever appears first.
4. **Record confidence and evidence.** Each decision gets a confidence level and the sources that support it, so anyone reviewing it later can see why it was made.
5. **Handle naming variation deliberately.** Player and referee names often appear with different transliterations. I treat these as possible matches to investigate, not as automatic duplicates or automatic new people.

<!-- Optional: add an anonymised example here, e.g. "a club that rebranded mid-season", describing what each source said and how you decided. Never include internal tool names, screenshots or system details. -->

## The cases this handles

- Mid-season rebrands, where the club stays the same entity under a new name.
- Relocations, where a club moves but keeps its history.
- Licence transfers, where one club takes another's place in a competition.
- Reserve and youth teams being confused with the first team.

## Why it matters

Separate entities stay separate, records stay correctly linked, and customers receive data they can build on. The same habits (multiple attributes, ranked sources and documented decisions) are what I bring to every data-quality problem, in football or any other domain.

*This page describes my method. It does not describe Sportmonks' internal systems or tools.*
