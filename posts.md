---
layout: post
---

<h2><strong>All Notifications</strong></h2>
<div class="stylized-list">
		<ul>
			{% for post in site.posts %} {% if post.newsfeed %}
			<li>
				<a href="{{ post.url }}"><i class="fa fa-hashtag" aria-hidden="true"></i> {{ post.title }}</a>
			</li>
			{% endif %}{% endfor %}
		</ul>
</div>