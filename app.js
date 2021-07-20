const ham = document.querySelector('.hamburger-menu');
const hamSpan = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');
const navItem = document.querySelector('.navMenu');
const navitems = document.querySelectorAll('.nav-item');

let showTrue = false;

ham.addEventListener('click', toggle);

function toggle(){
    if(!showTrue){
        hamSpan.classList.add('open');
        nav.classList.add('open');
        navItem.classList.add('open');
        navitems.forEach(items => items.classList.add('open'));
        showTrue = true;
    }
    else{
        hamSpan.classList.remove('open');
        nav.classList.remove('open');
        navItem.classList.remove('open');
        navitems.forEach(items => items.classList.remove('open'));
        showTrue = false;
    }
}


const firstImage = document.getElementById('input-1');
const secondImage = document.getElementById('input-2');
const thirdImage = document.getElementById('input-3');

setInterval(imageSlider, 1000);

function imageSlider(){
    let time =  new Date();
    let seconds = time.getSeconds();

    if(seconds == 10){
        firstImage.checked = true;
    }
    if(seconds == 30){
        secondImage.checked = true;
    }
    if(seconds == 50){
        thirdImage.checked = true;
    }
}

// Card animation


function animation(){
        
    let element = document.querySelector('.animate')
    let distanceViewport = element.getBoundingClientRect().top;
    let distanceScroll = window.innerHeight / 1.7;

    if(distanceViewport < distanceScroll){
        element.classList.add('fade');
    }
}

window.addEventListener('scroll', animation);
