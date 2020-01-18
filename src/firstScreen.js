export class FirstScreen extends HTMLElement {
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
        <main class="main">
        <div class="icon-area">
            <div class="icon-item">
                <div class="icon-img">
                    <img src="./img/cloud_icon.svg" alt="Cloud">
                </div>

                <div class="icon-text">
                    <p>BETTER DISIGN</p>
                </div>
            </div>
            <div class="icon-item">
                <div class="icon-img">
                    <img src="./img/list_icon.svg" alt="List">
                </div>
                <div class="icon-text">
                    <p>CUSTOMISE</p>
                </div>
            </div>

            <div class="icon-item">
                <div class="icon-img">
                     <img src="./img/fly_icon.svg" alt="Fly">
                </div>
                <div class="icon-text">
                    <p>ITS FREE</p>
                </div>
            </div>

        </div>

        <section class="section1">
            <h1 class="sect1-h1">Lorem Lorem ipsum dolor sit ameticing elit. </h1>
            <div class="video-twit">
                <div class="twit-item">
                    <p>Lorem ipsum dolor sis numquam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora saepe alias ipsam esse est itaque, beatae obcaecati labore? Quaerat!
                        aliquam vel!</p>
                </div>
                <div class="twit-item">
                    <img src="./img/monkey.jpg" alt="Monkey">
                </div>
                <div class="twit-item">
                    <img class="twitter" src="./img/twitter.svg" alt="Twitter">
                    <div class="twitter-post">
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        </ul>
                        <div class="twitter-input">
                            <input class="input" type="text"> <a href="#">Tweet</a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="cur-date">
                <div class="date">25</div>
                <div class="month">APRIL</div>
            </div>
        </section>
        <section class="section2">
            <h1 class="sect2-h1">Lorem ipsum dolor sit amet.</h1>
            <div class="device">
                <div class="monitor-img">
                    <div class="free">ITS 100% FREE</div>
                    <img src="./img/monitor.svg" alt="Monitor">
                </div>
                <div class="tablet-img">
                    <img src="./img/tablet.svg" alt="tablet">
                </div>
                <div class="phone-img">
                    <img src="./img/phone.svg" alt="phone">
                </div>
                <div class="list">
                    <ul>
                        <li>Lorem ipsum dolor sit amet. lorem50</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi accusantium error
                            deserunt nemo tempore?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, laudantium?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
        `
    } 
}
