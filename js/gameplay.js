(function(){

var man,
    KEYCODE_ESC = 27,
	paused = 0,
    scrollInterval = sideScrollInterval();

//Initialize the game area
Crafty.init(500,350, document.getElementById('game'));

//set side Scroll Speed
function sideScrollInterval() {
	scroll = window.setInterval(function() {
	    moveRight(5) }, 
	    50
    );
    return scroll;
}
//Make the stage scroll Right
function moveRight(distance) {
	Crafty.viewport.x = Crafty.viewport.x - distance;
}
//Pause the game
function pause() {
    Crafty.viewport.x = Crafty.viewport.x;
    clearInterval(scrollInterval);
    man.disableControl();
    paused = 1;
}
//Unpause the game
function play() {
	scrollInterval = sideScrollInterval();
	man.enableControl();
	paused = 0;
}
//Toggle for pause/play
function pauseToggle() {
    if (paused == 0) {
        pause()
    } else {
	    play();
    }
}


function start(startPos) {
	//Start Position distance behind the first Floor
	Crafty.viewport.x = startPos;
	$('.overlay').removeClass('outGame');
	$('#play-button').css('display', 'none');
	//Add user entity
	man = Crafty.e('Man, 2D, DOM, Color, Multiway, Gravity')
	    .attr({x: 0, y: 0, w: 50, h: 50})
	    .color('#327462')
	    .multiway(4, {UP_ARROW: -90, DOWN_ARROW: 0, RIGHT_ARROW: 0, LEFT_ARROW: -180}) //<-- control entity with arrow keys
	    .gravity('Floor')
	    .gravityConst(0.1);

	//Add Floor(barrier) entity
	
	Crafty.e('Floor, 2D, DOM, Color')
	    .attr({x: 0, y: 250, w: 250, h: 10})
	    .color('#524656');
	Crafty.e('Floor, 2D, DOM, Color')
	    .attr({x: 330, y: 250, w: 170, h: 10})
	    .color('#524656');
	Crafty.e('Floor, 2D, DOM, Color')
	    .attr({x: 530, y: 250, w: 250, h: 10})
	    .color('#524656');
	Crafty.e('Floor, 2D, DOM, Color')
	    .attr({x: 800, y: 250, w: 250, h: 10})
	    .color('#524656');
	Crafty.e('Floor, 2D, DOM, Color')
	    .attr({x: 1100, y: 250, w: 170, h: 10})
	    .color('#524656');
	Crafty.e('Floor, 2D, DOM, Color')
	    .attr({x: 1300, y: 250, w: 250, h: 10})
	    .color('#524656');
	//Pause the game
	function pause() {
	    Crafty.viewport.x = Crafty.viewport.x;
	    clearInterval(scrollInterval);
	    man.disableControl();
	    paused = 1;
	    $('.overlay').addClass('outGame');
	    $('#pause-button').css('display','block');
	    Crafty.pause();
	}
	//Unpause the game
	function play() {
		scrollInterval = sideScrollInterval();
		man.enableControl();
		paused = 0;
		$('.overlay').removeClass('outGame');
		$('#pause-button').css('display', 'none');
		Crafty.pause();
	}
	//Toggle for pause/play
	function pauseToggle() {
	    if (paused == 0) {
	        pause()
	    } else {
		    play();
	    }
	}  
	$(document).on('keyup', function(e) {
		console.log(e.keyCode);
	    if (e.keyCode == KEYCODE_ESC) {
	       pauseToggle();
	   }
	});
	$('#pause-button').on('click', function() {
        pauseToggle();
	});
}

$('#play-button').on('click', function() {
    start(100);
});

})();