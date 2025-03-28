var element = document.querySelector('.order__input-phone');
var maskOptions = {
    mask: '+380(00)000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);

document.querySelector('.order__name').textContent = document.querySelector('.product__name').textContent;
document.querySelector('.order__price').textContent = document.querySelector('.product__price span').textContent;
document.querySelector('.order__image img').src = document.querySelector('.product__image img').src;

document.querySelector('.product__button').addEventListener('click', event => {
    document.querySelector('.order').style.display = 'flex';
    setTimeout( () => {
        document.querySelector('.order').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.order__body').style.display = 'block';
            setTimeout( () => {
                document.querySelector('.order__body').style.opacity = '1';
            }, 200 )
        }, 200 )
    }, 100 )
})

document.querySelector('.order__close').addEventListener('click', event => {
    document.querySelector('.order__body').style.opacity = '0';
    document.querySelector('.order').style.opacity = '0';
    setTimeout( () => {
        document.querySelector('.order__body').style.display = 'none';
        document.querySelector('.order').style.display = 'none';
    }, 600 )
})

// Отправка заявки покупки

window.onload = function() {

    (function() {
        emailjs.init({
          publicKey: "qjOUw-1Gy7g4q0AyJ",
        });
    })();
    function sendEmail2() {
    // const serviceID = "service_w060uv6";
    // const templateID = "template_cxru0ys";
    const serviceID = "xxx";
    const templateID = "xxx";
    const params = {
        message: `Товар - ${document.querySelector('.order__name').textContent}\nВартість - ${document.querySelector('.order__price').textContent}\nІмя - ${document.querySelector('.order__input-name').value}\nНомер телефона - ${document.querySelector('.order__input-phone').value}\nПовідомлення - ${document.querySelector('.order__input-message').value}\n`
    };
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.querySelector('.order__input-name').value = '';
            document.querySelector('.order__input-message').value = '';
            document.querySelector('.order__input-phone').value = '+38_(__)___-__-__';
    
            document.querySelector('.order__body').style.opacity = '0';
            setTimeout( () => {
                document.querySelector('.order__body').style.display = 'none';
                document.querySelector('.order__success').style.display = 'flex';
                setTimeout( () => {
                    document.querySelector('.order__success').style.opacity = '1';
                }, 600 )
            }, 600 )
        })
        .catch(err => {
            console.error("Failed to send email:", err);
            document.querySelector('.order__input-name').value = '';
            document.querySelector('.order__input-message').value = '';
            document.querySelector('.order__input-phone').value = '+38_(__)___-__-__';
    
            document.querySelector('.order__body').style.opacity = '0';
            setTimeout( () => {
                document.querySelector('.order__body').style.display = 'none';
                document.querySelector('.order__fail').style.display = 'flex';
                setTimeout( () => {
                    document.querySelector('.order__fail').style.opacity = '1';
                }, 600 )
            }, 600 )
            }
        );
    }
    
    let userName2 = document.querySelector('.order__input-name');
    userName2.addEventListener('input',() => {
        userName2.value = userName2.value.replace(/[a-z0-9]/gi,'');
        userName2.value = userName2.value.replace(/[-+=*,.!@#$%^&*()_\/]/,'');
    });
    
    let userPhone2 = document.querySelector('.order__input-phone');
    userPhone2.addEventListener('input',() => {
        userPhone2.value = userPhone2.value.replace(/[а-яa-z]/gi,'');
    });
    document.querySelector('.order__button').addEventListener('click', event => {
        if ( userName2.value.length < 2 ) {
            document.querySelector('.order__warning p').textContent = "Введіть Ваше ім'я";
            document.querySelector('.order__warning p').style.opacity = '1';
            userName2.style.background = '#ffbdbd';
            setTimeout( () => {
                document.querySelector('.order__warning p').style.opacity = '0';
                userName2.style.background = '#fff';
            }, 2000 )
        } else if ( userPhone2.value.includes('_') || userPhone2.value == '' || (userPhone2.value.replace(/[\+\-\_\(\)/]/g, '')).length < 12 ) {
            document.querySelector('.order__warning p').textContent = "Введіть Ваш діючий номер телефону";
            document.querySelector('.order__warning p').style.opacity = '1';
            userPhone2.style.background = '#ffbdbd';
            setTimeout( () => {
                document.querySelector('.order__warning p').style.opacity = '0';
                userPhone2.style.background = '#fff';
            }, 2000 )
        } else {
            sendEmail2();
        }
    })
    
};

