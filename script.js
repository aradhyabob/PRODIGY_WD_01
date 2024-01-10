var btn = document.getElementById("btn");
var constellation = document.getElementById("constellation");
var menu = document.getElementById("menu");

function toggleBtn(){
    btn.classList.toggle("active");
    constellation.classList.toggle("on");
}

document.getElementById("menu").addEventListener("mouseover", function() {
    document.getElementById("menu").style.backgroundColor = "rgb(140, 140, 241)";
});
    
document.getElementById("menu").addEventListener("mouseout", function() {
    document.getElementById("menu").style.backgroundColor = "black";
});