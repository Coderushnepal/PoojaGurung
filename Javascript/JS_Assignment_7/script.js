
var box1 = document.getElementById("box1");
box1.style.margin = "10px 0 0 0";

var title = document.createElement("h1");
title.id = "title";

var titleName = document.createTextNode("HANGMAN"); 
title.appendChild(titleName);
box1.appendChild(title);


var container = document.getElementById("box3");
var box2 = document.getElementById("box2");


var wrong1 = document.getElementById("box4");
var wrong2 = document.createElement("span");
var wrong3 = document.createTextNode("Wrong");
wrong2.appendChild(wrong3);
wrong1.appendChild(wrong2);


var guessed = document.getElementById("box5");
guessed.classList.add("guessed-div");

   




