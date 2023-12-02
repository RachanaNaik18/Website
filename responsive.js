function sql1(){
    document.getElementById("sql").style.display = "block";
}
function sql2(){
    document.getElementById("sql").style.display = "none";
}
function wd1(){
    document.getElementById("wd").style.display = "block";
}
function wd2(){
    document.getElementById("wd").style.display = "none";
}
function js1(){
    document.getElementById("js").style.display = "block";
}
function js2(){
    document.getElementById("js").style.display = "none";
}
function java1(){
    document.getElementById("java").style.display = "block";
}
function java2(){
    document.getElementById("java").style.display = "none";
}
function py1(){
    document.getElementById("py").style.display = "block";
}
function py2(){
    document.getElementById("py").style.display = "none";
}

function change(){
    document.getElementById("hov").style.color="Green"
}

function changeback(){
    document.getElementById("hov").style.color="Black"
}

burger = document.querySelector('.burger')
navbar = document.querySelector(".navbar")
rightnav = document.querySelector(".rightnav")
list = document.querySelector('.list');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-navresp');
})