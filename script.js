let functionCall;
let maxWidth = 500;
let counter=0;
let headerElement;
let underlineElement;
let navbar;

document.addEventListener("DOMContentLoaded", function() {
    navbar = document.getElementById("navbar");
    document.getElementById("navbar").style.visibility=hidden;
    underlineElement = document.getElementById("underlineIcon");
    underlineElement.style.width=0;
    headerElement = document.querySelector(".header");
    functionCall = setInterval(increaseWidth,5);
});

function increaseWidth(){
    if (counter < maxWidth){
        counter++;
        underlineElement.style.width=counter;
    }
    else{
        moveIcon();
    }
}

function moveIcon(){
    clearInterval(functionCall);
    headerElement.style.top = "8%";
    headerElement.style.left = "2%";
    headerElement.style.maxWidth = "50px";
    underlineElement.style.opacity=0;
}