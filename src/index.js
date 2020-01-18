import {LoginForms} from './loginforms'
import {getDataOnload} from './loginforms'
import {FirstScreen} from './firstScreen'
import {Banner} from './banner'
import {Footer} from './footer'
import {Header} from './header'
import {secondScreen, thirdScreen, forthScreen} from './screens'

customElements.define('sign-up', LoginForms)
customElements.define('first-screen', FirstScreen)
customElements.define('banner-output', Banner)
customElements.define('custom-footer', Footer)
customElements.define('header-menu', Header)
getDataOnload()

onhashchange = (event) => {
    localStorage.setItem('href', location.hash)
    switch (location.hash) {
        case '#1': {
            screennumber.innerHTML = `
            <first-screen></first-screen>
        `
            break
        }
        case '#2': {
            screennumber.innerHTML = secondScreen
            break
        }
        case '#3': {
            screennumber.innerHTML = thirdScreen
            break
        }
        case '#4': {
            screennumber.innerHTML = forthScreen
            break
        }
        default:break
    }
}


