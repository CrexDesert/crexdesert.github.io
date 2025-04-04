const BIN_ID = "67ed640f8561e97a50f77ccd";  
const API_KEY = "$2a$10$gPRsEs17pPwMVDwK53/5Nut0ohIXvz8kG8hI8c1ugx4Dit/JWR.Vq"; 
const url = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

async function saveData(data) {
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log("Data saved:", result);
}


const users = {
    users: [
        {
            "login": "Crex",
            "mail": "mak7pan@gmail.com",
            "password": "zabeda80",
            "status": "admin",
            "avatar": "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/6734c8df768161001d967e25.png"
          },
          {
            "login": "client",
            "mail": "justclient@gmail.com",
            "password": "password",
            "status": "client",
            "avatar": "https://t4.ftcdn.net/jpg/01/66/10/03/360_F_166100342_KbTGIRrnrlwGDZSXSMpH3zfn2dxyTKae.jpg"
          }
    ]
};

// saveData({ data: users });

// {
//     "data": {
//       "users": [
//         {
//           "login": "Баба капа",
//           "mail": "mak7pan@gmail.com",
//           "password": "zabeda80",
//           "status": "admin",
//           "avatar": "https://media.istockphoto.com/id/1185227982/photo/funny-grandmother-portraits-80s-style-outfit-trapstar-taking-a-selfie-on-colored-backgrounds.jpg?s=612x612&w=0&k=20&c=5JXkZtNsrAwt6Vfu-3JFgvdiuuSdtmDgXZm_FGnDwIg="
//         },
//         {
//           "login": "Паша Дуров",
//           "mail": "test@gmail.com",
//           "password": "111222",
//           "status": "client",
//           "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3-Swbo20jQ8fGn_awJEC64zhXoqAqx4Rgw&s"
//         },
//         {
//           "login": "Crex",
//           "mail": "test@gmail.com",
//           "password": "111222",
//           "status": "client",
//           "avatar": "https://i1.sndcdn.com/artworks-M6IRKVUQHXgzmebt-fFME5w-t500x500.jpg"
//         },
//         {
//           "login": "Cyber",
//           "mail": "test@gmail.com",
//           "password": "111222",
//           "status": "client",
//           "avatar": "https://as2.ftcdn.net/v2/jpg/08/21/90/01/1000_F_821900132_d7CBa4SIBjVwyhaPQjZMtm7RLG5bFNGW.jpg"
//         }
//       ],
//       "post": [
//         {
//           "author": "Баба капа",
//           "message": "Тупа новий телеграм з кріптой і клікєрами",
//           "date": "03.04.2025, 05:22",
//           "status": "admin",
//           "avatar": "https://media.istockphoto.com/id/1185227982/photo/funny-grandmother-portraits-80s-style-outfit-trapstar-taking-a-selfie-on-colored-backgrounds.jpg?s=612x612&w=0&k=20&c=5JXkZtNsrAwt6Vfu-3JFgvdiuuSdtmDgXZm_FGnDwIg="
//         },
//         {
//           "author": "Паша Дуров",
//           "message": "Коли я виросту, я викуплю цей сайт сибі!",
//           "date": "03.04.2025, 05:26",
//           "status": "client",
//           "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KIAdQZDr_HrYerAmSmot-NfaciTCu9kh8Q&s"
//         },
//         {
//           "author": "Баба капа",
//           "message": "Готуй солану щенок",
//           "date": "03.04.2025, 05:32",
//           "status": "admin",
//           "avatar": "https://media.istockphoto.com/id/1185227982/photo/funny-grandmother-portraits-80s-style-outfit-trapstar-taking-a-selfie-on-colored-backgrounds.jpg?s=612x612&w=0&k=20&c=5JXkZtNsrAwt6Vfu-3JFgvdiuuSdtmDgXZm_FGnDwIg="
//         },
//         {
//           "author": "Cyber",
//           "message": "Тест аватарок в чаті",
//           "date": "03.04.2025, 06:36",
//           "status": "client",
//           "avatar": "https://images.unian.net/photos/2016_12/thumb_files/800_0_1482422090-8189.jpeg?0.027759191897843483"
//         },
//         {
//           "author": "Cyber",
//           "message": "Нова ава, ахуєть",
//           "date": "03.04.2025, 06:39",
//           "status": "client",
//           "avatar": "https://c.files.bbci.co.uk/12B47/production/_107751667_a56087a1-b244-4141-9ea0-23b4287c43e8.jpg"
//         },
//         {
//           "author": "Баба капа",
//           "message": "Дєд Шнюк тут є?",
//           "date": "03.04.2025, 06:49",
//           "status": "admin",
//           "avatar": "https://media.istockphoto.com/id/1185227982/photo/funny-grandmother-portraits-80s-style-outfit-trapstar-taking-a-selfie-on-colored-backgrounds.jpg?s=612x612&w=0&k=20&c=5JXkZtNsrAwt6Vfu-3JFgvdiuuSdtmDgXZm_FGnDwIg="
//         },
//         {
//           "author": "Баба капа",
//           "message": "Обов'язково до перегляду - https://www.youtube.com/watch?v=2Ojolg49Wi8",
//           "date": "03.04.2025, 09:28",
//           "status": "admin",
//           "avatar": "https://media.istockphoto.com/id/1185227982/photo/funny-grandmother-portraits-80s-style-outfit-trapstar-taking-a-selfie-on-colored-backgrounds.jpg?s=612x612&w=0&k=20&c=5JXkZtNsrAwt6Vfu-3JFgvdiuuSdtmDgXZm_FGnDwIg="
//         },
//         {
//           "author": "Баба капа",
//           "message": "Перевірка роботи фільтрації повідомлень",
//           "date": "03.04.2025, 10:50",
//           "status": "admin",
//           "avatar": "https://media.istockphoto.com/id/1185227982/photo/funny-grandmother-portraits-80s-style-outfit-trapstar-taking-a-selfie-on-colored-backgrounds.jpg?s=612x612&w=0&k=20&c=5JXkZtNsrAwt6Vfu-3JFgvdiuuSdtmDgXZm_FGnDwIg="
//         },
//         {
//           "author": "Баба капа",
//           "message": "Тест номер 2",
//           "date": "03.04.2025, 10:51",
//           "status": "admin",
//           "avatar": "https://media.istockphoto.com/id/1185227982/photo/funny-grandmother-portraits-80s-style-outfit-trapstar-taking-a-selfie-on-colored-backgrounds.jpg?s=612x612&w=0&k=20&c=5JXkZtNsrAwt6Vfu-3JFgvdiuuSdtmDgXZm_FGnDwIg="
//         },
//         {
//           "author": "Баба капа",
//           "message": "Перевіряєм всяке !\"_;)*\"№%_*;№%*(",
//           "date": "03.04.2025, 10:55",
//           "status": "admin",
//           "avatar": "https://media.istockphoto.com/id/1185227982/photo/funny-grandmother-portraits-80s-style-outfit-trapstar-taking-a-selfie-on-colored-backgrounds.jpg?s=612x612&w=0&k=20&c=5JXkZtNsrAwt6Vfu-3JFgvdiuuSdtmDgXZm_FGnDwIg="
//         },
//         {
//           "author": "Cyber",
//           "message": "Я тепер новий адмін",
//           "date": "03.04.2025, 10:56",
//           "status": "client",
//           "avatar": "https://as2.ftcdn.net/v2/jpg/08/21/90/01/1000_F_821900132_d7CBa4SIBjVwyhaPQjZMtm7RLG5bFNGW.jpg"
//         }
//       ]
//     }
//   }

