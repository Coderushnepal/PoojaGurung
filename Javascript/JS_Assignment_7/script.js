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


var words = ["sunday","october","apple","gentleman","dope","eat","four"];
var nameWords = words[Math.floor(Math.random() * words.length)];
console.log(nameWords);

for(var i=0; i < nameWords.length; i++)
{
    var letter = document.createElement("div");
    letter.classList.add("box-letter");
    letter.setAttribute("id","dashLetter")
   // letterDash.innerHTML = nameWords[i];
    
    box2.appendChild(letter);
    container.appendChild(box2);
}

var word = document.querySelectorAll("#dashLetter");
var wrong1 = document.getElementById("box4");
var wrong2 = document.createElement("span");
var wrong3 = document.createTextNode("Wrong");
wrong2.appendChild(wrong3);
wrong1.appendChild(wrong2);



document.addEventListener("keypress", function(e) {
    console.log(e) 
    if(nameWords.includes(e.key))
    {
      for (var n = 0; n < nameWords.length; n++)
        {
            if(nameWords[n] === e.key)
            {
                // console.log(e.key + " " + "match");
                word[n].innerHTML = e.key;
            }      
        }
    } 
    else
    {
       // console.log("no match");
       var wrongLetter = document.createElement("p");
       wrongLetter.innerHTML = e.key;
       wrong2.appendChild(wrongLetter);
        
    }
    

})
    
   




