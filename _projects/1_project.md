---
layout: page
title: Transit OD Inference from Mobile Ticketing Data
description: "2021–2023 · Inferring complete passenger OD matrices from boarding-only mobile ticketing data"
img: assets/img/publication_preview/origin_destination_transfer_figure.png
importance: 3
category: work
related_publications: true
---

This research develops machine learning frameworks to infer complete
origin-destination-transfer matrices from boarding-only mobile ticketing data in
regional bus networks with 40+ routes.

## Research Overview

The project addresses the critical challenge of understanding complete passenger
travel patterns when transit agencies only collect boarding data. Many regional
transit systems in the US use mobile ticketing platforms that record when and
where passengers board, but not where they alight. This research creates
cost-effective methods to infer full journey patterns without expensive smart
card infrastructure.

## Methodology

**Passenger Typology Clustering**

- Developed clustering framework using hierarchical methods and dynamic time
  warping (DTW)
- Identified distinct behavioral patterns across 40,000+ weekly riders
- Captured spatiotemporal heterogeneity in passenger travel patterns

**Trip Chaining with Spatial Error Correction**

- Built trip chaining model incorporating passenger typology and seasonal
  variations
- Integrated gradient boosting machine (GBM) for spatial error correction
- Reduced Mean Absolute Error (MAE) by 70% and Symmetric Mean Absolute
  Percentage Error (SMAPE) by 85%

**Origin-Destination-Transfer (ODX) Model**

- Advanced model inferring complete trip patterns including transfers
- Leverages iterative proportional fitting (IPF) and machine learning
- Scales partial AFC-based OD estimates to full transit network population

## Impact and Applications

- **Scalable methodology** for transit agencies without smart card infrastructure
- **Directly applicable** to US agencies using similar mobile ticketing platforms
- **Validated** with comprehensive survey data from Pioneer Valley Transit
  Authority
- **Enables** data-driven network planning and service optimization

## Funding

Pioneer Valley Transit Authority (PVTA), 2021-2023 (PI: J. Oke)

## Key Publications

**Origin-destination inference in public transportation systems: A comprehensive
review** (2023)

- Published in _International Journal of Transportation Science and Technology_
- Comprehensive review of state-of-the-art OD estimation methods
- Analysis of transition from survey-based to big data-driven techniques

**Extracting Spatiotemporal Bus Passenger Trip Typologies from Noisy Mobile
Ticketing Boarding Data** (2023)

- Published in _Data Science for Transportation_
- Novel clustering framework using hierarchical clustering and DTW
- Identification of distinct passenger behavior patterns

**Enhanced Seasonal Typology-Informed Transit Trip Chaining via Mobile Boarding
and Survey Data** (2024)

- Published in _Data Science for Transportation_
- Trip chaining model with gradient boosting for spatial error correction
- Achieved 70% reduction in MAE and 85% reduction in SMAPE

**A Novel Origin-Destination-Transfer Model** (Under Review)

- Integration of trip chaining, typology, and spatial error correction
- Complete inference of passenger journeys including transfers
