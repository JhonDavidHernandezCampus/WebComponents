let patName = new URL(import.meta.url).pathname;
let name = patName.split('/').pop().replace(".js","");

export default class myTabla extends HTMLElement{
    static async components(){
        return await (await fetch(patName.replace(".js",".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(myTabla.components()).then(html => {
            this.shadowRoot.innerHTML = html;
        })
    }
}
customElements.define(name,myTabla)