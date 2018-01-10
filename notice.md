---
layout: onelayout
title: Notice board
---

## Notice

<ul>
	{% for post in site.posts %}{% if post.notice %}
	<li>
		<a href="{{ post.url }}">{{ post.title }}</a>
	</li>
	{% endif %}{% endfor %}
</ul>
