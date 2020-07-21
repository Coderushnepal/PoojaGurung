function showPassword() {
    var inputPass = document.getElementById('password-area');
    var statusPass = document.getElementById('eyeicon');
    if(inputPass.type == 'password')
    {
        inputPass.type = 'text';
        statusPass.className = 'fa fa-eye';
        statusPass.title = "Hide Password";
    }
    else
    {
        inputPass.type = 'password';
        statusPass.className = 'fa fa-eye-slash'; 
        statusPass.title = "Show Password";  
    }
 }