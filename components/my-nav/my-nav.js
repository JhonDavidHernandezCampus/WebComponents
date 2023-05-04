const pahtName = new URL(import.meta.url).pathname;
const name = pahtName.split('/').pop().replace(".js","")

export default class myNav extends HTMLElement{
    static async conponents(){
        return await (await fetch(pahtName.replace(".js",".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        Promise.resolve(myNav.conponents()).then(html => {
            this.shadowRoot.innerHTML = html;
        })
    }
}
customElements.define(name, myNav);