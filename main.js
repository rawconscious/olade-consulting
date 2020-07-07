const toggle_menu = () => {
    const hamburger = document.querySelector('.hamburger')
    const burger = document.querySelector('.fa-bars');
    const close_mark = document.querySelector('.fa-times');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        burger.classList.toggle('in-active');
        burger.classList.toggle('active');

        close_mark.classList.toggle('active');
        close_mark.classList.toggle('in-active');

        menu.classList.toggle('active');
    })
}

toggle_menu();