---
layout: page
title: Origin-Destination-Transfer (ODX) Modeling
description: Advanced trip chaining framework for regional transit systems using mobile ticketing data
img: assets/img/12.jpg
importance: 1
category: research
related_publications: true
---

This project develops a comprehensive Origin-Destination-Transfer (ODX) model that revolutionizes how we understand passenger movements in regional transit systems. By leveraging mobile ticketing data and advanced machine learning techniques, the model provides unprecedented insights into complete passenger journeys, including transfer behaviors.

## Research Objectives

The primary goal is to create a scalable and cost-effective approach for transit agencies to understand passenger flow patterns without requiring expensive smart card infrastructure. The model addresses three critical challenges:

1. **Incomplete Data Problem**: Mobile ticketing systems typically capture only boarding events, missing alighting and transfer information
2. **Passenger Heterogeneity**: Different passenger types exhibit distinct travel patterns that must be accounted for
3. **Seasonal Variations**: Travel patterns change significantly across different seasons and conditions

## Methodology

### Passenger Typology Framework
Using hierarchical clustering and Dynamic Time Warping (DTW), we identify distinct passenger types based on their spatiotemporal activation patterns:
- **Regular Commuters**: Consistent daily patterns with peak-hour travel
- **Occasional Users**: Irregular usage with weekend and off-peak preferences  
- **Students**: Academic calendar-aligned patterns with campus-centric trips
- **Leisure Travelers**: Weekend-focused usage with recreational destinations

### Trip Chaining Model
The core innovation lies in our trip chaining algorithm that:
- Integrates passenger typology insights to improve journey inference
- Accounts for seasonal variations in travel behavior
- Implements gradient boosting machines (GBM) for spatial error correction
- Validates results against ground-truth survey data

### Spatial Error Correction
A key breakthrough is the 70% reduction in Mean Absolute Error (MAE) and 85% reduction in Symmetric Mean Absolute Percentage Error (SMAPE) achieved through our spatial error correction framework.

## Key Results

- **Accuracy Improvement**: Achieved 70% reduction in MAE through spatial error correction
- **Scalability**: Successfully tested on regional bus networks with limited AFC infrastructure
- **Validation**: Model validated against comprehensive survey data from Pioneer Valley Transit Authority
- **Transfer Detection**: Successfully identifies major transfer hubs and seasonal ridership trends

## Impact and Applications

This research provides transit agencies with:
- **Enhanced Planning Tools**: Better understanding of passenger flow patterns for service optimization
- **Cost-Effective Analysis**: Achieves smart-card level insights using only mobile ticketing data
- **Policy Support**: Data-driven insights for route planning and transfer facility improvements
- **Academic Contribution**: Novel methodological framework applicable to transit systems worldwide

## Publications

This work has resulted in multiple peer-reviewed publications {% cite abdalazeem2023extracting %} {% cite abdalazeem2024enhanced %} and continues to inform ongoing research in transit system optimization and passenger behavior analysis.
