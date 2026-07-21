---
layout: page
title: New England Crash Typology Dashboard
description: "Interactive dashboard mapping five kinds of crash-prone places across 2,664 New England census tracts"
img: assets/img/dashboard_crash.png
importance: 4
category: work
---

## Overview

An interactive companion to my [crash typology research](https://doi.org/10.1007/s42421-025-00128-2). We analyzed more than 222,000 crashes across the census tracts of Massachusetts, Connecticut, and Vermont and used unsupervised machine learning to uncover five recurring crash environments. Knowing a tract's type points directly to the safety interventions most likely to work there — and this dashboard lets you explore that, tract by tract.

**Live dashboard:** [crashtypology.narslab.org](https://crashtypology.narslab.org)

## What It Shows

- An interactive map of all 2,664 census tracts, colored by crash type or by measures such as crash counts, severity, or truck involvement, with a full crash profile for every tract
- The five crash types themselves — from fast rural to slow urban environments — uncovered by compressing 25 crash risk features into six latent dimensions with UMAP and clustering with Gaussian mixture models
- Each type's fingerprint across the six dimensions, alongside SHAP values from a 96%-accurate LightGBM classifier showing which dimensions the model relies on when assigning tracts
- 33 evidence-based safety countermeasures mapped to the crash types they address, so selecting a type surfaces its matched interventions
- Temporal patterns, including crash counts by hour and weekday

The larger point is transferability: any region with crash records can map its own crash-prone environments the same way and match them to cataloged countermeasures, moving safety investment from one-spot-at-a-time toward systematic, typology-guided planning.

## Technical Stack

- **Frontend/visualization:** React single-page app with Leaflet for the interactive map
- **Data:** Tract-level GeoJSON with typology assignments, crash measures, and per-tract profiles

## Related Research

- **A Roadway Crash Typology of Census Tracts Enables Targeted Interventions via Interpretable Machine Learning** — _Data Science for Transportation_, 7, 14 (2025)

## Funding and Collaborators

Funded by the US Department of Transportation via the New England University Transportation Center (NEUTC). Built at NARSLab, UMass Amherst, with Prof. Jimi Oke (PI).
