 const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getHours()).padStart(2,"0");
    const seconds = String(date.getUTCSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}


getClock();
setInterval(getClock,1000);









/*
Interval = 매 시간 일어나야 하는 무언가
setTimeout = 사용자가 지정한 시간에 맞춰 코드를 실행

padEnd(2,"0");      =   문자의 길이가 2자리보다 작을 경우 앞에 0을 추가
padStart(2,"0");    =   문자의 길이가 2보다 작을 경우 뒤에 0을 추가
*/