//alert("Hello Pooja");

var btnSubmit = document.getElementById("btn-submit");
var username = document.getElementById("userName");
var email = document.getElementById("e-mail");
var password = document.getElementById("passWord");
var password2 = document.getElementById("passWord2");



btnSubmit.addEventListener('click', function() {	
	//alert("Hello Pooja");
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const userValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(userValue === '') {
		setErrorFor(username);
	} else {
		setSuccessFor(username);
	}

	if(emailValue === '') {
		setErrorFor(email);
	} else {
		setSuccessFor(email);
	}

	if(passwordValue === '') {
		setErrorFor(password);
	} else {
		setSuccessFor(password);
	}

	if(password2Value === '') {
		setErrorFor(password2);
	} else {
		setSuccessFor(password2);
	}
}


function setErrorFor(input) {
	input.style.border = "1px solid #e74c3c";	
	var x, i;
	x = document.querySelectorAll("small");
	for (i = 0; i < x.length; i++) 
	{	  
	  x[i].style.visibility = "visible";	
	  x[i].style.color = "#e74c3c";
	}	
}

function setSuccessFor(input) {
	input.style.border = "1px solid #2ecc71";  
	var x, i;
	x = document.querySelectorAll("small");
	for (i = 0; i < x.length; i++) 
	{	  
	  x[i].style.visibility = "hidden";	
	  x[i].style.color = "#2ecc71";
	}
}
	
