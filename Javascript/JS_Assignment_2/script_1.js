console.log("Answer 1:")        
console.log(".........................................................................................................") 

var fellowNames = `neeta sapkota
Neha shiwakoti
Srijana Khatiwada 
smrity dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
pooja gurung
Bisikha subedi
Kritika Baral
Srijana Thulung`;
fellows = fellowNames.split('\n');

var result1 = fellows.map(function(value, index) {
		var obj = {};
        var name = value.split(' ');
        
		obj['id'] = index + 1;
		obj['firstName'] = name[0].charAt(0).toUpperCase().concat(name[0].slice(1));
        obj['lastName'] = name[1].charAt(0).toUpperCase().concat(name[1].slice(1));
        
		// console.log(obj);
		return obj;	
});
console.log(result1);




console.log("Answer 2:")        
console.log("......................................................................../////") 


 function find(char) {
	var Total = result1.length;	
	var res = result1.filter(function(value) {		
		return value.firstName.charAt(0).toUpperCase() === char.toUpperCase();       
	}); 
	
	var startWithSameLetter = res.length;
	var notSameLetter = Total - startWithSameLetter;

	console.log("find('" + char + "') =>  ",startWithSameLetter + " and " + notSameLetter);	
 }

find('s');
find('p');
find('b');
find('e');






console.log("Answer 3:")        
console.log("........................................................................") 

	var getArrayFromQ1 = result1;
	var org = getArrayFromQ1.reduce(function(prev, current) {	
		prev[current.id]= current;
		delete current.id;	
		return prev;
	}, {});    
   console.log(org);




