const navToggle  = document.querySelector('#navToggle')
const nav  = document.querySelector('.menu');


navToggle.addEventListener('click',() => {
    nav.classList.toggle('open');
})