export class Header extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'closed' })
    }

    connectedCallback() {
        this.shadow.innerHTML = `
        <head>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="./css/reset.css">
            <link href="./fontawesome-free-5.10.2-web/css/all.css" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="./css/main.css">
            <script src="https://cdn.rawgit.com/chrisveness/crypto/4e93a4d/sha256.js"></script>
        <head/>
        <div class="header">
            <a href="#1">
                <div class="logo">
                    <div class="logo-img">
                        <img src="./img/logo.svg" alt="THEYALOW">
                    </div>
                    <strong class="theyalow">THEYALOW</strong> 
                    <strong class="craft">craft by css author.com</strong>
                </div>
            </a>
            <nav class="header-menu">
                <ul>
                    <li><a href="#2"><i class="fas fa-user"></i> ABOUT US</a></li>
                    <li><a href="#3"><i class="fas fa-wrench"></i>SERVICES</a></li>
                    <li><a href="#4"><i class="fas fa-envelope"></i>CONTACT</a></li>
                </ul>
            </nav>
        </div>
       `
    } 
}
