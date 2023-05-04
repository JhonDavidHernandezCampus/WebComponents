let pathName = new URL (import.meta.url).pathname;
let name = pathName.split('/').pop().replace(".js","");

export default class mySelection extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }
    handleEvent(e){
        (e.type === "click")?this.enviarWorker(e):undefined;
    }
    enviarWorker(e){
        e.preventDefault();
        alert("se apromio el boton")
    }
    connectedCallback(){
        Promise.resolve(mySelection.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.mySelection= this.shadowRoot.querySelector("#btn");
            this.mySelection.addEventListener('click',                                                        
            this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, mySelection);