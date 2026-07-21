---
layout: page
title: Schematic Bicycle Maps for Sustainable Mobility
description: "2024–present · How schematic bicycle maps influence cyclist behavior, mode choice, and sustainable mobility"
img: assets/img/publication_preview/schematic_maps_ridership_figure.png
importance: 1
category: work
---

## Research Overview

Transit riders navigate with schematic maps — simplified, distorted, and famously effective. Cyclists mostly don't. This project, the core of my dissertation, asks whether simpler bicycle maps actually work better at getting people to ride, and what that could mean for mode choice and vehicle emissions in urban areas. It combines survey research, map design optimization, and behavioral analysis to work toward evidence-based design rules for bicycle navigation tools.

## Project Objectives

- Understand which map representations and design features cyclists actually prefer
- Test how schematic map design affects route selection and stated intentions to ride
- Build optimization frameworks that generate schematic bicycle maps automatically
- Estimate the potential emissions impact of increased cycling mode share
- Work toward unified design rules for schematic bicycle maps

## Methodology

**Survey development and data collection**

I designed and fielded a national survey on how cyclists and micromobility riders respond to map design: simplification level, geographic accuracy, infrastructure representation, and route legibility. Because the survey ran on an incentivized online platform, we also had to build a bot detection pipeline — combining platform signals, browser fingerprinting, timing checks, and an XGBoost validation model — which became a paper in its own right.

**Map design and optimization**

I formulated a mixed-integer linear program (MILP) that selects bicycle map routes from street and trail networks under safety, connectivity, and user-preference constraints, and I'm folding the survey findings back into the design rules.

**Behavioral analysis**

Using a Bayesian latent class ordered logit, I model stated intentions to ride under different map designs, separating riders into groups with different design sensitivities rather than assuming everyone responds the same way.

## Current Status

Data collection is complete and the first results are out: the survey findings are published in _Environmental Research Communications_ and the bot detection framework in _Data Science for Transportation_, with three more papers under review and the emissions work in preparation. I defended my prospectus in May 2026 and the optimization and design-rules work continues through my dissertation.

## Funding

Armstrong Fund for Science, 2024-2026 (PI: J. Oke)

## Collaborators

- Prof. Jimi Oke (UMass Amherst)
- Prof. Eleni Christofa (UMass Amherst)
- Andrew Ruger (Grinnell College, REU Student)
- Geehan Altayb (Howard University, REU Student)
- Nathan Bohlke (UMass Amherst)

## Publications

- **Maps are good but are simpler maps better? Insights on urban bicycling in the US** — _Environmental Research Communications_, 8(2), 025004 (2026)
- **Explainable Data-Driven Multi-Filter Framework for Bot Detection in Incentivized Online Surveys** — _Data Science for Transportation_, 8, 21 (2026)
- **Schematic maps promise to induce micromobility ridership: a Bayesian latent class ordered logistic approach** (Under review)
- **Toward Unified Design Rules for Schematic Bicycle Maps** (Under review)
- **Three-decade systematic review highlights enduring barriers to cycling and reveals rural–urban evidence gap** (Under review)
- **Schematic Bicycle Maps for Influencing Cyclist Behavior and Reducing Greenhouse Gas Emissions** (In preparation)

## Conference Presentations

- "Optimizing and Deploying Schematic Bicycle Maps with MILP and User Input" -
  INFORMS Annual Meeting, Atlanta, GA (October 2025, poster)
