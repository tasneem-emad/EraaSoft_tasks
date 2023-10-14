const menuBar = document.querySelector('.menu__bar');
const menuList = document.querySelector('.list');

function toggleMenu(menuBar, menuList) {
    menuBar.addEventListener('click', function() {
        menuList.classList.toggle('toggle__menu__bar');
    });
}
toggleMenu(menuBar, menuList);
