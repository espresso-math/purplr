new IdealImageSlider.Slider('#slider');

var granimInstance = new Granim({
    element: '#diecanvas',
    name: 'basic-gradient',
    direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
				['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9']
            ]
        }
    }
});

// Menu display

function showmenubar() {
	$('main').css("display", "none");
	$('.menubar').css("display", "block");
}

$(function() {
    $('#search-query').lunrSearch({
      indexUrl  : '/js/index.json',           // url for the .json file containing search index data
      results   : '#search-results',          // selector for containing search results element
      template  : '#search-results-template', // selector for Mustache.js template
      titleMsg  : '',   // message attached in front of results (can be empty)
      emptyMsg  : '<p>Nothing found.</p>'     // shown message if search returns no results
    });
  });