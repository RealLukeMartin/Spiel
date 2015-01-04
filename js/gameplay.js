//Initialize the game area
Crafty.init(500,350, document.getElementById('game'));

//console.log(Crafty.timer.stepType('fixed'));
//Add user entity
var man = Crafty.e('Man, 2D, DOM, Color, Multiway, Gravity')
    .attr({x: 0, y: 0, w: 50, h: 50})
    .color('#A7C5BD')
    .multiway(4, {UP_ARROW: -90, DOWN_ARROW: 0, RIGHT_ARROW: 0, LEFT_ARROW: -180}) //<-- control entity with arrow keys
    .gravity('Floor')
    .gravityConst(0.2);

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


