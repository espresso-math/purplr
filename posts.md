---
layout: onelayout
title: List of all pages
---

## Post
<ul>
	{% for post in site.posts %}
	<li>
		<a href="{{ post.url }}">{{ post.title }}</a>
	</li>
	{% endfor %}
</ul>