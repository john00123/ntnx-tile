document.getElementById("right").onclick = myFunction;
function myFunction() {
document.getElementsByClassName("title1")[0].style.display = "none";
document.getElementsByClassName("title2")[0].style.display = "block";
document.getElementsByClassName("alpha")[0].style.display = "none";
document.getElementsByClassName("beta")[0].style.display = "block";
}

document.getElementById("left").onclick = myFunction1;
function myFunction1() {
document.getElementsByClassName("title2")[0].style.display = "none";
document.getElementsByClassName("title1")[0].style.display = "block";
document.getElementsByClassName("beta")[0].style.display = "none";
document.getElementsByClassName("alpha")[0].style.display = "block";
}
