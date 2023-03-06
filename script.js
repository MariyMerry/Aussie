const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const headerMenu = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_burger')
        headerMenu.classList.toggle('_open') 
        document.body.classList.toggle('_lock'); 
    });
}   