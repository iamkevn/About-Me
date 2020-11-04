let toggleBtn = document.querySelector('.toggle-btn');


function change(e) {
    document.querySelector('.toggle').classList.toggle("bckgrnd-color");
    document.querySelector('.hero').classList.toggle("hero-bckgrnd-color");
    document.querySelector('.name').classList.toggle("name-color");
    document.querySelector('.hello').classList.toggle("hello-color");
    document.querySelector('.fa-angle-down').classList.toggle("hello-color");
    document.querySelector('.role').classList.toggle("role-color");
    document.querySelector('.footer').classList.toggle("footer-color");
    document.querySelector('body').classList.toggle("body-dark");

    document.querySelector('.fa-github').classList.toggle("white");
    document.querySelector('.fa-medium').classList.toggle("white");
    document.querySelector('.fa-envelope').classList.toggle("white");
}


toggleBtn.addEventListener('click', change);

