var words = ["sunday","october","apple","gentleman","dope","eat","four"];
var nameWords = words[Math.floor(Math.random() * words.length)];
console.log(nameWords);

function createDashes() {
    for(var i=0; i < nameWords.length; i++)
    {
        var letter = document.createElement("div");
        letter.classList.add("box-letter");
        letter.id = "dashLetter";    
        box2.appendChild(letter);
        container.appendChild(box2);
    }
}

createDashes();


var matchLetter = new Set();
var wrongLetter = new Set();

var word = document.querySelectorAll("#dashLetter");

document.addEventListener("keypress", function(e) {
    console.log(e); 
    var letterGuess = e.key;
    
    if(nameWords.includes(letterGuess))
    {
    
      for (var n = 0; n < nameWords.length; n++)
        {
            if(nameWords[n] === letterGuess)
            {                
                word[n].innerText = letterGuess;  
                console.log(word[n].innerText);  
                matchLetter.add(word[n].innerText);                
            }             
        }                     
    } 
    else
    {   
        
       var wrongPara = document.getElementById("wrongPara");        
       var hell = Array.from(wrongLetter.add(letterGuess));   
       wrongPara.innerText = hell;   
       wrong2.appendChild(wrongPara); 
        console.log(wrongLetter)   
       figures();  
    }  
         
})

console.log(wrongLetter) 





var displayFigures = document.getElementsByClassName("figure-part");
var n = 0;
function figures() {  
    displayFigures[n].style.visibility = "visible";
    n++;
}

function gameFail(){

}