let data = "";
let getUsers;
async function loadData() {
    const response = await fetch(url + "/latest", {
        method: "GET",
        headers: {
            "X-Master-Key": API_KEY
        }
    });

    data = await response.json();

    document.querySelector('.auth__login').addEventListener('click', event => {
        auth(document.querySelector('.auth__input-login').value, document.querySelector('.auth__input-password').value);
    })

    getUsers = data.record;

    paintWall(data.record.data.post);

    paintListUsers(data.record.data.users);

    privateMsg();

    document.querySelector('.loading').style.display = 'none';

}

loadData();

let correctLogin = false;
let correctPass = false;
let correctItem = "";

function auth( mail, pass ) {

    correctLogin = false;
    correctPass = false;

    data.record.data.users.forEach( ( item, i ) => {

        if ( String(mail).toLocaleLowerCase() === String(item.login).toLocaleLowerCase() ) {
            correctLogin = true;
            if ( String(pass) === String(item.password) ) {
                correctPass = true;
                correctItem = item;
            }
        }

    } )

    if ( mail == "" ) {
        document.querySelector('.auth__message p').textContent = "Введіть логін 🐙";
        document.querySelector('.auth__input-login').style.background = "#ffc6aa";
        document.querySelector('.auth__message').style.opacity = 1;
        setTimeout( () => {
            document.querySelector('.auth__message').style.opacity = 0;
            document.querySelector('.auth__input-login').style.background = "#fff";
        }, 2000)
    } else if ( correctLogin == false ) {
        document.querySelector('.auth__message p').textContent = "Такого користувача не існує ❌";
        document.querySelector('.auth__input-login').style.background = "#ffc6aa";
        document.querySelector('.auth__message').style.opacity = 1;
        setTimeout( () => {
            document.querySelector('.auth__message').style.opacity = 0;
            document.querySelector('.auth__input-login').style.background = "#fff";
        }, 2000)
    } else if ( correctLogin == true && pass == "" ) {
        document.querySelector('.auth__message p').textContent = "Введіть пароль ⌨️";
        document.querySelector('.auth__message').style.opacity = 1;
        document.querySelector('.auth__input-password').style.background = "#ffc6aa";
        setTimeout( () => {
            document.querySelector('.auth__message').style.opacity = 0;
            document.querySelector('.auth__input-password').style.background = "#fff";
        }, 2000)
    } else if ( correctLogin == true && correctPass == false ) {
        document.querySelector('.auth__message p').textContent = "Не вірний пароль ❌";
        document.querySelector('.auth__message').style.opacity = 1;
        document.querySelector('.auth__input-password').style.background = "#ffc6aa";
        document.querySelector('.auth__input-login').style.background = "#ffc6aa";
        setTimeout( () => {
            document.querySelector('.auth__message').style.opacity = 0;
            document.querySelector('.auth__input-password').style.background = "#fff";
            document.querySelector('.auth__input-login').style.background = "#fff";
        }, 2000)
    } else if ( correctLogin == true && correctPass == true ) {
        document.querySelector('.auth__message p').textContent = "Успішна авторизація! ✅";
        document.querySelector('.auth__message').style.opacity = 1;
        setTimeout( () => {
            localStorage.setItem("NotepadAuth", "true");
            localStorage.setItem("NotepadAuthLogin", correctItem.login);
            localStorage.setItem("NotepadAuthPassword", correctItem.password);
            localStorage.setItem("NotepadAuthEmail", correctItem.mail);
            localStorage.setItem("NotepadAuthStatus", correctItem.status);
            localStorage.setItem("NotepadAuthAvatar", correctItem.avatar);
            document.querySelector('.auth').style.display = "none";

            document.querySelector('.main__avatar img').src = correctItem.avatar;
            document.querySelector('.main__login p').textContent = correctItem.login;
            if ( localStorage.getItem("NotepadAuthStatus") == "admin" ) {
                document.querySelector('.main__status p').textContent = "Адміністратор";
            } else if ( localStorage.getItem("NotepadAuthStatus") == "client" ) {
                document.querySelector('.main__status p').textContent = "Користувач";
            }

            privateMsg();
        }, 2000)
    }

}

