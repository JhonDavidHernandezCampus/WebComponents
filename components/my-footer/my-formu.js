const pathName = new URL(import.meta.url).pathname;
const name = pathName.split('/').pop().replace(".js","");

export default class myFormulario extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js",".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode : "open"});
    }
    handleEvent(e){
        (e.type === "submit")?this.enviarWorker(e):undefined;
    }
    enviarWorker(e){
        e.preventDefault();
        let input = e.target.input.value;
        console.log(input);
        alert("valor del input: " + input)
        
    }
    connectedCallback(){
        Promise.resolve(myFormulario.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.myFormulario = this.shadowRoot.querySelector("form");
            this.myFormulario.addEventListener('submit',                                                        
            this.handleEvent.bind(this))
        })
    }
}
customElements.define(name, myFormulario);
console.log(name);
