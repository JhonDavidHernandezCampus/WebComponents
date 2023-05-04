const puthName = new URL(import.meta.url).pathname;
const name = puthName.split('/').pop().replace(".js","");

export default class myFooter extends HTMLElement{
    static async components(){
        return await(await fetch (puthName.replace(".js",".html"))).text();
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
        alert("Se oprimio el boton (machista no sea opresor)")
        
    }
    connectedCallback(){
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.myFooter = this.shadowRoot.querySelector("button");
            this.myFooter.addEventListener('click',                                                        
            this.handleEvent.bind(this))
        })
    }
}

customElements.define(name,myFooter);