if ( localStorage.getItem("NotepadAuth") == "true" ) {
    document.querySelector('.auth').style.display = "none";
    document.querySelector('.main__avatar img').src = localStorage.getItem("NotepadAuthAvatar");
    document.querySelector('.main__login p').textContent = localStorage.getItem("NotepadAuthLogin");
    if ( localStorage.getItem("NotepadAuthStatus") == "admin" ) {
        document.querySelector('.main__status p').textContent = "Адміністратор";
    } else if ( localStorage.getItem("NotepadAuthStatus") == "client" ) {
        document.querySelector('.main__status p').textContent = "Користувач";
    }
}

document.querySelector('.main__exit').addEventListener('click', event => {
    localStorage.setItem("NotepadAuth", "false");
    localStorage.clear();
    location.reload();
})

document.querySelector('.reg__reg').addEventListener('click', event => {
    document.querySelector('.reg__modal').style.top = "-50%";
    setTimeout( () => {
        document.querySelector('.auth__modal').style.top = "50%";
    }, 600 )
})

document.querySelector('.auth__reg').addEventListener('click', event => {
    document.querySelector('.auth__modal').style.top = "-50%";
    setTimeout( () => {
        document.querySelector('.reg__modal').style.top = "50%";
    }, 600 )
})

let realLogin = "false";

