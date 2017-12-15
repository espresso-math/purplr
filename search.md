---
layout: singelpage
---

<form action="/search" method="get">
  <input type="text" id="search-query" name="q" placeholder="Search" autocomplete="off">
</form>

<section id="search-results" style="display: none;"> </section>
 <script src="{{ "/assets/search.min.js" | relative_url }}" type="text/javascript" charset="utf-8"></script>