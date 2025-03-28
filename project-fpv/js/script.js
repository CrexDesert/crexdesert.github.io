let activeMenu = false;
document.querySelector('.header__menu').addEventListener('click', event => {
    if ( activeMenu == false ) {
        document.querySelector('.menu').style.display = 'block'
        setTimeout( () => {
            document.querySelector('.menu').style.opacity = '1'
            setTimeout( () => {
                document.querySelector('.menu__body').style.right = '0px';
            }, 600 )
        }, 100 )
        document.querySelector('.header__line-two').style.opacity = '0';
        document.querySelector('.header__line-one').style.transform = 'rotate(-45deg) translate(-50%, -50%)';
        document.querySelector('.header__line-one').style.left = '11px';
        document.querySelector('.header__line-three').style.transform = 'rotate(45deg) translate(-50%, -50%)';
        activeMenu = true;
    } else {
        document.querySelector('.header__line-two').style.opacity = '1';
        document.querySelector('.header__line-one').style.transform = 'none';
        document.querySelector('.header__line-one').style.left = '0px';
        document.querySelector('.header__line-three').style.transform = 'none';
        document.querySelector('.menu__body').style.right = '-320px';
        setTimeout( () => {
            document.querySelector('.menu').style.opacity = '0'
            setTimeout( () => {
                document.querySelector('.menu').style.display = 'none'
            }, 600 )
        }, 400 )
        activeMenu = false;
    }
})
document.querySelector('.menu').addEventListener('click', event => {
    if ( event.target === document.querySelector('.menu') ) {
        document.querySelector('.header__line-two').style.opacity = '1';
        document.querySelector('.header__line-one').style.transform = 'none';
        document.querySelector('.header__line-one').style.left = '0px';
        document.querySelector('.header__line-three').style.transform = 'none';
        document.querySelector('.menu__body').style.right = '-320px';
        setTimeout( () => {
            document.querySelector('.menu').style.opacity = '0'
            setTimeout( () => {
                document.querySelector('.menu').style.display = 'none'
            }, 600 )
        }, 400 )
        activeMenu = false;
    }
})



var element = document.getElementById('phone');
var maskOptions = {
    mask: '+380(00)000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);

(function() {
    emailjs.init({
      publicKey: "qjOUw-1Gy7g4q0AyJ",
    });
})();
function sendEmail() {
// const serviceID = "service_w060uv6";
// const templateID = "template_ia2oenh";
const serviceID = "xxx";
const templateID = "xxx";
const params = {
    message: `Імя - ${document.querySelector('.contact__input-name').value}\nНомер телефона - ${document.querySelector('.contact__input-phone').value}\nПовідомлення - ${document.querySelector('.contact__input-message').value}\n`
};
emailjs.send(serviceID, templateID, params)
    .then(res => {
        // alert("Email sent successfully!");
        document.querySelector('.contact__warning p').textContent = "Заявка була відправлена!";
        document.querySelector('.contact__warning p').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.contact__warning p').style.opacity = '0';
        }, 4000 )
        document.querySelector('.contact__input-name').value = '';
        document.querySelector('.contact__input-message').value = '';
        document.querySelector('.contact__input-phone').value = '+38_(__)___-__-__';
    })
    .catch(err => {
        console.error("Failed to send email:", err)}
    );
}
document.querySelector('.contact__button').addEventListener('click', event => {

    // sendEmail();
})

let userName = document.querySelector('.contact__input-name');
userName.addEventListener('input',() => {
    userName.value = userName.value.replace(/[a-z0-9]/gi,'');
    userName.value = userName.value.replace(/[-+=*,.!@#$%^&*()_\/]/,'');
});

let userPhone = document.querySelector('.contact__input-phone');
userPhone.addEventListener('input',() => {
    userPhone.value = userPhone.value.replace(/[а-яa-z]/gi,'');
});
document.querySelector('.contact__button').addEventListener('click', event => {
    if ( userName.value.length < 2 ) {
        document.querySelector('.contact__warning p').textContent = "Введіть Ваше ім'я";
        document.querySelector('.contact__warning p').style.opacity = '1';
        userName.style.background = '#ffbdbd';
        setTimeout( () => {
            document.querySelector('.contact__warning p').style.opacity = '0';
            userName.style.background = '#fff';
        }, 2000 )
    } else if ( userPhone.value.includes('_') || userPhone.value == '' || (userPhone.value.replace(/[\+\-\_\(\)/]/g, '')).length < 12 ) {
        document.querySelector('.contact__warning p').textContent = "Введіть Ваш діючий номер телефону";
        document.querySelector('.contact__warning p').style.opacity = '1';
        userPhone.style.background = '#ffbdbd';
        setTimeout( () => {
            document.querySelector('.contact__warning p').style.opacity = '0';
            userPhone.style.background = '#fff';
        }, 2000 )
    } else {
        sendEmail();
    }
})