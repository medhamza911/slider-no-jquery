function addLoopBack(all) {
    if (isActive(all.item(all.length - 1)))
        all.item(0).className = "slide loopback";
    else if (!isActive(all.item(0)))
        all.item(0).className = "slide";
}

function isActive(ele) {
    return ele.className.indexOf("active") !== -1;
}

function nextElement(back) {
    back = back === undefined ? false : back;
    var all = document.querySelectorAll(".slide"), next,i;
    for (i = 0; i < all.length; i++)
        if (back) {// default is false
            if (i < (all.length - 1) && isActive(all.item(i + 1)))
                next = all.item(i);
            if (isActive(all.item(0)))
                next = all.item(all.length - 1);
        } else {//next
            if (i > 0 && isActive(all.item(i - 1)))
                next = all.item(i);
            if (isActive(all.item(all.length - 1)))
                next = all.item(0);
        }
    document.querySelector(".slide.active").className = "slide";
    next.className = "slide active";
    addLoopBack(all);
    autoplay();
}

function autoplay(){
    if(typeof autoplayTimeout !== "undefined")
    clearTimeout(autoplayTimeout);
    autoplayTimeout=setTimeout(function (){
        nextElement();
        autoplay();
    },5000);
}
autoplay();

document.querySelector(".slider .arrowLeft").onclick = function () {
    nextElement(true);
};
document.querySelector(".slider .arrowRight").onclick = function () {
    nextElement();
};