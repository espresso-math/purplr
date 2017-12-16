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