---
layout: page
title: PVTA OD Dashboard
description: "2022–2024 · Interactive origin-destination analytics dashboard for the Pioneer Valley Transit Authority, deployed on AWS"
img: assets/img/dashboard_pvta.png
importance: 4
category: work
---

## Overview

An interactive public-facing dashboard for the Pioneer Valley Transit Authority (PVTA), visualizing inferred passenger origin-destination flows across the 40+ route regional bus network. Built as part of the transit OD inference research project and deployed for use by PVTA planners and the public.

**Live dashboard:** [pvtaodx.narslab.org](https://pvtaodx.narslab.org)

## What It Shows

- Inferred passenger OD flows between transit stops and zones, derived from mobile ticketing boarding data
- Temporal patterns of ridership by time of day, day of week, and season
- Seasonal passenger typologies across the network
- Transfer behavior and multi-leg trip inference

## Technical Stack

- **Frontend/visualization:** Plotly Dash (Python)
- **Backend:** REST API serving OD matrix data
- **Infrastructure:** Docker containerized, hosted on AWS Lightsail
- **Data pipeline:** Automated ingestion and processing of mobile ticketing activations

## Collaborators

- Prof. Jimi Oke (PI), NARSLab, UMass Amherst
- Pioneer Valley Transit Authority (PVTA)
