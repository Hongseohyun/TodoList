const date = new Date();
const hours = date.getHours();

const images = ["morning.png", "afternoon.jpg", "night.png"];

let chosenImage;
if(7>=hours && hours>=11){
    chosenImage= images[0]
    console.log(hours)
}else if(hours>11){
    chosenImage= images[1]
    console.log(hours)
}else{
    chosenImage= images[2]
    console.log(hours)
};

// 요소를 생성
const bgImage = document.createElement("img");
bgImage.src = `IMG/${chosenImage}`;

document.body.appendChild(bgImage);