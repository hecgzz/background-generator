var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");


document.addEventListener("DOMContentLoaded",initialGradient);

function initialGradient(){
    css.textContent = "linear-gradient(to right, red, yellow);";
}

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    css.textContent = body.style.background + ";";
}

// function pickRandomColor(){
//     var o = Math.round, r = Math.random, s= 255;
//     color1.value = "rgb("+  o(r()*s) + "," +  o(r()*s) + "," + o(r()*s) + ")";
//     color2.value = "rgb("+  o(r()*s) + "," +  o(r()*s) + "," + o(r()*s) + ")";
// }

// function pickRandomColor(){
//     var x = Math.floor(Math.random()*256);
//     var y = Math.floor(Math.random()*256);
//     var z = Math.floor(Math.random()*256);
//     var a = Math.floor(Math.random()*256);
//     var b = Math.floor(Math.random()*256);
//     var c = Math.floor(Math.random()*256);
//     body.style.background = "linear-gradient(to right, rgb(" + x + "," + y+ "," + z +"), rgb("+ a+ "," + b + "," + c + "));";
//     // console.log(x,y,z,a,b,c);
// }

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function pickRandomColor(){
    var color1 = getRandomColor();
    var color2 = getRandomColor();
    // linear-gradient(to right, rgb(30, 102, 30), rgb(120, 28, 28));
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";

    // body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

randomBtn.addEventListener("click",pickRandomColor);

