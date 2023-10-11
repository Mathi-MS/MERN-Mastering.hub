var nameCheck = false  
var passcheck = false
var emailCheck = false
//selecting toggle 
var off = document.getElementById("off")
var on = document.getElementById("on")
//selecting background
var black =document.getElementById("black")
var left = document.getElementById("left")
var white = document.querySelector(".white")
//selecting input
var username = document.querySelector(".username")
var password = document.querySelector(".password")
var email = document.querySelector(".email")
//selecting labels
var usernamelabel = document.getElementById("usernamelabel")
var usernamelabelo = document.getElementById("usernamelabelo")
//btn
var btn = document.getElementById("btn")
//selecting image
var imagee = document.getElementById("imagee")

btn.addEventListener("click",function(){
  if(nameCheck == true && passcheck  == true && emailCheck == true){
    imagee.setAttribute("src","../images/username.gif")
  }else{
    if(nameCheck == true){
      imagee.setAttribute("src","../images/wrong.gif") 
      password.style.border="solid 4px red"
      username.style.border="solid 4px green"
      email.style.border="solid 4px red"
    }else if(passcheck == true){
      imagee.setAttribute("src","../images/wrong.gif") 
      password.style.border="solid 4px green"
      username.style.border="solid 4px red"
      email.style.border="solid 4px red"

    }
    else if(emailCheck == true){
      imagee.setAttribute("src","../images/wrong.gif") 
      password.style.border="solid 4px red"
      username.style.border="solid 4px red"
      email.style.border="solid 4px green"
    }
    else{
      imagee.setAttribute("src","../images/wrong.gif") 
      username.style.border="solid 4px red"
      password.style.border="solid 4px red"
      email.style.border="solid 4px red"
    }

   }
})

off.addEventListener("click",function(){
  black.style.backgroundColor="black"
  left.style.backgroundColor="black"
  off.style.visibility="hidden"
  on.style.visibility="visible"
  white.style.color="white"
})
on.addEventListener("click",function(){
  black.style.backgroundColor="white"
  left.style.backgroundColor="black"
  on.style.visibility="hidden"
  off.style.visibility="visible"
  white.style.color="black"
})

username.addEventListener("keyup",function(){
  entervalue = username.value.trim()
  if(entervalue){
    if(entervalue.length>3){
      username.style.border="solid 4px green"
      usernamelabel.style.visibility="hidden"
      nameCheck = true
      imagee.setAttribute("src","../images/right.gif")
    }
    else{
      username.style.border="solid 4px red"
      usernamelabel.style.visibility="visible"
      usernamelabel.innerText="Atleast 3 Characters"
      nameCheck = false
      imagee.setAttribute("src","../images/right.gif")
    }
  }else{
    username.style.border="solid 4px red"
    usernamelabel.style.visibility="visible"
    usernamelabel.innerText="Enter  Firstname"
    nameCheck = false
    imagee.setAttribute("src","../images/right.gif")
  }
})
// ------------- lastname 
email.addEventListener("keyup",function(){
  entervalue = email.value.trim()
  if(entervalue){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(entervalue.match(mailformat)){
      email.style.border="solid 4px green"
      emaillabel.style.visibility="hidden"
      emailCheck = true
      imagee.setAttribute("src","../images/right.gif")
    }
    else{
      email.style.border="solid 4px red"
      emaillabel.style.visibility="visible"
      emaillabel.innerText="Enter Valid Email"
      emailCheck = false
      imagee.setAttribute("src","../images/right.gif")
    }
  }else{
    email.style.border="solid 4px red"
    emaillabel.style.visibility="visible"
    emaillabel.innerText="Enter  Email"
    emailCheck = false
    imagee.setAttribute("src","../images/right.gif")
  }
})


// ----- password
password.addEventListener("keyup",function(){
  entervaluep = password.value.trim()
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if(entervaluep){
    if(entervaluep.match(passw)){
      password.style.border="solid 4px green"
      passwordlabel.style.visibility="hidden"
      passcheck = true
      imagee.setAttribute("src","../images/eyeclosed.gif")
    }
    else{
      password.style.border="solid 4px red"
      passwordlabel.style.visibility="visible"
      passwordlabel.innerText="Password Contains Symbol,digit,Uppercase"
      passcheck = false
      imagee.setAttribute("src","../images/eyeclosed.gif")
    }
  }else{
    password.style.border="solid 4px red"
    passwordlabel.style.visibility="visible"
    passwordlabel.innerText="Enter  Password"
    passcheck = false
    imagee.setAttribute("src","../images/eyeclosed.gif")
  }
})