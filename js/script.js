// Переключення карточок навичок

let activeSpet = 0;
function stepFunc(num) {
    document.querySelectorAll(".skill__item").forEach((item, i) => {
        item.style.opacity = 0;
        
        document.querySelectorAll(".skill__icon img")[i].style.opacity = "0";
        document.querySelectorAll(".skill__point")[i].style.transform = "scale(1)";
        // document.querySelectorAll(".skill__point")[i].style.background = "#0000005e";
        document.querySelectorAll(".skill__point img")[i].style.transform = "scale(1)";
        setTimeout(() => {
            item.style.maxHeight = "0px";
            item.style.display = "none";
            document.querySelectorAll(".skill__icon img")[i].style.display = "none";
        }, 600);
    });
    setTimeout(() => {
        document.querySelectorAll(".skill__item")[num].style.display = "flex";
        setTimeout(() => {
            document.querySelectorAll(".skill__item")[num].style.maxHeight = "600px";
        }, 100);
        document.querySelectorAll(".skill__point")[num].style.background = "none";
        document.querySelectorAll(".skill__point img")[num].style.transform = "scale(2)";

        document.querySelectorAll(".skill__icon img")[num].style.display = "block";
        setTimeout( () => {
            document.querySelectorAll(".skill__icon img")[num].style.opacity = "1";
        }, 100 )
        setTimeout(() => {
            document.querySelectorAll(".skill__item")[num].style.opacity = 1;
        }, 400);
        document.querySelector(".skill__count p").textContent = `${num + 1}/${document.querySelectorAll(".skill__point").length}`;
    }, 700);
}
stepFunc(activeSpet);

document.querySelector(".skill__prev").addEventListener("click", (event) => {
    if (activeSpet == 0) {

    } else {
        activeSpet = activeSpet - 1;
        stepFunc(activeSpet);
    }
});

document.querySelector(".skill__next").addEventListener("click", (event) => {
    if (activeSpet == document.querySelectorAll(".skill__point").length - 1) {

    } else {
        activeSpet = activeSpet + 1;
        stepFunc(activeSpet);
    }
});

document.querySelectorAll(".skill__point").forEach((item, i) => {
    item.addEventListener("click", (event) => {
        if (i == activeSpet) {
            
        } else {
            activeSpet = i;
            stepFunc(activeSpet);
        }
    });
});

// Скролл по кнопкам

function handleButtonClick() {
    document.querySelector(".first").scrollIntoView({ block: "start", behavior: "smooth" });
}
document.querySelector(".header__logo").addEventListener("click", handleButtonClick);

function handleButtonClick1() {
    document.querySelector(".skill").scrollIntoView({ block: "start", behavior: "smooth" });
}
document.querySelectorAll(".header__link")[0].addEventListener("click", handleButtonClick1);
document.querySelectorAll(".menu__link")[0].addEventListener("click", handleButtonClick1);

function handleButtonClick2() {
    document.querySelector(".project").scrollIntoView({ block: "start", behavior: "smooth" });
}
document.querySelectorAll(".header__link")[1].addEventListener("click", handleButtonClick2);
document.querySelectorAll(".menu__link")[1].addEventListener("click", handleButtonClick2);

function handleButtonClick3() {
    document.querySelector(".contact").scrollIntoView({ block: "start", behavior: "smooth" });
}
document.querySelectorAll(".header__link")[2].addEventListener("click", handleButtonClick3);
document.querySelectorAll(".menu__link")[2].addEventListener("click", handleButtonClick3);

// Мобільне меню

document.querySelector('.menu__close').addEventListener('click', event => {
    document.querySelector('.menu__body').style.marginLeft = '-320px';
    setTimeout( () => {
        document.querySelector('.menu').style.opacity = '0';
        document.querySelector('.header__svg').style.marginLeft = '0px';
        document.querySelector('.header__menu').style.background = '#00ff9dd7';
        setTimeout( () => {
            document.querySelector('.menu').style.display = 'none';
        }, 600 )
    }, 600 )
})

document.querySelector('.menu').addEventListener('click', event => {
    if ( event.target == document.querySelector('.menu') ) {
        document.querySelector('.menu__body').style.marginLeft = '-320px';
        setTimeout( () => {
            document.querySelector('.menu').style.opacity = '0';
            document.querySelector('.header__svg').style.marginLeft = '0px';
            document.querySelector('.header__menu').style.background = '#00ff9dd7';
            setTimeout( () => {
                document.querySelector('.menu').style.display = 'none';
            }, 600 )
        }, 600 )
    }
})

document.querySelector('.header__menu').addEventListener('click', event => {
    document.querySelector('.menu').style.display = 'block';
    document.querySelector('.header__svg').style.marginLeft = '-40px';
    document.querySelector('.header__menu').style.background = '#000';
    setTimeout( () => {
        document.querySelector('.menu').style.opacity = '1';
        setTimeout( () => {
            document.querySelector('.menu__body').style.marginLeft = '0px';
        }, 600 )
    }, 200 )
})

// Параллакс ефект

// const firstPicture = document.querySelector('.first__right');
// const firstText = document.querySelector('.first__left');
// const firstBody = document.querySelector('.first__body');
// document.querySelector('.first').addEventListener('mousemove', (event) => {
//     let widthScreen = ( document.querySelector('html').offsetWidth / 2 ) - event.clientX;
//     let heightScreen = ( document.querySelector('html').clientHeight / 2 ) - event.clientY;

//     firstPicture.style.transform = `translate(${widthScreen / 70}px, ${heightScreen / 60}px)`;
//     firstBody.style.transform = `translate(${widthScreen / 70}px, ${heightScreen / 60}px)`;

