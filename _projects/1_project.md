---
layout: page
title: Transit OD Inference from Mobile Ticketing Data
description: "2021–2023 · Inferring complete passenger OD matrices from boarding-only mobile ticketing data"
img: assets/img/publication_preview/origin_destination_transfer_figure.png
importance: 3
category: work
---

Most regional transit agencies in the US know where their passengers board, but not where they get off. The Pioneer Valley Transit Authority (PVTA), a 40+ route bus network in western Massachusetts, runs on a mobile ticketing platform that records exactly that kind of boarding-only data. Over three years I built a set of models that recover complete passenger journeys — origins, destinations, and transfers — from it.

## Research Overview

Smart card systems that record both tap-in and tap-out make OD estimation straightforward, but most regional US agencies don't have that infrastructure and can't justify the cost of installing it. The question driving this project was whether careful modeling could substitute for hardware: can we infer where passengers alight, and how they chain trips together, from boarding records alone? I started with a comprehensive review of OD inference methods, then built up the pieces below.

## Methodology

**Passenger typology clustering**

I clustered activation time series from more than 40,000 weekly riders using hierarchical clustering with dynamic time warping (DTW). This surfaced distinct spatiotemporal patterns in how different rider groups use the network — commuters, midday riders, weekend travelers — which turned out to be useful signal for the inference steps that followed.

**Trip chaining with spatial error correction**

I built a trip chaining model that folds in the passenger typologies and seasonal variation, then added a gradient boosting (GBM) step that corrects spatial errors in the inferred alighting locations. Against survey ground truth, this cut mean absolute error by 70% and symmetric mean absolute percentage error by 85% compared to baseline trip chaining.

**Origin-destination-transfer (ODX) model**

The final model puts the pieces together to infer complete journeys, including transfers, and uses iterative proportional fitting (IPF) to scale the estimates from ticketing users up to the full network population.

## Impact and Applications

The methods were validated against PVTA's onboard survey data, and they don't require anything beyond the mobile ticketing platforms many US agencies already run — no smart card infrastructure. The inferred flows also power the [PVTA OD dashboard](https://pvtaodx.narslab.org), which makes the results usable for PVTA planners and the public.

## Funding

Pioneer Valley Transit Authority (PVTA), 2021–2023 (PI: J. Oke)

## Publications

- **Origin-destination inference in public transportation systems: A comprehensive review** — _International Journal of Transportation Science and Technology_, 12(1), 315–328 (2023)
- **Extracting Spatiotemporal Bus Passenger Trip Typologies from Noisy Mobile Ticketing Boarding Data** — _Data Science for Transportation_, 5, 20 (2023)
- **Enhanced Seasonal Typology-Informed Transit Trip Chaining via Mobile Boarding and Survey Data** — _Data Science for Transportation_, 6, 19 (2024)
- **A novel origin-destination-transfer model using mobile ticketing activations with seasonal passenger typology and spatial error correction** (in preparation)
