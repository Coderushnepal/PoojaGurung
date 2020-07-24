//alert("Hello Pooja");

var btnSubmit = document.getElementById("btn-submit");
var username = document.getElementById("userName");


btnSubmit.addEventListener('click', function() {
	
	//alert("Hello Pooja");
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const userValue = username.value.trim();
//	const emailValue = EmailIN.value.trim();
//	const passwordValue = password.value.trim();
//	const password2Value = password2.value.trim();
	
	if(userValue === '') {
		setErrorFor(username);
	} else {
		setSuccessFor(username);
	}
}


function setErrorFor(input) {
	const user = input.parentElement;
    const small = box1.querySelector('small');
    small.style.visibility = "visible";
    small.style.color = "red";
	
}

function setSuccessFor(input) {
	const user = input.parentElement;
	user.style.borderColor = "green";
}
	