function Ball()
{
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

        this.setColors = function (colors) {
               this.ball.style.backgroundColor = colors;
              };
        
        this.getColors = function () {
                return {
                     color: parseInt(this.ball.style.backgroundColor),                     
                    }
                };

    this.create = function () {  
    this.ball.id = i;  
    this.ball.style.position = "absolute";
    var colors = ["red","violet","green","blue","yellow","pink","indigo"];
    
    //ball.setColors(colors[Math.random() * colors.length]);
    this.ball.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];    
        
    };

    this.render = function () { 
        
        document.body.appendChild(this.ball);
        // console.log(this.ball.id);
      };
}

for (var i = 1; i <= 200; i++) {

    var ball = new Ball();

    

    var X = Math.random() * window.innerWidth + "px";
    var Y = 0 + "px";
    ball.setXY(X,Y);

    var W = (Math.random()* 80 + 50) + "px";
    var H = (Math.random()* 80 + 50) + "px";
    ball.setWH(W,H);

    ball.create();
    ball.render();
  }