//     document.querySelector('.first__html').style.transform = `translate(${widthScreen / -40}px, ${heightScreen / -30}px)`;
//     document.querySelector('.first__css').style.transform = `translate(${widthScreen / -50}px, ${heightScreen / -90}px)`;
//     document.querySelector('.first__js').style.transform = `translate(${widthScreen / -90}px, ${heightScreen / -20}px)`;

//     document.querySelector('.first__html').style.filter = 'blur(6px)';
//     document.querySelector('.first__css').style.filter = 'blur(6px)';
//     document.querySelector('.first__js').style.filter = 'blur(6px)';

//     document.querySelector('.first__html').style.opacity = '0.8';
//     document.querySelector('.first__css').style.opacity = '0.8';
//     document.querySelector('.first__js').style.opacity = '0.8';

//     setTimeout( () => {
//         document.querySelector('.first__html').style.filter = 'blur(0px)';
//         document.querySelector('.first__css').style.filter = 'blur(0px)';
//         document.querySelector('.first__js').style.filter = 'blur(0px)';
//         document.querySelector('.first__html').style.opacity = '1';
//         document.querySelector('.first__css').style.opacity = '1';
//         document.querySelector('.first__js').style.opacity = '1';
//     }, 100 )
// });

const firstPicture = document.querySelector('.first__right');
const firstText = document.querySelector('.first__left');
const firstBody = document.querySelector('.first__body');
document.querySelector('.first').addEventListener('mousemove', (event) => {
    let widthScreen = ( document.querySelector('html').offsetWidth / 2 ) - event.clientX;
    let heightScreen = ( document.querySelector('html').clientHeight / 2 ) - event.clientY;
    
    
    document.querySelector('.first__html').style.transform = `translate(${widthScreen / -40}px, ${heightScreen / -30}px)`;
    document.querySelector('.first__css').style.transform = `translate(${widthScreen / -50}px, ${heightScreen / -90}px)`;
    document.querySelector('.first__js').style.transform = `translate(${widthScreen / -90}px, ${heightScreen / -20}px)`;
    
    // firstPicture.style.transform = `translate(${widthScreen / 70}px, ${heightScreen / 60}px)`;
    // firstBody.style.transform = `translate(${widthScreen / 70}px, ${heightScreen / 60}px)`;
    
    document.querySelector('.first__html').style.filter = 'blur(6px)';
    document.querySelector('.first__css').style.filter = 'blur(6px)';
    document.querySelector('.first__js').style.filter = 'blur(6px)';

    document.querySelector('.first__html').style.opacity = '0.8';
    document.querySelector('.first__css').style.opacity = '0.8';
    document.querySelector('.first__js').style.opacity = '0.8';

    setTimeout( () => {
        document.querySelector('.first__html').style.filter = 'blur(0px)';
        document.querySelector('.first__css').style.filter = 'blur(0px)';
        document.querySelector('.first__js').style.filter = 'blur(0px)';
        document.querySelector('.first__html').style.opacity = '1';
        document.querySelector('.first__css').style.opacity = '1';
        document.querySelector('.first__js').style.opacity = '1';
    }, 100 )
});

// Переключення карточки слайдом

let clientSlideYStart = 0;
let clientSlideYEnd = 0;
let clientSlideXStart = 0;
let clientSlideXEnd = 0;
let slideStartPoint = 0;
document.querySelector('.skill__table').addEventListener("touchstart", event => {
    slideStartPoint = event.changedTouches[0].clientX;
    clientSlideYStart = event.changedTouches[0].clientY;
    clientSlideXStart = event.changedTouches[0].clientX;
});
let slideEndPoint = 0;
document.querySelector('.skill__table').addEventListener("touchend", event => {
    slideEndPoint = event.changedTouches[0].clientX;
    let resultSlide = slideStartPoint - slideEndPoint;
    if ( slideStartPoint > slideEndPoint && resultSlide > 80 ) {
        if ( activeSpet < ( document.querySelectorAll('.skill__item').length - 1 ) ) {
            activeSpet = activeSpet + 1;
            stepFunc(activeSpet);
        }
    } else if ( slideStartPoint < slideEndPoint && resultSlide < -80 ) {
        if ( activeSpet > 0 ) {
            activeSpet = activeSpet - 1;
            stepFunc(activeSpet);
        }
    }
    document.querySelector('.skill__table').style.transform = 'translateX(0px)';
    document.querySelector('.skill__table').style.opacity = '1';
});
document.querySelector('.skill__table').addEventListener("touchmove", event => {
    if ( slideStartPoint > ( event.changedTouches[0].clientX + 50 ) ) {
        document.querySelector('.skill__table').style.transform = 'translateX(-10px)';
        document.querySelector('.skill__table').style.opacity = '0.8';
    } else if ( slideStartPoint < ( event.changedTouches[0].clientX - 50 ) ) {
        document.querySelector('.skill__table').style.transform = 'translateX(10px)';
        document.querySelector('.skill__table').style.opacity = '0.8';
    }
    let dx = Math.abs(event.changedTouches[0].clientX - clientSlideXStart);
    let dy = Math.abs(event.changedTouches[0].clientY - clientSlideYStart);
    if (dx > dy) {
        event.preventDefault();
    }
})

// Пасхалка

const secretCode = "пеніс";
let input = "";
document.addEventListener("keydown", (event) => {
    input += event.key.toLowerCase();
    if (!secretCode.startsWith(input)) {
        input = "";
        return;
    }
    if (input === secretCode) {
        document.querySelector('.pepe__body p').textContent = 'негайно покажи пеніс';
        document.querySelector('.pepe').style.display = 'flex';
        input = "";
    }
});
document.querySelector('.pepe').addEventListener('click', event => {document.querySelector('.pepe').style.display = 'none';})