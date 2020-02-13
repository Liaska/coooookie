document.querySelector("input").value = "#0000ff"
document.querySelector("input").onchange = function () {
document.querySelector(".classic").style.fill=document.querySelector("input").value
}