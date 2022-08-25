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