---
layout: page
title: PVTA OD Dashboard
description: "2022–2024 · Interactive origin-destination analytics dashboard for the Pioneer Valley Transit Authority, deployed on AWS"
img: assets/img/dashboard_pvta.png
importance: 5
category: work
---

## Overview

An interactive public dashboard I built for the Pioneer Valley Transit Authority (PVTA), visualizing the passenger origin-destination flows inferred in my transit OD research across their 40+ route regional bus network. It turns the models into something PVTA planners and the public can actually use.

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
