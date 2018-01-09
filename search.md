---
layout: onelayout
title: Search page
htmltitle: <a href="/"><strong>F<i class="fa fa-question" aria-hidden="true"></i><i class="fa fa-question" aria-hidden="true"></i></strong><br><strong><i class="fa fa-question" aria-hidden="true"></i>D</strong></a>
---
## Search Result
<section id="search-results" style="display: none;"> </section>

{% raw %}
<script id="search-results-template" type="text/mustache">
  {{#entries}}
    <ul>
      <li>
       <a href="{{url}}">{{title}}</a>
      </li>
      {{#is_post}}
      <ul>
        {{#tags}}<li>{{.}} </li>{{/tags}}
      </ul>
      {{/is_post}}
    </ul>
  {{/entries}}
</script>
{% endraw %}