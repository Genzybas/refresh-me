
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var pickimage = "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", pickimage);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var pickimage2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", pickimage2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h2").innerHTML = "😂play one win!";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h2").innerHTML = "😎play 2 win!";
}
else{
    document.querySelector("h2").innerHTML = "😜Draw";
}