document.querySelector('.reg__login').addEventListener('click', event => {

    realLogin = "false";
    console.log(getUsers);
    getUsers.data.users.forEach( (item, i) => {
        if ( String(item.login).toLocaleLowerCase() == String(document.querySelector('.reg__input-login').value).toLocaleLowerCase() ) {
            realLogin = "true";
        }
    })

    if ( document.querySelector('.reg__input-login').value == "" ) {
        document.querySelector('.reg__message p').textContent = "Введіть логін";
        document.querySelector('.reg__input-login').style.background = "#ffc6aa";
        document.querySelector('.reg__message').style.opacity = 1;
        setTimeout( () => {
            document.querySelector('.reg__message').style.opacity = 0;
            document.querySelector('.reg__input-login').style.background = "#fff";
        }, 2000)
    } else if ( realLogin == "true" ) {
        document.querySelector('.reg__message p').textContent = "Такий користувач вже існує";
        document.querySelector('.reg__input-login').style.background = "#ffc6aa";
        document.querySelector('.reg__message').style.opacity = 1;
        setTimeout( () => {
            document.querySelector('.reg__message').style.opacity = 0;
            document.querySelector('.reg__input-login').style.background = "#fff";
        }, 2000)
    } else if ( document.querySelector('.reg__input-password').value == "" ) {
        document.querySelector('.reg__message p').textContent = "Введіть пароль";
        document.querySelector('.reg__input-password').style.background = "#ffc6aa";
        document.querySelector('.reg__message').style.opacity = 1;
        setTimeout( () => {
            document.querySelector('.reg__message').style.opacity = 0;
            document.querySelector('.reg__input-password').style.background = "#fff";
        }, 2000)
    } else if ( document.querySelector('.reg__input-password').value.length < 6 ) {
        document.querySelector('.reg__message p').textContent = "Пароль має містити більше 6 символів";
        document.querySelector('.reg__input-password').style.background = "#ffc6aa";
        document.querySelector('.reg__message').style.opacity = 1;
        setTimeout( () => {
            document.querySelector('.reg__message').style.opacity = 0;
            document.querySelector('.reg__input-password').style.background = "#fff";
        }, 2000)
    } else if ( document.querySelector('.reg__input-repeat').value == "" ) {
        document.querySelector('.reg__message p').textContent = "Введіть повторний пароль";
        document.querySelector('.reg__input-repeat').style.background = "#ffc6aa";
        document.querySelector('.reg__message').style.opacity = 1;
        setTimeout( () => {
            document.querySelector('.reg__message').style.opacity = 0;
            document.querySelector('.reg__input-repeat').style.background = "#fff";
        }, 2000)
    } else if ( document.querySelector('.reg__input-password').value != document.querySelector('.reg__input-repeat').value ) {
        document.querySelector('.reg__message p').textContent = "Паролі не співпадають";
        document.querySelector('.reg__input-password').style.background = "#ffc6aa";
        document.querySelector('.reg__message').style.opacity = 1;
        setTimeout( () => {
            document.querySelector('.reg__message').style.opacity = 0;
            document.querySelector('.reg__input-password').style.background = "#fff";
        }, 2000)
    } else {

        let newUsers = structuredClone(getUsers.data);
        console.log(newUsers);
        newUsers.users.push({
            login: document.querySelector('.reg__input-login').value,
            mail: "test@gmail.com",
            password: document.querySelector('.reg__input-password').value,
            status: "client",
            avatar: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
        });
        
        console.log(getUsers);
        console.log(newUsers);

        saveData({ data: newUsers });

        document.querySelector('.reg__message p').textContent = "Успішна реєстрація! ✅";
        document.querySelector('.reg__message').style.opacity = 1;
        setTimeout( () => {
            // location.reload();

            document.querySelector('.auth').style.display = 'none';

            localStorage.setItem("NotepadAuth", "true");
            localStorage.setItem("NotepadAuthLogin", document.querySelector('.reg__input-login').value);
            localStorage.setItem("NotepadAuthPassword", document.querySelector('.reg__input-password').value);
            localStorage.setItem("NotepadAuthEmail", "justclient@gmail.com");
            localStorage.setItem("NotepadAuthStatus", "client");
            localStorage.setItem("NotepadAuthAvatar", "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg");
            document.querySelector('.auth').style.display = "none";

            document.querySelector('.main__avatar img').src = "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg";
            document.querySelector('.main__login p').textContent = document.querySelector('.reg__input-login').value;
            if ( localStorage.getItem("NotepadAuthStatus") == "admin" ) {
                document.querySelector('.main__status p').textContent = "Адміністратор";
            } else if ( localStorage.getItem("NotepadAuthStatus") == "client" ) {
                document.querySelector('.main__status p').textContent = "Користувач";
            }

            const newItem = document.createElement("div");
            newItem.classList.add("users__item");
            newItem.innerHTML = `<img src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg" alt="avatar">
                        <div class="users__name">${document.querySelector('.reg__input-login').value}</div>
                        <div class="users__status">Користувач</div>`;
            
            document.querySelector(".users__list").appendChild(newItem);

            location.reload();

        }, 2000)

    }

})

