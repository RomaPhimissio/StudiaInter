const burgerMenu = document.querySelector('.header__burger-wrap');
if (burgerMenu) {
    const headerNav = document.querySelector('.header__nav');
    const pageBody = document.querySelector('.page-body');
    const btnSend = document.querySelector('.header__btn-send-wrap');
    const headerMain = document.querySelector('.header');
    const headerInfo = document.querySelector('.header__info-block');
    const headerColor = document.querySelector('.header__color-news');
    const headerBurgerElem = document.querySelector('.header__burger-news');
    const headerLogo = document.querySelector('.header__logo-link');
    const headerBlog = document.querySelector('.header-blog');
    burgerMenu.addEventListener("click", function (e) {
        burgerMenu.classList.toggle('active');
        headerNav.classList.toggle('active');
        pageBody.classList.toggle('lock');
        btnSend.classList.toggle('active');
        headerMain.classList.toggle('active');
        headerInfo.classList.toggle('active');
        headerColor.classList.toggle('active');
        headerBurgerElem.classList.toggle('active');
        headerLogo.classList.toggle('active');
        headerBlog.classList.toggle('active');
    })
}

// ! Swiper Slide
// инициилизируем слайдер
new Swiper('.slide__list-wrap', {

    // клавиатура
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    // ширина слайда
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            spaceBetween: 26,
        },

        768: {
            spaceBetween: 20,
        },

        1024: {
            spaceBetween: 40,
        },

        1440: {
            spaceBetween: 48,
        }
    }
})

new Swiper('.showing__swiper', {

    // клавиатура
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    // ширина слайда
    slidesPerView: 'auto',
})