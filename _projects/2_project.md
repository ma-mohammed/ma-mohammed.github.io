---
layout: page
title: Spatial Crash Typology and Risk Prediction
description: "2024–2025 · Interpretable ML to classify crash typologies across census tracts and forecast risk"
img: assets/img/publication_preview/crash_typology_figure.png
importance: 2
category: work
giscus_comments: false
---

Roadway safety programs usually target individual hotspots: an intersection here, a corridor there. This project asks a different question — do whole neighborhoods share recognizable crash profiles? Using one year of state-level crash records, I classified 2,480 census tracts across Massachusetts, Connecticut, and Vermont into crash typologies with UMAP and Gaussian mixture models.

The results now live in an interactive dashboard at [crashtypology.narslab.org](https://crashtypology.narslab.org), where you can explore the region tract by tract.

## Research Objectives

The goal was a data-driven way to understand how crash patterns vary across space, and how they relate to roadway characteristics and socioeconomic conditions. If tracts fall into a small number of recognizable types, agencies can match interventions to types instead of treating every location as unique.

## Methodology

**Data collection and processing**

I assembled one year of crash records from the three states, joined them to their census tracts, and integrated demographic, roadway, and built environment variables for each tract.

**Dimensionality reduction**

UMAP (Uniform Manifold Approximation and Projection) compressed the high-dimensional crash data into a small set of latent dimensions while preserving the local and global structure that matters for clustering. This kept the downstream typologies interpretable rather than a black box.

**Classification and prediction**

Gaussian mixture modeling assigned each tract to a crash typology. I then trained gradient boosting models (XGBoost) with SHAP interpretation to predict crash risk within each typology and show which roadway and demographic factors drive risk where.

## Key Results

- The typologies are distinct and interpretable: each one links to a specific combination of roadway characteristics and socioeconomic factors
- Classifying tracts into types turns a sprawling crash dataset into actionable risk categories that point toward specific interventions
- The framework only needs crash records and public census data, so other regions can apply it without new data collection

## Impact

This work moves safety analysis away from one-size-fits-all approaches and toward context-specific interventions: knowing a tract's type tells you something concrete about what is likely to work there. It's a way for agencies to prioritize safety investments systematically rather than one hotspot at a time.

## Funding

New England University Transportation Center (NEUTC), 2024-2025 (PI: J. Oke)

## Publications

**A Roadway Crash Typology of Census Tracts Enables Targeted Interventions via
Interpretable Machine Learning** (2025)

- Published in _Data Science for Transportation_, Volume 7, Article 14
- doi: 10.1007/s42421-025-00128-2

## Conference Presentations

- "Enhancing Road Safety: A Data-Driven Spatial Typology of Crashes in New
  England" - INFORMS Annual Meeting, Seattle, WA (October 2024)
- "A Spatial Typology Analysis of Crash Characteristics across 2480 Census
  Tracts" - TRB Annual Meeting, Washington, D.C. (January 2025, poster)
- "A Roadway Crash Typology Enables Targeted Interventions" - NEUTC Symposium &
  Leadership Summit, Norwich University, VT (February 2025, poster)