let avaInPost;
let actualAuthor;
function paintWall(data) {

    // console.log(getUsers);

    data.forEach( (item, i) => {
        actualAuthor = item.author;
        getUsers.data.users.forEach( (item, i) => {
            if ( actualAuthor == item.login ) {
                avaInPost = item.avatar;
            }
        })
        // console.log(item);
        const newItem = document.createElement("div");
        newItem.classList.add("wall__item");
        if ( item.status === "admin" ) {
            newItem.innerHTML = `<div class="wall__replay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"/>
                            </svg>
                        </div><div class="wall__profile">
                            <img src="${avaInPost}" alt="avatar">
                            <div class="wall__name">${item.author}</div>
                            <div class="wall__status">Адмін</div>
                            </div>
                            <div class="wall__body">
                            <div class="wall__date">${item.date}</div>
                            <div class="wall__message">${item.message}</div>
                            </div>`;
        } else {
            newItem.innerHTML = `<div class="wall__replay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"/>
                            </svg>
                        </div><div class="wall__profile">
                            <img src="${avaInPost}" alt="avatar">
                            <div class="wall__name">${item.author}</div>
                            <div class="wall__status">Користувач</div>
                            </div>
                            <div class="wall__body">
                            <div class="wall__date">${item.date}</div>
                            <div class="wall__message">${item.message}</div>
                            </div>`;
        }
        document.querySelector(".wall__items").prepend(newItem);
    })

    document.querySelectorAll('.wall__message').forEach( (item, i) => {
        item.addEventListener('click', event => {
            if ( document.querySelectorAll('.wall__name')[i + zeroForReplay].textContent != localStorage.getItem("NotepadAuthLogin") ) {

                

                if ( document.querySelectorAll('.wall__item')[i + zeroForReplay].classList.contains("wall__item-replay") ) {
                    document.querySelectorAll('.wall__item')[i + zeroForReplay].classList.remove("wall__item-replay");
                    document.querySelector('.wall__input-post').value = "";
                } else {
                    document.querySelector('.wall__input-post').value = `${document.querySelectorAll('.wall__name')[i + zeroForReplay].textContent}, `;
                    document.querySelectorAll('.wall__item').forEach( (item, i) => {
                        document.querySelectorAll('.wall__item')[i].classList.remove('wall__item-replay');
                    })
                    document.querySelectorAll('.wall__item')[i + zeroForReplay].classList.add('wall__item-replay');
                }

            }
        })
    })

}
let zeroForReplay = 0;

