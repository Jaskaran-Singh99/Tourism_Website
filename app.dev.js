"use strict";

var ham = document.querySelector('.hamburger-menu');
var hamSpan = document.querySelector('.hamburger');
var nav = document.querySelector('.navbar');
var navItem = document.querySelector('.navMenu');
var navitems = document.querySelectorAll('.nav-item');
var showTrue = false;
ham.addEventListener('click', toggle);

function toggle() {
  if (!showTrue) {
    hamSpan.classList.add('open');
    nav.classList.add('open');
    navItem.classList.add('open');
    navitems.forEach(function (items) {
      return items.classList.add('open');
    });
    showTrue = true;
  } else {
    hamSpan.classList.remove('open');
    nav.classList.remove('open');
    navItem.classList.remove('open');
    navitems.forEach(function (items) {
      return items.classList.remove('open');
    });
    showTrue = false;
  }
}

var firstImage = document.getElementById('input-1');
var secondImage = document.getElementById('input-2');
var thirdImage = document.getElementById('input-3');
setInterval(imageSlider, 1000000000);

function imageSlider() {
  var time = new Date();
  var seconds = time.getSeconds();

  if (seconds == 10) {
    firstImage.checked = true;
  }

  if (seconds == 30) {
    secondImage.checked = true;
  }

  if (seconds == 50) {
    thirdImage.checked = true;
  }
} // Card animation


function animation() {
  var element = document.querySelector('.animate');
  var distanceViewport = element.getBoundingClientRect().top;
  var distanceScroll = window.innerHeight / 1.2;

  if (distanceViewport < distanceScroll) {
    element.classList.add('fade');
  }
}

window.addEventListener('scroll', animation);