let body = document.querySelector('body');
let scroll = document.querySelector('.scroll');



window.addEventListener('scroll', function(){
    let totalHeight = body.clientHeight;
    let fromTop = window.scrollY;
    let internalHeight = window.innerHeight;
    let subHeight = totalHeight - internalHeight;

    let rslt = Math.round((100 / subHeight) * fromTop);

    scroll.style.background = `conic-gradient(#6D214F, #6D214F ${rslt}%, red, red ${rslt}%)`;

});

let nav = document.querySelector('nav');
let initValue = 0;

window.addEventListener('scroll', ()=>{
    if(initValue > window.scrollY){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
    initValue = window.scrollY;
})

window.onscroll = function() {myFunction()};

function myFunction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) *100;
    document.getElementById("mybar").style.width = scrolled + "%";
}