//Initialize the game area
Crafty.init(500,350, document.getElementById('game'));

//Add an entity
Crafty.e('2D, DOM, Color, Fourway')
    .attr({x: 0, y: 0, w: 100, h: 100})
    .color('#f00')
    .fourway(4); //<-- control entity with arrow keys



