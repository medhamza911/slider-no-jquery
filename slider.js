function removeActiveSlide() {
    document.querySelector(".slide.active").className = "slide";
}
function addLoopBack(){
    if(document.querySelector(".slider .slide:last-child").className.indexOf("active")!==-1)
        document.querySelectorAll(".slide").item(0).className = "slide loopback";
    else if (document.querySelectorAll(".slide").item(0).className.indexOf("active")===-1)
        document.querySelectorAll(".slide").item(0).className = "slide";
}
document.querySelector(".slider .arrowLeft").onclick = function () {
    var prev = document.querySelector(".slide.active").previousElementSibling;
    removeActiveSlide();
    if (prev.className.indexOf("slide") !== -1)
        prev.className = "slide active";
    else
        document.querySelector(".slider .slide:last-child").className = "slide active";
    addLoopBack();
};
document.querySelector(".slider .arrowRight").onclick = function () {
    var next = document.querySelector(".slide.active").nextElementSibling;
    removeActiveSlide();
    if (next !== null)
        next.className = "slide active";
    else
        document.querySelectorAll(".slide").item(0).className = "slide active";
    addLoopBack();
};