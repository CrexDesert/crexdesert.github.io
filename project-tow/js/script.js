document.querySelectorAll('.service__number').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.service__number').forEach( (item, i) => {
            document.querySelectorAll('.service__number')[i].classList.remove('service__number-active');
            document.querySelectorAll('.service__card')[i].classList.remove('service__card-active');
        })

        document.querySelectorAll('.service__number')[i].classList.add('service__number-active');
        document.querySelectorAll('.service__card')[i].classList.add('service__card-active');

        if ( i > 7 ) {
            document.querySelectorAll('.service__number')[i - 7].classList.add('service__number-active');
            document.querySelectorAll('.service__card')[i - 7].classList.add('service__card-active');
        } else {
            document.querySelectorAll('.service__number')[i + 7].classList.add('service__number-active');
            document.querySelectorAll('.service__card')[i + 7].classList.add('service__card-active');
        }

    })
})

const swiper = new Swiper('.swiper', {
    speed: 500,
    spaceBetween: 20,
    loop: true,
    loopedSlides: 20,
    slidesPerView: 3,
    autoplay: {
        delay: 6000,
        stopLastSlide: false,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: false,
    breakpoints: {
        240: {
          slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
      },
});

let activeFaq = [false, false, false, false, false, false];
document.querySelectorAll('.faq__top').forEach( (item, i) => {
    item.addEventListener('click', event => {
        if ( activeFaq[i] == false ) {
            document.querySelectorAll('.faq__text')[i].style.maxHeight = '600px';
            document.querySelectorAll('.faq__text')[i].style.padding = '20px 20px';
            document.querySelectorAll('.faq__top svg')[i].style.transform = 'rotate(180deg)';
            activeFaq[i] = true;
        } else {
            document.querySelectorAll('.faq__text')[i].style.maxHeight = '0px';
            document.querySelectorAll('.faq__text')[i].style.padding = '0px 20px';
            document.querySelectorAll('.faq__top svg')[i].style.transform = 'rotate(0deg)';
            activeFaq[i] = false;
        }
    })
})

let activeMenu = false;
document.querySelector('.header__menu').addEventListener('click', event => {
    if ( activeMenu == false ) {
        document.querySelector('.header__menu').style.background = '#fff';
        document.querySelector('.header__open').style.top = '40px';
        document.querySelector('.header__close').style.top = '0px';
        document.querySelector('.header__list').style.maxHeight = '800px';
        activeMenu = true;
    } else {
        document.querySelector('.header__menu').style.background = '#feca40';
        document.querySelector('.header__open').style.top = '0px';
        document.querySelector('.header__close').style.top = '-40px';
        document.querySelector('.header__list').style.maxHeight = '0px';
        activeMenu = false;
    }
})

let activeMenu2 = false;
document.querySelectorAll('.header__menu')[1].addEventListener('click', event => {
    if ( activeMenu2 == false ) {
        document.querySelectorAll('.header__menu')[1].style.background = '#fff';
        document.querySelectorAll('.header__open')[1].style.top = '40px';
        document.querySelectorAll('.header__close')[1].style.top = '0px';
        document.querySelectorAll('.header__list')[1].style.maxHeight = '800px';
        activeMenu2 = true;
    } else {
        document.querySelectorAll('.header__menu')[1].style.background = '#feca40';
        document.querySelectorAll('.header__open')[1].style.top = '0px';
        document.querySelectorAll('.header__close')[1].style.top = '-40px';
        document.querySelectorAll('.header__list')[1].style.maxHeight = '0px';
        activeMenu2 = false;
    }
})

document.querySelectorAll(".header__page").forEach( (item, i) => {
    item.addEventListener('click', event => {

        if ( i == 0 ) {
            document.querySelector(".main").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 1 ) {
            document.querySelector(".adv").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 2 ) {
            document.querySelector(".service").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 3 ) {
            document.querySelector(".order").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 4 ) {
            document.querySelector(".location").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 5 ) {
            document.querySelector(".filter").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 6 ) {
            document.querySelector(".training").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 7 ) {
            document.querySelector(".price").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 8 ) {
            document.querySelector(".review").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 9 ) {
            document.querySelector(".faq").scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 10 ) {
            document.querySelectorAll(".main")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 11 ) {
            document.querySelectorAll(".adv")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 12 ) {
            document.querySelectorAll(".service")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 13 ) {
            document.querySelectorAll(".order")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 14 ) {
            document.querySelectorAll(".location")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 15 ) {
            document.querySelectorAll(".filter")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 16 ) {
            document.querySelectorAll(".training")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 17 ) {
            document.querySelectorAll(".price")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 18 ) {
            document.querySelectorAll(".review")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        } else if ( i == 19 ) {
            document.querySelectorAll(".faq")[1].scrollIntoView({ block: "start", behavior: "smooth" });
        }

    })
} )

document.querySelector('.header__logo').addEventListener('click', event => document.querySelector(".main").scrollIntoView({ block: "start", behavior: "smooth" }) );
document.querySelector('.footer__logo').addEventListener('click', event => document.querySelector(".main").scrollIntoView({ block: "start", behavior: "smooth" }) );

document.querySelectorAll('.header__logo')[1].addEventListener('click', event => document.querySelectorAll(".main")[1].scrollIntoView({ block: "start", behavior: "smooth" }) );
document.querySelectorAll('.footer__logo')[1].addEventListener('click', event => document.querySelectorAll(".main")[1].scrollIntoView({ block: "start", behavior: "smooth" }) );

setInterval( () => {
    document.querySelector('.call__light').style.opacity = '1';
    document.querySelector('.call__light').style.left = '100%';

    document.querySelectorAll('.call__light')[1].style.opacity = '1';
    document.querySelectorAll('.call__light')[1].style.left = '100%';

    document.querySelector('.promo__light').style.opacity = '1';
    document.querySelector('.promo__light').style.left = '100%';

    document.querySelectorAll('.promo__light')[1].style.opacity = '1';
    document.querySelectorAll('.promo__light')[1].style.left = '100%';
    setTimeout( () => {
        document.querySelector('.call__light').style.opacity = '0';
        document.querySelector('.promo__light').style.opacity = '0';

        document.querySelectorAll('.call__light')[1].style.opacity = '0';
        document.querySelectorAll('.promo__light')[1].style.opacity = '0';
        setTimeout( () => {
            document.querySelector('.call__light').style.left = '-100%';
            document.querySelector('.promo__light').style.left = '-100%';

            document.querySelectorAll('.call__light')[1].style.left = '-100%';
            document.querySelectorAll('.promo__light')[1].style.left = '-100%';
        }, 1000 )
    }, 1000 )
}, 3000 )

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function checkVisibility() {
    const promoCall = document.querySelector('.promo__call');
    const call = document.querySelector('.call');
    if (!isElementInViewport(promoCall)) {
        call.style.display = 'flex';
    } else {
        call.style.display = 'none';
    }
}
window.addEventListener('scroll', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);

function isElementInViewport2(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function checkVisibility2() {
    const promoCall = document.querySelectorAll('.promo__call')[1];
    const call = document.querySelectorAll('.call')[1];
    if (!isElementInViewport2(promoCall)) {
        call.style.display = 'flex';
    } else {
        call.style.display = 'none';
    }
}
window.addEventListener('scroll', checkVisibility2);
document.addEventListener('DOMContentLoaded', checkVisibility2);

document.querySelectorAll('.header__lang')[0].addEventListener('click', event => {
    document.querySelector('.ua').style.display = 'none';
    document.querySelector('.en').style.display = 'block';
})

document.querySelectorAll('.footer__lang')[0].addEventListener('click', event => {
    document.querySelector('.ua').style.display = 'none';
    document.querySelector('.en').style.display = 'block';
})

document.querySelectorAll('.header__lang')[3].addEventListener('click', event => {
    document.querySelector('.ua').style.display = 'block';
    document.querySelector('.en').style.display = 'none';
})

document.querySelectorAll('.footer__lang')[3].addEventListener('click', event => {
    document.querySelector('.ua').style.display = 'block';
    document.querySelector('.en').style.display = 'none';
})

// eng

document.querySelector('.ua').style.display = 'none';
document.querySelector('.en').style.display = 'block';