//Initialize the game area
Crafty.init(500,350, document.getElementById('game'));

//Add Floor(barrier) entity
Crafty.e('Floor, 2D, DOM, Color')
    .attr({x: 0, y: 250, w: 250, h: 10})
    .color('green');

//Add user entity
Crafty.e('2D, DOM, Color, Fourway, Gravity')
    .attr({x: 0, y: 0, w: 50, h: 50})
    .color('#f00')
    .fourway(4) //<-- control entity with arrow keys
    .gravity('Floor');


