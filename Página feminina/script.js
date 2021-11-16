const menu = document.querySelector('.menu')
const btnMenuOpen = document.querySelector('.btnMenu_open')
const btnMenuClose = document.querySelector('.btnMenu_close')

btnMenuOpen.addEventListener('click', function(){
    menu.classList.add('menu_open')
})

btnMenuClose.addEventListener('click', function(){
    menu.classList.remove('menu_open')
})

function leiaMais1(){
    var seta1 = document.getElementById('seta-1')
    var maisTexto1 = document.getElementById('mais-1');

    if(maisTexto1.style.display == "inline"){
        seta1.style.transform = "rotate(-90deg)"
        maisTexto1.style.display = "none";
        
    }else {
        seta1.style.transform = "rotate(0)"
        maisTexto1.style.display = "inline";
    }
}

function leiaMais2(){
    var seta2 = document.getElementById('seta-2')
    var maisTexto2 = document.getElementById('mais-2');

    if(maisTexto2.style.display == "inline"){
        seta2.style.transform = "rotate(-90deg)"
        maisTexto2.style.display = "none";
        
    }else {
        seta2.style.transform = "rotate(0)"
        maisTexto2.style.display = "inline";
    }
}

function leiaMais3(){
    var seta3 = document.getElementById('seta-3')
    var maisTexto3 = document.getElementById('mais-3');

    if(maisTexto3.style.display == "inline"){
        seta3.style.transform = "rotate(-90deg)"
        maisTexto3.style.display = "none";
        
    }else {
        seta3.style.transform = "rotate(0)"
        maisTexto3.style.display = "inline";
    }
}