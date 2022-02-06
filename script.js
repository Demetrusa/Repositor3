const mainMenu = document.querySelector('.Wrapper');
const showMenu = document.querySelector('.burgerDiv');
const closeMenu = document.querySelector('#closeMenu')

showMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
   mainMenu.style.top = '-100%';
}