function paintListUsers(data) {

    data.forEach( (item, i) => {
        const newItem = document.createElement("div");
        newItem.classList.add("users__item");
        if ( item.status === "admin" ) {
            newItem.innerHTML = `<img src="${item.avatar}" alt="avatar">
                        <div class="users__name">${item.login}</div>
                        <div class="users__status">Адмін</div>`;
        } else {
            newItem.innerHTML = `<img src="${item.avatar}" alt="avatar">
                        <div class="users__name">${item.login}</div>
                        <div class="users__status">Користувач</div>`;
        }
        document.querySelector(".users__list").appendChild(newItem);
    })

}

document.querySelectorAll('.main__tab').forEach( (item, i) => {
    item.addEventListener('click', event => {
        
        document.querySelectorAll('.main__tab').forEach( (item, i) => {
            item.classList.remove('main__tab-active');
            document.querySelectorAll('section')[i].style.display = 'none';
        })
        item.classList.add('main__tab-active');
        document.querySelectorAll('section')[i].style.display = 'block';

    })
})

let countSendPost = 0;
document.querySelector('.wall__button').addEventListener('click', event => {

    if ( document.querySelector('.wall__input-post').value.length > 3 ) {
        if ( countSendPost == 0 ) {
            addNewPost();
        } else {
            addNewPost2();
        }
        countSendPost = countSendPost + 1;
        document.querySelectorAll('.wall__item').forEach( (item, i) => {
            document.querySelectorAll('.wall__item')[i].classList.remove('wall__item-replay');
        });
        document.querySelector('.wall__input-post').value = "";
    }

})

let newPosts;
function addNewPost() {

    const now = new Date();

    // Форматуємо дату та час
    const formattedDate = now.toLocaleString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    });

    // Виводимо результат
    console.log(formattedDate);

    console.log(data);

    newPosts = structuredClone(data.record.data);
    console.log(newPosts);
    newPosts.post.push({
        // login: document.querySelector('.reg__input-login').value,
        // mail: "test@gmail.com",
        // password: document.querySelector('.reg__input-password').value,
        // status: "client",
        // avatar: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"

        author: localStorage.getItem("NotepadAuthLogin"),
        message: document.querySelector('.wall__input-post').value,
        date: formattedDate,
        status: localStorage.getItem("NotepadAuthStatus"),
        // avatar: localStorage.getItem("NotepadAuthAvatar"),
        avatar: document.querySelector('.main__avatar img').src,
    });
    console.log(newPosts);
    saveData({ data: newPosts });

    const newItem = document.createElement("div");
    newItem.classList.add("wall__item");
    newItem.classList.add("wall__item-my");
    if ( localStorage.getItem("NotepadAuthStatus") === "admin" ) {
        newItem.innerHTML = `<div class="wall__profile">
                        <img src="${document.querySelector('.main__avatar img').src}" alt="avatar">
                        <div class="wall__name">${localStorage.getItem("NotepadAuthLogin")}</div>
                        <div class="wall__status">Адмін</div>
                        </div>
                        <div class="wall__body">
                        <div class="wall__date">${formattedDate}</div>
                        <div class="wall__message">${document.querySelector('.wall__input-post').value}</div>
                        </div>`;
    } else {
        newItem.innerHTML = `<div class="wall__profile">
                        <img src="${document.querySelector('.main__avatar img').src}" alt="avatar">
                        <div class="wall__name">${localStorage.getItem("NotepadAuthLogin")}</div>
                        <div class="wall__status">Користувач</div>
                        </div>
                        <div class="wall__body">
                        <div class="wall__date">${formattedDate}</div>
                        <div class="wall__message">${document.querySelector('.wall__input-post').value}</div>
                        </div>`;
    }
    document.querySelector(".wall__items").prepend(newItem);
    
    document.querySelector('.wall__input-post').value = "";

    zeroForReplay = zeroForReplay + 1;
}

