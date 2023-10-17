function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var introPosition = introText.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.2;

    if (introPosition < screenPosition) {
        introText.classList.add('side-text-appear');
    }
    if (imagePosition < screenPosition) {
        sideImage.classList.add('sideImage-appear');
    }
}

window.addEventListener('scroll', scrollAppear);
///////
var burger = document.querySelector('.burger');
var burgerLinks = document.querySelector('.nav-links');
var burgerLines = document.querySelector('.burger');
var navBar = document.querySelector('nav');
var gallery = document.querySelectorAll('.production-gallery img');
var navLinks = document.querySelectorAll('.nav-links a');


window.addEventListener('scroll', function () {
    for (var x = 0; x < gallery.length; x++) {
        if (gallery[x].getBoundingClientRect().top < 700) {
            gallery[x].classList.add('reveal-img');
        }
    }

});


if(window.outerWidth > 768){
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 70) {
            navBar.classList.add('nav-animation');
        } else {
            navBar.classList.remove('nav-animation');
        }
    
    });
}

burger.addEventListener('click', burgerNavigation);




function burgerNavigation() {
    burgerLinks.classList.toggle('burger-animation');
    burger.getElementsByTagName('div')[0].classList.toggle('line1-animate');
    burger.getElementsByTagName('div')[1].classList.toggle('line2-animate');
    burger.getElementsByTagName('div')[2].classList.toggle('line3-animate');

}
