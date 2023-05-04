let pathname = new URL(import.meta.url).pathname;
let name = pathname.split("/").pop().replace(".js","")

export default class myHeader extends HTMLElement{
    static async components(){
        return await (await fetch(pathname.replace(".js",".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    handleEvent(e){
        (e.type === "click")?this.enviarWorker(e):undefined;
    }
    enviarWorker(e){
        e.preventDefault();
        alert("se aprimio el btn")
        
    }
    connectedCallback(){
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.myHeader = this.shadowRoot.querySelector("button");
            this.myHeader.addEventListener('click',                                                        
            this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, myHeader);