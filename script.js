const openMenu = document.querySelector('.navbar .openMenu');
const closeMenu = document.querySelector('.navbar .closeMenu');
const menu = document.querySelector('.navbar .menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    menu.style.display = 'flex';
    menu.style.top = '0';
}

function close() {
    menu.style.top = '-100%';
}