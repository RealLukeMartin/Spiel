//Initialize the game area
Crafty.init(500,350, document.getElementById('game'));

//Add user entity
Crafty.e('Man, 2D, DOM, Color, Fourway, Gravity')
    .attr({x: 0, y: 0, w: 50, h: 50})
    .color('#A7C5BD')
    .fourway(4) //<-- control entity with arrow keys
    .gravity('Floor');

//Add Floor(barrier) entity
Crafty.e('Floor, 2D, DOM, Color')
    .attr({x: 0, y: 250, w: 250, h: 10})
    .color('#524656');
Crafty.e('Floor, 2D, DOM, Color')
    .attr({x: 320, y: 250, w: 180, h: 10})
    .color('#524656');