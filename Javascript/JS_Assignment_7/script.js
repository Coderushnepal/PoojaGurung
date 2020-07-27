//alert("hello hangman");
var box1 = document.getElementById("box1");
box1.style.margin = "10px 0 0 0";

var title = document.createElement("h1");
title.setAttribute("id","title");

var titleName = document.createTextNode("HANGMAN"); 
title.appendChild(titleName);
box1.appendChild(title);


var container = document.getElementById("box3");
var box2 = document.getElementById("box2");
box2.style.marginTop = "50px";
container.appendChild(box2);

var words = ["sunday","october","apple","gentleman","dope","eat","four"];
var nameWords = words[Math.floor(Math.random() * words.length)];
//console.log(nameWords);

for(var i=0; i<nameWords.length; i++)
{
    var letterDash = document.createElement("div");
    letterDash.style.borderBottom = "5px solid white";
    letterDash.style.width = "30px";
    letterDash.style.height = "50px";
    letterDash.style.display = "inline-block";
    letterDash.style.marginLeft = "5px";    
    box2.appendChild(letterDash);
    container.appendChild(box2);
}

