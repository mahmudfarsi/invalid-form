//variable
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_2 = document.getElementById("password2");



//ADDEVENTLISTENER

form.addEventListener("submit", e => {
  e.preventDefault();
  invalidate();
});



//SETERROR
 const setError =  function(element,message){
  const inputBox = element.parentElement;
  const displayError =  inputBox.querySelector(".error");

  displayError.innerText = message;
  inputBox.classList.add("error")
  inputBox.classList.remove("success");
}

//SETSUCCESS
const setSuccess = function(element){
  const inputBox = element.parentElement;
  const displayError = inputBox.querySelector(".error");

  displayError.innerText = "";
  inputBox.classList.add("success");
  inputBox.classList.remover("error");
}


//
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


const invalidate = function(){
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password_2.value.trim();



if(usernameValue === ""){
  setError(username,"please type username")
}
else{
  setSuccess(username);
}

if(emailValue===""){
  setError(email,"please type a Email")
}
else if(!isValidEmail(emailValue)){
  setError(email,"provide email")
}
else{
  setSuccess(email);
}

if(passwordValue===""){
  setError(password,"type password")
}
else if(passwordValue.length < 10){
  setError(password,"more than 10 character")
}
else{
  setSuccess(password)
}

if(password2Value===""){
  setError(password_2,"type password")
}
else if(password2Value.value!==passwordValue.value){
  setError(password_2,"no confirm")
}
else{
  setSuccess(password_2)
}



};