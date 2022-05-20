window.onload = () => {
    document.getElementById('load').style.opacity = '0';
    document.body.style.overflowY = "visible";
    hide();
}
const hide = () => document.getElementById('load').style.display = 'none';


var win_height = window.innerHeight;

document.querySelectorAll('.footer')[0].style.minHeight = "" + (win_height) + "px";
document.querySelectorAll('.footer .overly')[0].style.minHeight = "" + (win_height) + "px";
document.querySelectorAll('.price')[0].style.minHeight = "" + (win_height) + "px";

window.onresize = function () {
    var win_height = window.innerHeight;

    document.querySelectorAll('.price')[0].style.minHeight = "" + (win_height) + "px";
    document.querySelectorAll('.footer')[0].style.minHeight = "" + (win_height) + "px";
    document.querySelectorAll('.footer .overly')[0].style.minHeight = "" + (win_height) + "px";
}
function Up() {
    window.scrollTo(0, 0);
}