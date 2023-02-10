document.addEventListener('DOMContentLoaded', () => {
    console.log('Meeko.js y el DOM estan cargados');
});


//Dialogue component
class Dialogue extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<h4>Hello</h4>
        <p>This is the meeko dialogue...</p>`
    }
}
customElements.define('meeko-dialogue', Dialogue);


//Button component
class Button extends HTMLElement {
    constructor() {
        super();       
    }
    connectedCallback() {
        this.innerHTML = `<button>Meeko button</button>`
    }
}
customElements.define('meeko-button', Button);
// <button></button>


//Edit component
class Edit extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<input type = "text" placeholder = "write text">`
    }
}
customElements.define('meeko-edit', Edit);


//Select component
class Select extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<input type = "checkbox">`
    }
}
customElements.define('meeko-select', Select);