function addNewPost2() {
    const now = new Date();
    const formattedDate = now.toLocaleString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    });
    newPosts.post.push({
        author: localStorage.getItem("NotepadAuthLogin"),
        message: document.querySelector('.wall__input-post').value,
        date: formattedDate,
        status: localStorage.getItem("NotepadAuthStatus"),
        avatar: document.querySelector('.main__avatar img').src,
    });
    saveData({ data: newPosts });
    const newItem = document.createElement("div");
    newItem.classList.add("wall__item");
    newItem.classList.add("wall__item-my");
    if ( localStorage.getItem("NotepadAuthStatus") === "admin" ) {
        newItem.innerHTML = `<div class="wall__profile">
                        <img src="${document.querySelector('.main__avatar img').src}" alt="avatar">
                        <div class="wall__name">${localStorage.getItem("NotepadAuthLogin")}</div>
                        <div class="wall__status">Адмін</div>
                        </div>
                        <div class="wall__body">
                        <div class="wall__date">${formattedDate}</div>
                        <div class="wall__message">${document.querySelector('.wall__input-post').value}</div>
                        </div>`;
    } else {
        newItem.innerHTML = `<div class="wall__profile">
                        <img src="${document.querySelector('.main__avatar img').src}" alt="avatar">
                        <div class="wall__name">${localStorage.getItem("NotepadAuthLogin")}</div>
                        <div class="wall__status">Користувач</div>
                        </div>
                        <div class="wall__body">
                        <div class="wall__date">${formattedDate}</div>
                        <div class="wall__message">${document.querySelector('.wall__input-post').value}</div>
                        </div>`;
    }
    document.querySelector(".wall__items").prepend(newItem);
    document.querySelector('.wall__input-post').value = "";

    zeroForReplay = zeroForReplay + 1;
}

let activeAvatar = false;
document.querySelector('.main__avatar').addEventListener('click', event => {
    if ( activeAvatar == false ) {
        document.querySelector('.main__picture').style.maxHeight = "100px";
        activeAvatar = true;
    } else {
        document.querySelector('.main__picture').style.maxHeight = "0px";
        activeAvatar = false;
    }
})

document.querySelector('.main__check').addEventListener('click', event => {

    document.querySelector('.main__avatar img').src = String(document.querySelector(".main__link").value);
    const img = document.querySelector(".main__avatar img");
    const testImg = new Image();
    testImg.src = img.src;
    testImg.onload = () => {
        console.log("✅ Зображення завантажено успішно!");
        document.querySelector('.main__avatar img').src = String(document.querySelector(".main__link").value);
    };
    testImg.onerror = () => {
        console.log("❌ Помилка завантаження зображення!");
        document.querySelector('.main__avatar img').src = localStorage.getItem("NotepadAuthAvatar");
    };

})

// Перевірка на картинку

function isValidImageUrl(url) {
    return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
}

const input = document.querySelector(".main__link"); // Заміни на свій селектор
input.addEventListener("input", () => {
    if (isValidImageUrl(input.value)) {
        console.log("✅ Це посилання на картинку!");
    } else {
        console.log("❌ Це не посилання на картинку!");
    }
});

// Збереження нової аватарки

document.querySelector('.main__save').addEventListener('click', event => {

    const img = document.querySelector(".main__avatar img");
    const testImg = new Image();
    testImg.src = img.src;

    testImg.onload = () => {
        console.log("✅ Зображення завантажено успішно!");
        let newArray = structuredClone(data.record.data);
        newArray.users.forEach( (item, i) => {
            if (  item.login == localStorage.getItem("NotepadAuthLogin") ) {
                newArray.users[i].avatar = document.querySelector(".main__avatar img").src;
            }
        })
        saveData({ data: newArray });
        localStorage.setItem("NotepadAuthAvatar", document.querySelector(".main__avatar img").src);
        document.querySelector('.main__picture').style.maxHeight = "0px";
        activeAvatar = false;
        repaintAvatars(document.querySelector(".main__avatar img").src);
        setTimeout( () => {
            location.reload();
        }, 2000 )
    };

    testImg.onerror = () => {
        console.log("❌ Помилка завантаження зображення!");
    };

})

