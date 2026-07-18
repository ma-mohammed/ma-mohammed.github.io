---
layout: page
permalink: /publications/
title: publications
description: Published and ongoing research in transportation engineering, machine learning, and urban mobility systems.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications">

<h2>Journal Articles (Published)</h2>

{% bibliography --group_by none --query @*[pubstatus=journal]* %}

<h2>Conference Papers</h2>

{% bibliography --group_by none --query @*[pubstatus=conference]* %}

<h2>Under Review</h2>

{% bibliography --group_by none --query @*[pubstatus=review]* %}

<h2>In Preparation</h2>

{% bibliography --group_by none --query @*[pubstatus=preparation]* %}

</div>
