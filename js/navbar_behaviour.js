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
        toUp.style.display = 'inline';
    }else{
        toUp.style.display = 'none';
    }
}

document.body.onscroll = () => {
    let header = document.querySelector('header');
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
        header.style.transition = 'inset .3s ease-in-out';
        header.style.inset = '.4rem .3rem auto .4rem';
    }else{
        header.style.transition = 'inset .3s ease-in-out';
        header.style.inset = '70vh auto auto .4rem';
    }
}

applyStyle(true, header);