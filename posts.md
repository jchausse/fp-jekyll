---
layout: page
title: Things I have written
permalink: /posts/
---

<p> In the good old days, this pile of content may have been called a blog. Back in the day, I would blog like nobody's business. Now my writing is much more sporadic, but hopefully more useful and insightful.  Some of it is about UX design. Some of it isn't. I contain multitudes.

<ul class="post-list">
  {% for post in site.posts %}
     <li>
       {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
       <span class="post-meta">{{ post.date | date: date_format }}</span>
       <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
     </li>
  {% endfor %}
 </ul>