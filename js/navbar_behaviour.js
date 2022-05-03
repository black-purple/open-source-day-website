function applyStyle(apply,elt){
    if (apply){
        elt.style.backgroundColor = '#1c1b2299';
        elt.style.backdropFilter = 'blur(10px)';
        elt.style.transition = 'background .1s ease-in';
    }else{
        elt.style.backgroundColor = '#1c1b2200';
        elt.style.transition = 'background .1s ease-out';
        elt.style.backdropFilter = 'none';
    }
}
let header = document.querySelector('header');
document.body.onscroll = () => {
    let toUp = document.querySelector('[href="#anchor"]');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        applyStyle(true, header);
        toUp.style.display = 'inline';
    }else{
        applyStyle(false, header);
        toUp.style.display = 'none';
    }
}
let mobileNav = document.querySelector('#nav-mobile');
let showNav = document.querySelector('#showNav');
let hideNav = document.querySelector('#hideNav');
showNav.onclick = () => {
    header.style.inset = '.4rem .3rem .4rem .4rem';
    hideNav.style.display = 'inline';
    showNav.style.display = 'none';
    applyStyle(true, header);
}

hideNav.onclick = () =>{
    hideNav.parentElement.style.inset = '.4rem .3rem auto .4rem'
    showNav.style.display = 'inline';
    hideNav.style.display = 'none';
    applyStyle(false, header);
}