
window.onload = () => {
    document.getElementById('load').style.opacity = '0';
    document.body.style.overflowY = "visible";
    hide();
}
const hide = () => document.getElementById('load').style.display = 'none';
var o = true;


function OUT() {
    if (o) {
        document.getElementById('out').style.transition = " all 0.3s ease-in-out";
        document.getElementById('out').style.opacity = "1";
        document.getElementById('out').style.display = "flex";
        var itm = document.querySelectorAll('.blo li');
        for (var i = 0; i < itm.length; i++)
            itm[i].style.opacity = "1";

        o = false;
    }
    else {
        document.getElementById('out').style.transition = "all 0.3s 0.9s ease-in-out";
        document.getElementById('out').style.opacity = "0";
        document.getElementById('out').style.display = "none";
        var itm = document.querySelectorAll('.blo li');
        for (var i = 0; i < itm.length; i++)
            itm[i].style.opacity = "0";
        o = true;
    }

}
var itm = document.querySelectorAll('.blo li');

for (var i = 0; i < itm.length; i++) {
    itm[i].onclick = function () {

        document.getElementById('out').style.transition = "all 0.3s 0.9s ease-in-out";
        document.getElementById('out').style.opacity = "0";
        document.getElementById('out').style.display = "none";
        for (var i = 0; i < itm.length; i++)
            itm[i].style.opacity = "0";
        o = true;
    }
}
var win_height = window.innerHeight;
var nav_height = document.getElementById('Nav_bar').offsetHeight;
var h = "" + (win_height - nav_height) + "px";
document.getElementById('Header').style.height = h;
document.querySelectorAll('.overly')[0].style.height = h;
document.querySelectorAll('.meet')[0].style.height = "" + (win_height * 1.5) + "px";
document.querySelectorAll('.meet .overly')[0].style.height = "" + (win_height * 1.5) + "px";
document.querySelectorAll('.winning')[0].style.maxHeight = "" + (win_height) + "px";
document.querySelectorAll('.studio')[0].style.height = "" + (win_height * 1.35) + "px";
document.querySelectorAll('.studio .overly')[0].style.height = "" + (win_height * 1.35) + "px";
document.querySelectorAll('.footer')[0].style.minHeight = "" + (win_height) + "px";
document.querySelectorAll('.footer .overly')[0].style.minHeight = "" + (win_height) + "px";


window.onresize = function () {
    var win_height = window.innerHeight;
    var nav_height = document.getElementById('Nav_bar').offsetHeight;
    var h = "" + (win_height - nav_height) + "px";
    document.getElementById('Header').style.height = h;
    document.querySelectorAll('.overly')[0].style.height = h;
    document.querySelectorAll('.meet')[0].style.height = "" + (win_height * 1.5) + "px";
    document.querySelectorAll('.meet .overly')[0].style.height = "" + (win_height * 1.5) + "px";
    document.querySelectorAll('.winning')[0].style.maxHeight = "" + (win_height) + "px";
    document.querySelectorAll('.studio')[0].style.height = "" + (win_height * 1.35) + "px";
    document.querySelectorAll('.studio .overly')[0].style.height = "" + (win_height * 1.35) + "px";
    document.querySelectorAll('.footer')[0].style.minHeight = "" + (win_height) + "px";
    document.querySelectorAll('.footer .overly')[0].style.minHeight = "" + (win_height) + "px";
}

function React(x, y) {
    var R = document.querySelectorAll('.over .ic div i')[x];

    if (parseInt(R.nextElementSibling.innerHTML) == y) {
        R.style.color = "#F44336";
        var n = parseInt(R.nextElementSibling.innerHTML) + 1;
        R.nextElementSibling.innerHTML = n;
    }

    else {
        R.style.color = "rgb(255, 246, 218)";
        var n = parseInt(R.nextElementSibling.innerHTML) - 1;
        R.nextElementSibling.innerHTML = n;
    }

}

function Up() {
    window.scrollTo(0, 0);
}