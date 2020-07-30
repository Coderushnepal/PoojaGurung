function Ball()
{
    var that = this;
    this.isDeleted = false;
    //this.isDeleteable = false;
    

    this.ball = document.createElement("div");
    this.ball.style.borderRadius = "50%";

   
    this.setXY = function (valueX, valueY) {
        this.ball.style.left = valueX;
        this.ball.style.top = valueY;
    };    

    this.setWH = function (valueW, valueH) {
            this.ball.style.width = valueW;
            this.ball.style.height = valueH;
    }; 
          

    this.create = function () {  
        this.ball.id = i;  
        this.ball.style.position = "absolute";
        
        this.ball.style.backgroundColor = colors[parseInt(Math.random() * colors.length)]; 
            this.ball.addEventListener("click", function () {       
                if(that.isDeleted)
                {
                 that.remove();   
                }        
            });        
    };

    this.render = function () {         
        document.body.appendChild(this.ball);
    };


    this.movement = function() {   
        this.isDeleted = true;     
           this.interval = setInterval(
                function() {                    
                    var newBallTopValue = that.ball.style.top;
                    var nextTopValue = parseInt(newBallTopValue) + 2;  
                    that.ball.style.top = nextTopValue + "px";                    
                    if(nextTopValue >= (window.innerHeight))   
                    {
                        that.ball.remove();
                    }                
                }, 
            1000/60 );    
        }

    this.remove = function() {
        document.body.removeChild(this.ball);
		clearInterval(this.interval);
		this.isDeleted = true;
    }       
}


