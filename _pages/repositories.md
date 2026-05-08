---
layout: page
title: code
permalink: /repositories/
description: Open-source code from the NARSLab group at UMass Amherst where I contributed.
nav: true
nav_order: 7
---

{% if site.data.repositories.repos and site.data.repositories.repos.size > 0 %}
<div class="row row-cols-1 row-cols-md-2 g-3 mt-1">
  {% for repo in site.data.repositories.repos %}
  <div class="col">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title mb-1">
          <a href="{{ repo.url }}" target="_blank" rel="noopener noreferrer">{{ repo.name }}</a>
        </h5>
        <p class="card-text text-muted small mb-2">{{ repo.full_name }}</p>
        {% if repo.description and repo.description != "" %}
        <p class="card-text">{{ repo.description }}</p>
        {% endif %}
      </div>
      <div class="card-footer d-flex align-items-center gap-3 text-muted small bg-transparent">
        {% if repo.language and repo.language != "" %}
        <span><i class="fas fa-circle" style="font-size: 0.6rem;"></i> {{ repo.language }}</span>
        {% endif %}
        <span><i class="fas fa-star"></i> {{ repo.stars }}</span>
        <span><i class="fas fa-code-branch"></i> {{ repo.forks }}</span>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% else %}
<p class="text-muted mt-3">Repository data is generated at build time. To view the NARSLab repositories, visit <a href="https://github.com/NARSLab" target="_blank" rel="noopener noreferrer">github.com/NARSLab</a>.</p>
{% endif %}
