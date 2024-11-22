const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

$(function () {
    $('.reviews__content').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="47" viewBox="0 0 15 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.26387 23.0415L13.8416 1.68815C14.0703 1.30019 14.0703 0.67045 13.8416 0.28152C13.6129 -0.106122 13.2421 -0.106122 13.0134 0.28152L0.176456 22.0758C0.0122303 22.3545 -0.0340986 22.7577 0.0374694 23.1065C-0.00517765 23.427 0.0469892 23.7767 0.19397 24.0259L12.9808 45.7349C13.2086 46.1219 13.578 46.1219 13.8058 45.7349C14.0335 45.3482 14.0335 44.7208 13.8058 44.3342L1.26387 23.0415Z" fill="#EC644B"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="15" height="47" viewBox="0 0 15 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7358 23.0726L1.1581 1.71879C0.92944 1.33151 0.92944 0.701757 1.1581 0.313161C1.38686 -0.074824 1.75765 -0.074824 1.9863 0.313161L14.8233 22.1071C14.9875 22.3863 15.0338 22.7893 14.9622 23.138C15.0049 23.4585 14.9527 23.8079 14.8057 24.0575L2.01892 45.7662C1.79107 46.1535 1.42176 46.1535 1.19391 45.7662C0.966176 45.3795 0.966176 44.7518 1.19391 44.3655L13.7358 23.0726Z" fill="#EC644B"/></svg></button>',
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    // variableWidth: true,
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    })
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 2700) {
        $('.page-up').fadeIn();
    } else {
        $('.page-up').fadeOut();
    }
});