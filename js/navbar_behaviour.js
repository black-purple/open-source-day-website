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
let btn = document.querySelector('header button');

btn.onclick = ()=>{
    if (document.querySelector('nav').style.display == 'none'){
        document.querySelector('nav').style.display = 'flex';
    }else{
        document.querySelector('nav').style.display = 'none';
    }
}
applyStyle(true, header);