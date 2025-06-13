// Инициализация слайдеров

const swiper1 = new Swiper('.promo', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    breakpoints: {
    280: {
        slidesPerView: 1,
    },
    400: {
        slidesPerView: 'auto',
    }
  }
});

const swiper2 = new Swiper('.stream__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    grabCursor: true
});

const swiper3 = new Swiper('.intro__auth', {
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiper4 = new Swiper('.join__slider', {
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// Скролл к форме по клику на кнопки

document.querySelectorAll('.auth__scroll').forEach( item => {
    item.addEventListener('click', event => {
        document.querySelector(".intro__auth").scrollIntoView({ block: "center", behavior: "smooth" });
    })
})

// Валидация даты рождения

const input = document.getElementById('date');
input.addEventListener('input', function(e) {
    let value = input.value.replace(/\D/g, '').slice(0, 8);
    if (value.length >= 3 && value.length <= 4) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    } else if (value.length >= 5) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4);
    }
    input.value = value;
});

// Согласие с правилами

let activeAgree = false;

document.querySelector('.intro__agree').addEventListener('click', event => {
    if ( !activeAgree ) {
        document.querySelector('.intro__check svg').style.display = "block";
        activeAgree = true;
    } else {
        document.querySelector('.intro__check svg').style.display = "none";
        activeAgree = false;
    }
})

// Выбор пола

document.querySelectorAll('.intro__variable').forEach( item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.intro__variable').forEach( item => {
            item.classList.remove('intro__variable-active');
        } )
        item.classList.add('intro__variable-active');
    })
} )

// Отображение пароля

let showPassword = false;
document.querySelector('.intro__eye').addEventListener('click', event => {
    if ( !showPassword ) {
        document.querySelector('.intro__eye').classList.add('intro__eye-active');
        document.querySelector('.intro__input-password').type = "text";
        showPassword = true;
    } else {
        document.querySelector('.intro__eye').classList.remove('intro__eye-active');
        document.querySelector('.intro__input-password').type = "password";
        showPassword = false;
    }
})