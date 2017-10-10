---
title: Written by Jeff Chausse
permalink: "/writing/"
layout: page
---

<p>Some of my writing is about UX design. Some of it isn&rsquo;t. I contain multitudes.

<ul class="post-list">
  {% for post in site.posts %}
     <li>
       {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
       <span class="post-meta">{{ post.date | date: date_format }}</span>
       <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
     </li>
  {% endfor %}
 </ul>