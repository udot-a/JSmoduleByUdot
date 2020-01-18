export class Footer extends HTMLElement {
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
        <footer class="footer">
        <a href="#1">
            <div class="logo">
                <div class="logo-img">
                    <img src="./img/logo.svg" alt="THEYALOW">
                </div>
                <strong class="theyalow">THEYALOW</strong>
            </div>

        </a>
        <div class="adress">
            <p>Disigned by <cite>cssauthor.com</cite></p>
        </div>
    </footer>
       `
    } 
}