// Визначаємо свої повідомлення

function privateMsg() {
    document.querySelectorAll('.wall__item').forEach( (item, i) => {
        if ( document.querySelectorAll('.wall__name')[i].textContent == document.querySelector('.main__login p').textContent ) {
            item.classList.add('wall__item-my')
        }
        console.log();
    })
}

function repaintAvatars(src) {

    document.querySelectorAll('.wall__item').forEach( (item, i) => {
        if ( document.querySelectorAll('.wall__name')[i].textContent == localStorage.getItem("NotepadAuthLogin") ) {
            document.querySelectorAll('.wall__profile img')[i].src = src;
        }
    })

    document.querySelectorAll('.users__item').forEach( (item, i) => {
        if ( document.querySelectorAll('.users__name')[i].textContent == localStorage.getItem("NotepadAuthLogin") ) {
            document.querySelectorAll('.users__item img')[i].src = src;
        }
    })

}

// Мобільне меню
let activeMenu = true;
document.querySelector('.main__nav').addEventListener('click', event => {
    if ( activeMenu == false ) {
        document.querySelector('.main__open').style.opacity = 1;
        document.querySelector('.main__close').style.opacity = 0;
        document.querySelector('.main__left').style.left = "-320px";
        document.querySelector('.main__left').style.boxShadow = "0px 0px 0px rgba(0, 17, 255, 0)";
        document.querySelector('.main__nav').style.boxShadow = "0px 0px 4px rgb(0, 0, 0)";
        document.querySelector('.main__nav').style.right = "-50px";
        activeMenu = true;
    } else {
        document.querySelector('.main__open').style.opacity = 0;
        document.querySelector('.main__close').style.opacity = 1;
        document.querySelector('.main__left').style.left = "0px";
        document.querySelector('.main__left').style.boxShadow = "3px 0px 10px rgb(0, 0, 0)";
        document.querySelector('.main__nav').style.boxShadow = "0px 0px 0px rgb(0, 0, 0, 0)";
        document.querySelector('.main__nav').style.right = "10px";
        activeMenu = false;
    }
})

const input2 = document.querySelector(".reg__input-login");

input2.addEventListener("input", () => {
    input2.value = input2.value.replace(/[^a-zA-Zа-яА-ЯёЁіІїЇєЄ0-9]/g, "");
});

// Запамьятовування стану меню

let activeMob = false;
document.querySelector('.main__nav').addEventListener('click', event => {
    if ( activeMob == false ) {
        localStorage.setItem("NotepadMobMenu", "false");
        activeMob = true;
    } else {
        localStorage.setItem("NotepadMobMenu", "true");
        activeMob = false;
    }
})

// if ( localStorage.getItem("NotepadMobMenu") == null || localStorage.getItem("NotepadMobMenu") == "false" ) {
//     document.querySelector('.main__open').style.opacity = 1;
//     document.querySelector('.main__close').style.opacity = 0;
//     document.querySelector('.main__left').style.left = "-320px";
//     document.querySelector('.main__left').style.boxShadow = "0px 0px 0px rgba(0, 17, 255, 0)";
//     document.querySelector('.main__nav').style.boxShadow = "0px 0px 4px rgb(0, 0, 0)";
//     document.querySelector('.main__nav').style.right = "-50px";
//     activeMenu = true;
// } else {
//     document.querySelector('.main__open').style.opacity = 0;
//     document.querySelector('.main__close').style.opacity = 1;
//     document.querySelector('.main__left').style.left = "0px";
//     document.querySelector('.main__left').style.boxShadow = "3px 0px 10px rgb(0, 0, 0)";
//     document.querySelector('.main__nav').style.boxShadow = "0px 0px 0px rgb(0, 0, 0, 0)";
//     document.querySelector('.main__nav').style.right = "10px";
//     activeMenu = false;
// }