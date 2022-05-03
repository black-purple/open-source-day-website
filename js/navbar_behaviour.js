document.body.onscroll = () => {
    let header = document.querySelector('header');
    let toUp = document.querySelector('[href="#anchor"]');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        header.style.backgroundColor = '#1c1b2299';
        header.style.transition = 'background .1s ease-in';
        toUp.style.display = 'inline';
    }else{
        header.style.backgroundColor = '#1c1b2200';
        header.style.transition = 'background .1s ease-out';
        toUp.style.display = 'none';
    }
}
let mobileNav = document.querySelector('#nav-mobile');
let showNav = document.querySelector('#showNav');
let hideNav = document.querySelector('#hideNav');
showNav.onclick = () => {
    mobileNav.parentElement.style.inset = '.4rem .3rem .4rem .4rem';
    hideNav.style.display = 'inline';
    showNav.style.display = 'none';
}

hideNav.onclick = () =>{
    hideNav.parentElement.style.inset = '.4rem .3rem auto .4rem'
    showNav.style.display = 'inline';
    hideNav.style.display = 'none';
}