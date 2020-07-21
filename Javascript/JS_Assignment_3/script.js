console.log("Answer 1:")        
console.log("........................................................................") 

var sequence = function(str) {
    var hel = [];
    var res = str.split('1').sort().pop();
    hel.push(res);
	return res;
};


console.log(sequence("111110"));








console.log("Answer 2:")        
console.log("........................................................................") 

function myfunc(string)
{
     var result = string.split("");
     var vowelReplace = [];
     
     for(var i=0; i < result.length; i++)
     {
        if(result[i] == "a")  
        {
            result[i] = result[i].replace(result[i],"1");
            vowelReplace.push( result[i]);
        }
         else if(result[i] == "e")
        {
            result[i] = result[i].replace(result[i],"2");
            vowelReplace.push(result[i]);
        }
        else if(result[i] == "i")
        {
            result[i] = result[i].replace(result[i],"3");
            vowelReplace.push(result[i]);
        }
        else if(result[i] == "0")
        {
            result[i] = result[i].replace(result[i],"4");
            vowelReplace.push(result[i]);
        }
        else if(result[i] == "u")
        {
            result[i] = result[i].replace(result[i],"5");
            vowelReplace.push(result[i]);
        }
        else
        {
            vowelReplace.push(result[i]);
        }  
        var a = vowelReplace.join('');        
    }
    console.log(a);    
}    


myfunc("karachi");