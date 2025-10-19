---
layout: page
title: Spatial Crash Typology Analysis
description: Machine learning framework for analyzing transportation safety patterns across census tracts
img: assets/img/3.jpg
importance: 2
category: research
giscus_comments: true
---

This project develops an innovative approach to transportation safety analysis by applying machine learning techniques to identify spatial patterns in crash characteristics across census tracts in New England. The research bridges the gap between traditional crash analysis methods and modern data science techniques to provide actionable insights for traffic safety interventions.

## Research Overview

Transportation safety remains a critical challenge for traffic engineers and policymakers. Traditional approaches often analyze crashes in isolation or use simple aggregation methods that miss underlying spatial patterns. This project introduces a novel framework that leverages dimensionality reduction and clustering techniques to identify meaningful crash typologies based on geographic and demographic characteristics.

## Methodology

### Data Collection and Preprocessing
- **Multi-state Dataset**: Collected and preprocessed crash data from Massachusetts, Connecticut, and Vermont
- **Spatial Resolution**: Analysis conducted at census tract level for 2,480 census tracts
- **Feature Engineering**: Integrated crash data with demographic, socioeconomic, and built environment variables

### Dimensionality Reduction with UMAP
Implemented Uniform Manifold Approximation and Projection (UMAP) to extract latent spatial structures from high-dimensional crash data:
- Reduces computational complexity while preserving local and global data structure
- Captures non-linear relationships between crash characteristics and spatial variables
- Enables visualization of complex crash patterns in lower-dimensional space

### Gaussian Mixture Modeling for Classification
Applied Gaussian Mixture Modeling (GMM) to classify census tracts into distinct crash typologies:
- **Urban High-Density**: Areas with frequent intersection crashes and pedestrian incidents
- **Suburban Corridor**: Highway-adjacent areas with vehicle-to-vehicle crashes
- **Rural Low-Volume**: Sparse crash patterns with severity concerns
- **Mixed-Use Transition**: Areas showing characteristics of multiple typologies

## Key Findings

### Spatial Clustering Patterns
The analysis revealed distinct geographic clustering of crash typologies, with clear patterns related to:
- Urban density and infrastructure design
- Highway proximity and traffic volume
- Demographic composition and socioeconomic factors
- Land use characteristics and development patterns

### Predictive Capabilities
The framework demonstrates potential for:
- **Proactive Safety Planning**: Identifying high-risk areas before crash frequency increases
- **Resource Allocation**: Prioritizing safety interventions based on typology characteristics  
- **Policy Development**: Tailoring safety strategies to specific crash typology profiles
- **Regional Coordination**: Understanding cross-jurisdictional safety patterns

## Technical Innovation

### Advanced Clustering Techniques
- Integration of UMAP with GMM provides superior cluster identification compared to traditional methods
- Handles high-dimensional crash feature spaces effectively
- Maintains interpretability while capturing complex spatial relationships

### Scalable Framework
- Methodology designed for application across different geographic scales
- Adaptable to various data availability scenarios
- Computationally efficient for large-scale analysis

## Applications and Impact

### For Transportation Agencies
- **Strategic Planning**: Data-driven approach to safety program development
- **Performance Monitoring**: Track safety improvements across different typologies
- **Inter-agency Collaboration**: Shared understanding of regional safety patterns

### For Researchers
- **Methodological Advancement**: Novel application of machine learning to crash analysis
- **Comparative Studies**: Framework enables cross-regional safety comparisons
- **Interdisciplinary Research**: Bridges transportation engineering and data science

## Future Directions

### Predictive Modeling Extensions
Current work explores supervised learning models to predict crash typology using:
- Roadway geometric characteristics
- Environmental and weather factors
- Real-time traffic data integration
- Socioeconomic and demographic predictors

### Interactive Visualization Tools
Development of web-based mapping tools for:
- Real-time typology visualization
- Scenario planning capabilities
- Stakeholder engagement and communication
- Policy decision support

This research represents a significant advancement in transportation safety analysis, providing a data-driven foundation for more effective and targeted safety interventions across diverse geographic contexts.
