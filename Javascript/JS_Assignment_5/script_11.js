function Ball()
{
    var that = this;
    this.isDeleted = false;
    


    this.ball = document.createElement("div");
    this.ball.style.borderRadius = "50%";

   
    this.setXY = function (valueX, valueY) {
        this.ball.style.left = valueX;
        this.ball.style.top = valueY;
    };

    this.getXY = function () {
        return {
             X: parseInt(this.ball.style.left),
             Y: parseInt(this.ball.style.top)
        }
    };

    this.setWH = function (valueW, valueH) {
            this.ball.style.width = valueW;
            this.ball.style.height = valueH;
    };
    
    this.getWH = function () {
        return {
            W: parseInt(this.ball.style.width),
            H: parseInt(this.ball.style.height)
        }
    };        

    this.create = function () {  
        this.ball.id = i;  
        this.ball.style.position = "absolute";

        var colors = ["red","violet","green","blue","yellow","pink","indigo"]; 
        this.ball.style.backgroundColor = colors[parseInt(Math.random() * colors.length)]; 
            this.ball.addEventListener("click", function () {       
                //that.isDeleted = true;
                document.body.removeChild(that.ball);           
            });        
    };

    this.render = function () {         
        document.body.appendChild(this.ball);
    };


    this.movement = function() {        
           this.interval = setInterval(
                function() {                    
                    var newBallTopValue = that.ball.style.top;
                    var nextTopValue = parseInt(newBallTopValue) + (Math.random() * 5) ; 
                    that.ball.style.top = nextTopValue + "px";                      
                }, 
            1000/60 );    
        }

    this.remove = function() {
        document.body.removeChild(this.ball);
		clearInterval(interval);
		this.isDeleted = true;
    }
    
    
    this.removeBall = function() {            
        // setInterval(function() {
            //    // var bounce = this.ball.;
            //     balls.forEach(function(ball) {
                    if (that.ball.getXY().x > window.innerHeight - that.ball.getWW().W) {
                       that.ball.remove();                       
                   }
            //     // });
            // }, 1000 / 60);
        };
       
        
}

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

    
   ball.removeBall();
}

