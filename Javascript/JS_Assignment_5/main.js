
for (var i = 1; i <= 200; i++) {

    var ball = new Ball();      
    

    var X = Math.random() * (window.innerWidth) + "px";
    var Y = 0 + "px";
    ball.setXY(X,Y);

    var W = (Math.random()* 80 + 50) + "px";   
    ball.setWH(W,W);
   
    ball.create();
    ball.render();

    var timeout = Math.random() * 5 * 1000;
    setTimeout(
        (function() {
            var currentBall = this.ball;
            return function() {
                currentBall.movement();
            };
        }) (),
        timeout
    );
}
