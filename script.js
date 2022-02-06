const mainMenu = document.querySelector('.Wrapper');
const showMenu = document.querySelector('.burgerDiv');
const closeMenu = document.querySelector('#closeMenu')
let index = 1;
showMenu.addEventListener('click',() =>{
   
        if(index == 1)
        {
            mainMenu.style.display = 'block';
            index = 0;
        }else if (index == 0){
            mainMenu.style.display = 'none';
            index = 1;
        }
});


