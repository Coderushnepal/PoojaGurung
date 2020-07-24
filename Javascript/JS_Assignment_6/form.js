//alert("connected");


    var box = document.getElementById("box1");
    document.getElementById("box1").style.boxShadow = "2px 2px 2px 2px grey";
    document.getElementById("box1").style.margin = "100px auto";
    
   

    //Create heading..........................................................................
    var head = document.createElement("h1");
    var headText = document.createTextNode("Register With Us"); 
    head.style.textAlign = "center";  
    head.style.padding = "30px 0 10px 0";
    head.appendChild(headText);
    box.appendChild(head);

   

    //Username Label...............................................................................
    var label = document.createElement("LABEL");
    label.style.margin = "10px 20px 10px 20px";
    var lbusername = document.createTextNode("Username");  
    label.appendChild(lbusername);    
    box.appendChild(label); 

    var newElem = document.createElement("BR");
    box.appendChild(newElem);

    //Create Text Username
    var user = document.createElement("INPUT");
    user.style.margin = "0 20px 0 20px";
    //userName.style.borderColor = "red";
    user.setAttribute("id", "userName");
    user.setAttribute("type", "text");
    user.setAttribute("placeholder", "Enter Username");
    box.appendChild(user);

    //Error Msg 
    
    var paraUN = document.createElement("SMALL");
    paraUN.style.visibility = "hidden"; 
    paraUN.style.margin = "0 0 0 20px"; 
    
    var txtParaUN = document.createTextNode("Username must be at least 3 characters"); 
     
    paraUN.appendChild(txtParaUN);
    box.appendChild(paraUN); 

    var newElem = document.createElement("BR");
    box.appendChild(newElem); 

    //Create Email Label............................................................................
    var Emaillabel = document.createElement("LABEL");
    Emaillabel.style.margin = "10px 20px 10px 20px";
    var lbEmail = document.createTextNode("Email");  
    Emaillabel.appendChild(lbEmail);
    box.appendChild(Emaillabel);    

    var newElem = document.createElement("BR");
    box.appendChild(newElem);

    //Create Email Textbox
    var EmailIN = document.createElement("INPUT");
    EmailIN.style.margin = "0 20px 0 20px";
    EmailIN.setAttribute("type", "email");
    EmailIN.setAttribute("placeholder", "Enter Email");
    box.appendChild(EmailIN);

    //Email Error message
    var paraEmail = document.createElement("SMALL"); 
    paraEmail.style.visibility = "hidden"; 
    paraEmail.style.margin = "0 0 0 20px";   
    var txtEmail = document.createTextNode("Email is not valid");  
    paraEmail.appendChild(txtEmail);
    box.appendChild(paraEmail); 

    var newElem = document.createElement("BR");
    box.appendChild(newElem);

    //Create Password Label.................................................................................
    var labelPass = document.createElement("LABEL");
    labelPass.style.margin = "10px 20px 10px 20px";
    var lbpassword = document.createTextNode("Password");  
    labelPass.appendChild(lbpassword);
    box.appendChild(labelPass);    

    var newElem = document.createElement("BR");
    box.appendChild(newElem);

    //Create Password Textbox
    var Password = document.createElement("INPUT");
    Password.style.margin = "0 20px 0 20px";
    Password.setAttribute("type", "password");
    Password.setAttribute("placeholder", "Enter Password");
    box.appendChild(Password);

    //Password Error message
    var para = document.createElement("SMALL"); 
    para.style.visibility = "hidden";
    para.style.margin = "0 0 0 20px";   
    var txtPara = document.createTextNode("Password must be at least 6 characters");  
    para.appendChild(txtPara);
    box.appendChild(para); 

    var newElem = document.createElement("BR");
    box.appendChild(newElem);
    
    //create Password2 Label...........................................................................................
    var labelPass2 = document.createElement("LABEL");
    labelPass2.style.margin = "10px 20px 10px 20px";
    var lbpass2 = document.createTextNode("Confirm Password");  
    labelPass2.appendChild(lbpass2);
    box.appendChild(labelPass2);    

    var newElem = document.createElement("BR");
    box.appendChild(newElem);

    //Create Password2 Textbox
    var Password2 = document.createElement("INPUT");
    Password2.style.margin = "0 20px 0 20px";
    Password2.setAttribute("type", "password");
    Password2.setAttribute("placeholder", "Enter Confirm Password");
    box.appendChild(Password2);

    //Password2 Error Msg
    var paraPass2 = document.createElement("SMALL"); 
    paraPass2.style.visibility = "hidden";
    paraPass2.style.margin = "0 0 0 20px";   
    var txtParaPass2 = document.createTextNode("Password is required");  
    paraPass2.appendChild(txtParaPass2);
    box.appendChild(paraPass2); 


    //create SUBMIT BUTTON..........................................................................................
    var btn = document.createElement("INPUT");
    btn.style.margin = "30px 20px 10px 20px";
    btn.style.padding = "10px 10px 10px 10px";
    btn.style.display = "block";
    btn.style.width = "80%";
    btn.setAttribute("id", "btn-submit");
    btn.setAttribute("type", "submit");
    //btn.setAttribute("text", "SUBMIT");
    box.appendChild(btn);    

    