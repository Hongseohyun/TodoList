
const loginInput = document.querySelector("#login-form input");
const loginFrom = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // 변수


function onLoginSubmit(event){
    // event의 기본 행동을 막는다 (submit하면 브라우저가 새로고침하는 행동을 막는다)
    event.preventDefault();
    // form에 hidden class를 추가
    loginFrom.classList.add(HIDDEN_CLASSNAME);
    // loginInput값을 변수 username에 추가
    const username = loginInput.value;  // 값
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
    
}
const dates = new Date();
const hours = dates.getHours();
let hello;
if(7>=hours && hours>=11){
    hello = "Good Morning"
}else if(hours>11){
    hello = "Good Afternoon"
}else{
    hello = "Good night"
};
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `${hello}, ${username}!`
    // hidden class 삭제
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const saveUsername = localStorage.getItem(USERNAME_KEY);


if(saveUsername === null){
    // show the form
    loginFrom.classList.remove(HIDDEN_CLASSNAME);
    loginFrom.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings();

}








/*
localStorage에 값을 저장
localStorage.setItem("변수명", "값");

localStorage에 저장되어있는 값을 출력
localStorage.getItem("변수명");

localStorage의 값을 삭제
localStorage.removeItem("변수명");
*/