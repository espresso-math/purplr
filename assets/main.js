// Menu display


$(function() {
    $('#search-query').lunrSearch({
      indexUrl  : '/js/index.json',           // url for the .json file containing search index data
      results   : '#search-results',          // selector for containing search results element
      template  : '#search-results-template', // selector for Mustache.js template
      titleMsg  : '',   // message attached in front of results (can be empty)
      emptyMsg  : '<p>Nothing found.</p>'     // shown message if search returns no results
    });
  });



$(document).ready(function() {
  $('.menuicon').click(function() {
    $('.mobileitems').slideToggle(100);
    return false;
  });
  $('.searchicon').click(function() {
    $('.searchmenu').slideToggle(100);
    $('.searchmenu input').focus();
    return false;
  });
  $('.mobilesearch').click(function() {
    $('.searchmenu').slideToggle(100);
    return false;
  });
});