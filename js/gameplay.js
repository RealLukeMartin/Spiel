(function(){

var man,
    KEYCODE_ESC = 27,
	paused = 0,
    scrollInterval = sideScrollInterval(),
    level_1 = [[0, 250, 250],
	           [360, 200, 170],
	           [590, 270, 200],
	           [900, 300, 250],
	           [1200, 260, 170],
	           [1500, 250, 250]];

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

function start(startPos, map) {
	//Start Position distance behind the first Floor
	Crafty.viewport.x = startPos;
	$('.overlay').removeClass('outGame');
	$('#play-button').css('display', 'none');
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
	//Create Floor entities
	function setFloors(level) {
		var lastFloorX = level[level.length - 1][0]; 

		for (i = 0; i < level.length; i++) {
			
			dx = level[i][0];
			dy = level[i][1];
			dw = level[i][2];
			
			Crafty.e('Floor, 2D, DOM, Color')
	    		.attr({x: dx, y: dy, w: dw, h: 10})
	    		.color('#524656');
		}
		return lastFloorX;
	} 

	//Create user entity
	man = Crafty.e('Man, 2D, DOM, Color, Multiway, Gravity, Collision')
	    .attr({x: 0, y: 0, w: 50, h: 50})
	    .color('#327462')
	    .multiway(4, {UP_ARROW: -90, DOWN_ARROW: 0, RIGHT_ARROW: 0, LEFT_ARROW: -180}) //<-- control entity with arrows keys
	    .gravity('Floor')
	    .gravityConst(0.1)
	    .collision()
	    .onHit('Win', function(e) {
		  clearInterval(scrollInterval);
		  this.disableControl();
		  alert('You Win!');
	});

	//Create Floor entities
	lastFloorX = setFloors(map);
    console.log('last floor x: ' + lastFloorX);

    //Create Win Entity
	Crafty.e('Win, 2D, DOM, Color, Collision')
	.attr({x: lastFloorX + 130, y: 150, w: 10, h: 100})
	.color('#777')
	.collision()
    .onHit('Man', function(e) {
	  this.destroy();
	});

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
    start(100, level_1);
});

})();