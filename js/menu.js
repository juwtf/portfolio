var ul = document.querySelector('.menu ul');
var menuBtn = document.querySelector('.menuMobile i');

function openMenu() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}