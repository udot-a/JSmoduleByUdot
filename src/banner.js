export class Banner extends HTMLElement {
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
        .baner {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
        }
        
        
        .baner-output {
            width: calc(100% - 20vw);
            display: flex;
            margin-bottom: 30px;
        }
        
        .img-birds {
            min-width: 50%;
            display: flex;
            transform: scaleX(1);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
        
        }
        .del-bird {
            transform: scaleX(0);
        
        }
        
        .img-birds img {
            max-width: 100%;
        }
        
        .img-birds:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .cool {
            color: #f5c506;
            font-size: 4.5vw;
            margin-top: 5vh;
        }
        
        .minim {
            color: white;
            font-size: 4.5vw;
        }
        .buttons{
            color:white;
            padding:10px;
        }
        </style>

        <div class="baner">
        <div id='carusel' class="baner-output">
            <div class="img-birds">
                <img src="./img/Birds.jpg" alt="Birds">
            </div>
            <div class="img-birds">
                <p class="cool">THE COOL</p>
                <p class="minim">THE MINIMAL</p>
            </div>
        </div>
        <div class="buttons">
            <i id="left_but" class="far fa-arrow-alt-circle-left"></i>
            <i id="right_but" class="far fa-arrow-alt-circle-right"></i>
        </div>
    </div>

        `
        let carusel = this.shadow.getElementById('carusel')
        let elem = this.shadow
        function getCarusel (toggle){
            elem.getElementById(`${toggle}_but`).className = 'fas fa-arrow-alt-circle-'+toggle
            carusel.getElementsByClassName('img-birds')[0].classList.add('del-bird')
            carusel.getElementsByClassName('img-birds')[1].classList.add('del-bird')
            setTimeout(() => {
                carusel.getElementsByClassName('img-birds')[0].classList.remove('del-bird')
                carusel.getElementsByClassName('img-birds')[1].classList.remove('del-bird')
                if (carusel.getElementsByClassName('img-birds')[0].firstElementChild.localName==='p') {
                    carusel.getElementsByClassName('img-birds')[0].innerHTML = `
                    <img src="./img/Birds.jpg" alt="Birds">
                    `
                    carusel.getElementsByClassName('img-birds')[1].innerHTML = `
                    <p class="cool">THE COOL</p>
                    <p class="minim">THE MINIMAL</p>
                    `
                }
                else {
                    carusel.getElementsByClassName('img-birds')[1].innerHTML = `
                    <img src="./img/Birds.jpg" alt="Birds">
                    `
                    carusel.getElementsByClassName('img-birds')[0].innerHTML = `
                    <p class="cool">THE COOL</p>
                    <p class="minim">THE MINIMAL</p>
                    `
                }
                elem.getElementById(`${toggle}_but`).className = 'far fa-arrow-alt-circle-'+toggle
            }, 300)
        
        }
        this.shadow.getElementById('left_but').onclick = (event) => {
            getCarusel('left')
        }
        this.shadow.getElementById('right_but').onclick = (event) => {
            getCarusel('right')
        }
        
    } 
}
