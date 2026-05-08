---
layout: page
title: code
permalink: /repositories/
description: Open-source code from the NARSLab group at UMass Amherst where I am a contributor.
nav: true
nav_order: 7
---

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-stretch">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% else %}
<p>Repository data is generated at build time. To view the repositories, see <a href="https://github.com/NARSLab" target="_blank">github.com/NARSLab</a>.</p>
{% endif %}
