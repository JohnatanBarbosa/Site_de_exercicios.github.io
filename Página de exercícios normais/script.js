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

function leiaMais4(){
    var seta4 = document.getElementById('seta-4')
    var maisTexto4 = document.getElementById('mais-4');

    if(maisTexto4.style.display == "inline"){
        seta4.style.transform = "rotate(-90deg)"
        maisTexto4.style.display = "none";
        
    }else {
        seta4.style.transform = "rotate(0)"
        maisTexto4.style.display = "inline";
    }
}

function leiaMais5(){
    var seta5 = document.getElementById('seta-5')
    var maisTexto5 = document.getElementById('mais-5');

    if(maisTexto5.style.display == "inline"){
        seta5.style.transform = "rotate(-90deg)"
        maisTexto5.style.display = "none";
        
    }else {
        seta5.style.transform = "rotate(0)"
        maisTexto5.style.display = "inline";
    }
}

function leiaMais6(){
    var seta6 = document.getElementById('seta-6')
    var maisTexto6 = document.getElementById('mais-6');

    if(maisTexto6.style.display == "inline"){
        seta6.style.transform = "rotate(-90deg)"
        maisTexto6.style.display = "none";
        
    }else {
        seta6.style.transform = "rotate(0)"
        maisTexto6.style.display = "inline";
    }
}