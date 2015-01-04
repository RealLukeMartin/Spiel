(function(){
	
var KEYCODE_ESC = 27,
	paused = 0,
    scrollInterval = sideScrollInterval();

//set side Scroll Speed
function sideScrollInterval() {
	scroll = window.setInterval(function() {
	    moveRight(10) }, 
	    100
    );
    return scroll;
}
//Propagate the side scroll interval
function moveRight(distance) {
	Crafty.viewport.x = Crafty.viewport.x - distance;
}
function pause() {
	Crafty.viewport.x = Crafty.viewport.x;
	clearInterval(scrollInterval);
	man.disableControl();
	paused = 1;
}
function play() {
	scrollInterval = sideScrollInterval();
	man.enableControl();
	paused = 0;
}
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

})();