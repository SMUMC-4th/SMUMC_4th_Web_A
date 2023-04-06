const my = document.querySelector('#my');
const myMenu = document.querySelector('.my-menu');

my.addEventListener('click', () => {
    myMenu.classList.toggle('active');
});



const categoryList = document.querySelector(".category-list")
const categoryButton = document.querySelectorAll(".category-button");
const leftButton = document.querySelector("#arrow-left");
const rightButton = document.querySelector("#arrow-right");
const categoryCount = categoryButton.length;
let currentIdx = 0;

function moveCategory(num) {
    categoryList.style.left = -num * 102 + 'px';
    currentIdx = num;
}

rightButton.addEventListener('click', function() {
    if(currentIdx < categoryCount - 15) {
        moveCategory(currentIdx + 10);
    }
});

leftButton.addEventListener('click', function() {
    if(currentIdx > 0) {
        moveCategory(currentIdx - 10);
    }
});



const footeButton = document.querySelector('.footer-menu-button');
const footerMenu = document.querySelector('.footer-menu');
const content = document.querySelector('#content');

footeButton.addEventListener('click', () => {
    footerMenu.classList.toggle('active');
    content.classList.toggle('active');
});



const footerCloseButton = document.querySelector('.footer-close-button');

footerCloseButton.addEventListener('click', () => {
    footerMenu.classList.toggle('active');
    content.classList.toggle('active');
});