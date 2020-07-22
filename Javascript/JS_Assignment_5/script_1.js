function Ball(x , y , w, h,container)
{
    
    this.x = x;   //left
    this.y = y;  //top
    this.w = w;
    this.h = h;
    this.ball = document.createElement("div");
    this.ball.style.borderRadius = "50%";
    this.ball.id = i;
    this.container = container;

    this.create = function () {  
    this.ball.id = i;  
    this.ball.style.position = "absolute";
    this.ball.style.width = this.w + "px";
    this.ball.style.height = this.h + "px";
    this.ball.style.left = this.x + "px";
    this.ball.style.top = this.y + "px";
    this.ball.style.backgroundColor = "red";    
        
    };

    this.render = function () {
        
        
        this.container.appendChild(this.ball);
        console.log(this.ball.id);
      };
}

var container = document.getElementById("box1");

for (var i = 1; i <= 200; i++) {
    var ball = new Ball(i * 10, i * 0, i * 10, i * 10, container);
    ball.create();
    ball.render();
  }

// var ball = new Ball(10, 10, 10, 10);
// ball.create();
// ball.render();
// var ball1 = new Ball(0, 0, 100, 100);
// ball1.create();
// ball1.render();

// console.log(ball.ball)
// console.log(ball1.ball)