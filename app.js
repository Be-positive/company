const mobileBtn = document.getElementById('mobile-cta')
nav = document.querySelector('nav')
mobileBtnExit = document.getElementById('mobile-exit');
const blur1 = document.querySelector('main');
const blur2 = document.querySelector('header');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
    blur1.style.filter = 'blur(5px)';
    blur2.style.filter = 'blur(5px)';
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
    blur1.style.filter = 'blur(0px)';
    blur2.style.filter = 'blur(0px)';
})

const navbarEvents = document.querySelector('.events-navbar');
const navbarContainer = document.querySelector('.container-navbar');
const dropDown = document.getElementById('drop-down')
const dropUp = document.getElementById('drop-up')


navbarContainer.addEventListener('click', function (e) {
    if (`${e.detail % 2}` == 1) {
        navbarEvents.style.display = "flex";
        dropDown.style.display = "none";
        dropUp.style.display = "inline";
    } else {
        navbarEvents.style.display = "none";
        dropDown.style.display = "inline";
        dropUp.style.display = "none";
    }
})

