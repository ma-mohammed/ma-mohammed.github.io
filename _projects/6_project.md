---
layout: page
title: Connecticut GHG Inventory Dashboard
description: "2023–2024 · Interactive greenhouse gas inventory dashboard for three Connecticut metropolitan regions, deployed on AWS"
img: assets/img/5.jpg
importance: 5
category: work
---

## Overview

A public-facing dashboard displaying the 2021 greenhouse gas (GHG) inventory for three Connecticut metropolitan planning organizations: Bridgeport, Hartford, and New Haven. Built to support regional decarbonization planning and scenario discovery research.

**Live dashboard:** [ctghginventory.narslab.org](https://ctghginventory.narslab.org)

## What It Shows

- Sector-by-sector GHG emissions (mobile combustion, electricity, stationary combustion, solid waste, agriculture, forestry) for each region
- Per capita and absolute emissions comparisons across the three regions
- Trend data and scenario planning support for local governments
- Interactive filters by sector, region, and year

## Technical Stack

- **Visualization platform:** Apache Superset
- **Backend:** SQL database with structured GHG inventory tables
- **Infrastructure:** Linux server hosted on AWS Lightsail
- **Data sources:** EPA emissions factors, CT energy consumption records, USDA/EPA sector-specific data

## Related Research

This dashboard supports the scenario discovery paper:

- **Scenario discovery framework aids robust regional emissions mitigation planning** — _Environmental Research Communications_, 8(3), 031008 (2026)

## Collaborators

- Prof. Jimi Oke (PI), NARSLab, UMass Amherst
- Connecticut Councils of Governments (COGs)
- Collaborators: P. Zhao, J. Mega, M. Arabi, C. V. Barchers
