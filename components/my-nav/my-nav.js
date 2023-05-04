const pahtName = new URL(import.meta.url).pathname;
const name = pahtName.split('/').pop().replace(".js","")

export default class myNav extends HTMLElement{
    static async conponents(){
        return await (await fetch(pahtName.replace(".js",".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }
    handleEvent(e){
        (e.type === "click")?this.enviarWorker(e):undefined;
    }
    enviarWorker(e){
        e.preventDefault();
        alert("se oprimio el boton")
        
    }
    connectedCallback(){
        Promise.resolve(myNav.conponents()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.myNav = this.shadowRoot.querySelector("button");
            this.myNav.addEventListener('click',                                                        
            this.handleEvent.bind(this))
        })
    }
}
customElements.define(name, myNav);