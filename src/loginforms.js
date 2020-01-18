let userList = null
let currentUser = null
export function getDataOnload (){
    function getCookies() {
        var res = document.cookie
            .split("; ")
            .map(
                x => {
                    var tmp = x.split("=")
                    var elem = {}
                    elem[tmp[0]] = tmp[1]
                    return elem
                }
            )
        return Object.assign({}, ...res)
    }
    

    window.onload = (event) => {
        fetch('https://fea-15-andry.glitch.me/users/all')
            .then(response => response.json())
            .then(response => {
                userList = response
                performance.navigation.type != 1 ? localStorage.href ? location.href += localStorage.href : null : null
                let userCookie = getCookies()
                currentUser = userList[userCookie.login]
                if (userCookie['userPass'] && userCookie['userPass'] === currentUser['pass-hash']) {
                    document.getElementsByTagName('sign-up')[0].setAttribute('avtorize', 'true')
                    
                }
    
                else  {
                    document.getElementsByTagName('sign-up')[0].setAttribute('avtorize', 'false')
                }
            })
    }
    
}

export class LoginForms extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'closed' })
    }

    connectedCallback() {
        this.shadow.innerHTML = `
        <head>
        <link href="./fontawesome-free-5.10.2-web/css/all.css" rel="stylesheet">
        </head>
        <style>
        .block-scheme {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        h1 {
            align-self: center;
            font-size: 28px;
        }
        
        i {
            text-decoration: none;
            padding: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            font-family: Arial, Helvetica, sans-serif;
            font-size:3vh;
            transform: scale(1);
            transition: all 0.5s;
            color: #b99403;
            
        }
        
        i:hover {
            color: #efeeee;
            scale(1.5)
        }
        
        .pushbutton {
            transform: scale(0.8);
            box-shadow: none;
        }
        
        @keyframes bouncing {
            0% {
                bottom: 0;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                transform: scale(1);
            }
            50% {
                bottom: 50px;
                box-shadow: 0 50px 50px rgba(0, 0, 0, 0.1);
                transform: scale(0.8);
            }
            100% {
                bottom: 0;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                transform: scale(1);
            }
        }
        
        .loading-button {
            animation: bouncing 0.5s cubic-bezier(0.1, 0.25, 0.1, 1) 0s alternate both;
        }
        
        #listuserwrapper {
            top:40%;
            left:40%;
            position: fixed;
            display:flex;
            
            width: 40vw;
            height: 40vh;
            background-color: dimgray;
            border:1px solid darkgray;
        }
        
        .regwrapper{
            position: fixed;
            display:flex;
            flex-direction: column;
            border:1px solid gray;
            border-radius:15px;
            box-shadow: 0 50px 50px rgba(0, 0, 0, 0.1);
            padding: 10px;
            left:40%;
            top:-100%;
            transition: all 1s;
            z-index:100;
            background: #fefcea; /* Для старых браузров */
            background: linear-gradient(to top,  #b99403, #f1da36);
            font-size:2vh;
        }
        
        .log-wrapper{
            position: fixed;
            display:flex;
            flex-direction: column;
            border:1px solid gray;
            border-radius:15px;
            box-shadow: 0 50px 50px rgba(0, 0, 0, 0.1);
            padding: 10px;
            left:40%;
            top:-100%;
            transition: all 1s;
            z-index:100;
            background: #fefcea; /* Для старых браузров */
            background: linear-gradient(to top,  #b99403, #f1da36);
            font-size:2vh;
        }
        #registration{
            padding:10px;
            border:1px solid gray;
            width:30vw;
            display:flex;
            flex-direction: column;
            justify-content: space-around;
        }
        #registration p{
            font-size:2vh;
            color:red;
            padding:0px;
            margin: 0px;
        }
        #logform p{
            font-size:2vh;
            color:red;
            padding:0px;
            margin: 0px;
        }
        #avtorized img,#avtorized p ,#avtorized a{
            margin: 5px;
        }
        #avtorized{
            display:flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
        #avataruser{
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        button, input{
            border-radius:15px;
        }
        input{
            padding-left: 5px;
        }
        </style>
        <div class="block-scheme">
        <div id="notavtorized">
            <i id="signup" class="fas fa-user-plus" title="Sign up"></i> 
            <i id="signin" class="fas fa-sign-in-alt" title="Sign in"></i> 
        </div>
        <div id="avtorized">
            <div id="avataruser">
                <img src="" alt="User avatar" width="40" id="useravatar">
                <p id="username"></p>
            </div>
            <i class="fas fa-sign-out-alt" id="logout" title="Sign out"></i>
        </div>
    </div>
    <div class="regwrapper" id="registrationForm">
        <h3>Registration form</h3>
        <form id="registration">
            Login:<input type="text" id="login">
            <p id="errorlogin"> </p>
            First Name:<input type="text" name="firstname" id="firstname">
            <p id="errorfirstname"> </p>
            Last Name:<input type="text" name="lastname" id="lastname">
            <p id="errorlastname"> </p>
            E-mail:<input type="email" name="email" id="email">
            <p id="erroremail"> </p>
            Password:<input type="password" id="pass1">
            <p id="errorpass1"> </p>
            Confirm Password:<input type="password" id="pass2">
            <p id="errorpass2"> </p>
            <img src="./img/anonim.png" width="50" alt="user avatar" id="avatar">
            Choose avatar image <input type="file" id="choosefile">
            <p id="erroravatar"> </p>
            <input type="hidden" value="" name="pass-hash" id="passHash">
            <input type="hidden" value="" name="user-photo" id="userPhoto">
        </form>
        <div>
            <button id="accept">Accept</button><button id="exitbutton">Cancel</button>
        </div>
    </div>
    <div class='log-wrapper' id="logform">
        <h3>Sign in </h3>
        Login:<input type="text" id="signLogin">
        <p id="errorsigninlogin"> </p>
        Password:<input type="password" id="signPass">
        <p id="erorsigninpass"> </p>
        <button id="signAccept">Accept</button><button id="signCancel">Cancel</button>
    </div>

        `
        
        const elementShadow = this.shadow

        //    Нажатие кнопки ЗАРЕГИСТРИРОВАТЬСЯ
        this.shadow.getElementById('signup').onclick = (event) => {
            event.target.classList.add('loading-button')
            setTimeout(() => event.target.classList.remove('loading-button'), 500)
            this.shadow.getElementById('registrationForm').style = "top:20%;"
            this.shadow.getElementById('signup').style['pointer-events'] = 'none'
            this.shadow.getElementById('signin').style['pointer-events'] = 'none'
            elementShadow.getElementById('avatar').src = './img/anonim.png'
            let emptyElement = elementShadow.getElementById('registration').childNodes
            Array.from(emptyElement).forEach(item => {
                item.value ? item.value = '' : null
                if (item.id && item.id.indexOf('error') != -1)
                    item.innerText = ' '
            })
        }
        //    Нажатие кнопки ВЫХОД из формы регистрации
        this.shadow.getElementById('exitbutton').onclick = (event) => {
            this.shadow.getElementById('registrationForm').style = ""
            this.shadow.getElementById('signup').style['pointer-events'] = 'auto'
            this.shadow.getElementById('signin').style['pointer-events'] = 'auto'
        }
        // Нажатие кнопки ВОЙТИ    
        this.shadow.getElementById('signin').onclick = (event) => {
            event.target.classList.add('loading-button')
            setTimeout(() => event.target.classList.remove('loading-button'), 500)
            this.shadow.getElementById('logform').style = "top:20%;"
            this.shadow.getElementById('signup').style['pointer-events'] = 'none'
            this.shadow.getElementById('signin').style['pointer-events'] = 'none'
            let emptyElement = elementShadow.getElementById('logform').childNodes
            Array.from(emptyElement).forEach(item => {
                item.value ? item.value = '' : null
                if (item.id && item.id.indexOf('error') != -1)
                    item.innerText = ' '
            })
            elementShadow.getElementById('errorsigninlogin').innerText = ' '
            elementShadow.getElementById('erorsigninpass').innerText = ''
        }
        // Нажатие кнопки LOGOUT   
        this.shadow.getElementById('logout').onclick = (event) => {
            event.target.classList.add('loading-button')
            setTimeout(() => event.target.classList.remove('loading-button'), 500)
            this.shadow.getElementById('notavtorized').style.display = 'flex'
            this.shadow.getElementById('avtorized').style.display = 'none'
            document.cookie = "login=; expires=" +
                new Date(0).toUTCString()
            document.cookie = "userPass=; expires=" +
                new Date(0).toUTCString()
            currentUser = null

        }
        // Нажатие кнопки Выхода из формы логинизации
        this.shadow.getElementById('signCancel').onclick = (event) => {
            this.shadow.getElementById('logform').style = ""
            this.shadow.getElementById('signup').style['pointer-events'] = 'auto'
            this.shadow.getElementById('signin').style['pointer-events'] = 'auto'
        }
        // Ввод логина в форме входа
        this.shadow.getElementById('signLogin').oninput = (event) => {
            let arrayOfLogins = []
            for (let key in userList) arrayOfLogins.push(key)
            event.target.valid = arrayOfLogins.find(item => item === event.target.value)
            event.target.style.color = event.target.valid ? "green" : "red"
            event.target.valid ?
                elementShadow.getElementById('errorsigninlogin').innerText = ' ' :
                elementShadow.getElementById('errorsigninlogin').innerText = 'Login does not exist'
        }
        // Кнопка подтверждения в форме логина
        this.shadow.getElementById('signAccept').onclick = (event) => {
            let login = this.shadow.getElementById('signLogin').value
            let signPass = this.shadow.getElementById('signPass').value
            if (userList[login]['pass-hash'] === Sha256.hash(signPass)) {
                currentUser = userList[login]
                document.cookie = `login=${login}`
                document.cookie = `userPass=${currentUser['pass-hash']}`
                this.shadow.getElementById('notavtorized').style.display = 'none'
                this.shadow.getElementById('avtorized').style.display = 'flex'
                this.shadow.getElementById('username').innerText = currentUser['firstname']
                this.shadow.getElementById('useravatar').src = currentUser['user-photo']
                this.shadow.getElementById('logform').style = ""
                this.shadow.getElementById('signup').style['pointer-events'] = 'auto'
                this.shadow.getElementById('signin').style['pointer-events'] = 'auto'
            }
            else elementShadow.getElementById('erorsigninpass').innerText = 'Incorrect password!!!'
        }
        // Удаление сообщения об ошибке при фокусировке на инпуте ввода пароля
        this.shadow.getElementById('signPass').onfocus = (event) => elementShadow.getElementById('erorsigninpass').innerText = ''
        // Выбор файла с аватоаром и проверка валиднсти формата
        this.shadow.getElementById('choosefile').onchange = (event) => {
            let photo = event.target.files[0]
            let reader = new FileReader()
            let inputFile = event.target
            reader.readAsDataURL(photo)
            reader.onload = (event) => {
                if (photo.type.indexOf("image") !== 0 || photo.size > 100000) {
                    inputFile.valid = false
                    elementShadow.getElementById('erroravatar')
                        .innerText = 'Incorrect format file or size lager than 100KB'
                }
                else {
                    inputFile.valid = true
                    this.shadow.getElementById('avatar').src = URL.createObjectURL(photo)
                    this.shadow.getElementById('userPhoto').value = event.target.result
                    elementShadow.getElementById('erroravatar').innerText = ' '
                }
            }
        }

        // Проверка валидности емейл когда фокус уходит с инпута
        this.shadow.getElementById('email').onblur = function (event) {
            let address = event.target.value

            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if (reg.test(address) == false) {
                elementShadow.getElementById('erroremail').innerText = 'Incorrect e-mail!!!'
                event.target.valid = false
            }
            else event.target.valid = true
        }
        // Убираем сообщение об ошибке при фокусе на инпуте емейла
        this.shadow.getElementById('email').onfocus = function (event) {
            elementShadow.getElementById('erroremail').innerText = ' '
        }
        // Проверка валидности пароля в форме регистрации
        this.shadow.getElementById('pass1').oninput = function (event) {
            let pass = event.target.value
            event.target.valid = pass.length > 5 && !!pass.match(/\d/) && !!pass.match(/\D/)
            event.target.style.color = event.target.valid ? "green" : "red"
            event.target.valid ?
                elementShadow.getElementById('errorpass1').innerText = ' ' :
                elementShadow.getElementById('errorpass1').innerText = 'Password length min 6 symbol(character and numbers)'
            elementShadow.getElementById('pass2').disabled = !event.target.valid
        }
        // Проверка валидности Логина в форме регистрации
        this.shadow.getElementById('login').oninput = function (event) {
            let arrayOfLogins = []
            for (let key in userList) arrayOfLogins.push(key)
            event.target.valid = !arrayOfLogins.find(item => item === event.target.value) && event.target.value.length > 3
            event.target.style.color = event.target.valid ? "green" : "red"
            event.target.valid ? elementShadow.getElementById('errorlogin').innerText = ' ' :
                elementShadow.getElementById('errorlogin').innerText = 'login must have min 4 symbols or its already exists'
        }
        // Проверка валидности ввода имени в форме регистрагции
        this.shadow.getElementById('firstname').oninput = function (event) {
            event.target.valid = event.target.value.length > 3
            event.target.style.color = event.target.valid ? "green" : "red"
            event.target.valid ? elementShadow.getElementById('errorfirstname').innerText = ' ' :
                elementShadow.getElementById('errorfirstname').innerText = 'Firstname must have min 4 symbols'
        }
        // Проверка валидности ввода фамилии в форме регистрагции
        this.shadow.getElementById('lastname').oninput = function (event) {
            event.target.valid = event.target.value.length > 3
            event.target.style.color = event.target.valid ? "green" : "red"
            event.target.valid ? elementShadow.getElementById('errorlastname').innerText = ' ' :
                elementShadow.getElementById('errorlastname').innerText = 'Lastname must have min 4 symbols'
        }
        // Проверка валидности подтверждения пароля в форме регистрации
        this.shadow.getElementById('pass2').oninput = function (event) {
            event.target.valid = event.target.value === elementShadow.getElementById('pass1').value
            event.target.style.color = event.target.valid ? "green" : "red"
            event.target.valid ? elementShadow.getElementById('errorpass2').innerText = ' ' :
                elementShadow.getElementById('errorpass2').innerText = 'password does not match'
        }
        // Сохранение пароля с кодировкой сха256 в скрытое поле формы регистрации
        this.shadow.getElementById('pass2').onchange = function (event) {
            event.target.valid ?
                elementShadow.getElementById('passHash').value = Sha256.hash(event.target.value) : null
        }
        // В случае успешной валидации запись данных формы и вывод аватара и имени юзера
        this.shadow.getElementById('accept').onclick = (event) => {
            let valid = elementShadow.getElementById('login').valid &&
                elementShadow.getElementById('firstname').valid &&
                elementShadow.getElementById('lastname').valid &&
                elementShadow.getElementById('email').valid &&
                elementShadow.getElementById('pass1').valid &&
                elementShadow.getElementById('pass2').valid &&
                elementShadow.getElementById('choosefile').valid
            if (!valid) return
            let formData = new FormData(elementShadow.getElementById('registration'))
            let result = {}
            formData.forEach(
                (val, key) => Object.assign(result, { [key]: val })
            )
            fetch(`https://fea-15-andry.glitch.me/user/${elementShadow.getElementById('login').value}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(result)
            }).then(response => response.json())
                .then(response => {
                    currentUser = response
                    document.cookie = `login=${elementShadow.getElementById('login').value}`
                    document.cookie = `userPass=${currentUser['pass-hash']}`
                    elementShadow.getElementById('username').innerText = currentUser['firstname']
                    elementShadow.getElementById('useravatar').src = currentUser['user-photo']

                    fetch('https://fea-15-andry.glitch.me/users/all')
                        .then(response =>response.json())
                        .then(response => userList = response)
                
                
    
                        elementShadow.getElementById('registrationForm').style = "top:-100%;"
                        elementShadow.getElementById('signup').style['pointer-events'] = 'auto'
                        elementShadow.getElementById('signin').style['pointer-events'] = 'auto'
                        elementShadow.getElementById('notavtorized').style.display = 'none'
                        elementShadow.getElementById('avtorized').style.display = 'flex'
                })
        }
    }
    static get observedAttributes() {
        return ['avtorize', 'data-list', 'data-current']
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'avtorize' && newVal === 'true') {
            this.shadow.getElementById('notavtorized').style.display = 'none'
            this.shadow.getElementById('avtorized').style.display = 'flex'
            this.shadow.getElementById('username').innerText = currentUser['firstname']
            this.shadow.getElementById('useravatar').src = currentUser['user-photo']
        }
        else if (attrName === 'avtorize' && newVal === 'false') {
            this.shadow.getElementById('notavtorized').style.display = 'flex'
            this.shadow.getElementById('avtorized').style.display = 'none'

        }

    }
}
