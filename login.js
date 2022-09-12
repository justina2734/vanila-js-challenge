const loginForm=document.querySelector(".login-form");
const loginInput=document.querySelector(".login-form input");
const greeting=document.querySelector("#greeting")

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY= "username";

function paintGreetings(username){
    greeting.innerText="안녕하세요, " + username + "님";
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function loginSubmit(event){
    event.preventDefault();
    const username=loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username); 
}

loginForm.addEventListener("submit", loginSubmit)

const savedUsername=localStorage.getItem("USERNAME_KEY");

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit)
} else{
    paintGreetings(savedUsername);
}