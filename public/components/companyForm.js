import { creaCompanyEndpoint } from "../services/endpoints.js";

const companyForm = () => {
    class CreateCompany extends HTMLElement {
        static get formAssociated() {
            return true;
          }
        constructor() {
            super();
            this.internals = this.attachInternals();
            let shadow = this.attachShadow({ mode: 'open' });
            shadow.innerHTML = '<link rel="stylesheet" href="../styles/empresas.css" type="text/css">'
            const formDiv = document.createElement("div");
            formDiv.classList.add('grid-main__card');
            formDiv.innerHTML = `
            <link rel="stylesheet" href="../styles/empresas.css" type="text/css">
                <div class="grid-main__card__header">
                    <p class="grid-main__card__title">
                    Edição da empresa: TESTE
                    </p>
                </div>
                <div class="grid-main__usercard__body">
                    <div class="grid-main__usercard__divider">
                        <label for="trading-name" class="justifySelf--end">Nome Fantasia </label>
                        <input type="text" id="trading-name" name="trading-name" class="inputbox" value="" placeholder="Nome da empresa" required>
    
                        <label for="cnpj" class="justifySelf--end">CNPJ : </label>
                        <input type="text" id="cnpj" name="cnpj" class="inputbox" value="" placeholder="CNPJ da empresa">
    
                        <label for="foundation" class="justifySelf--end">Data de Fundação </label>
                        <input type="date" id="foundation" name="foundation" class="inputbox" value="" >
    
                        <label for="email" class="justifySelf--end">E-mail comercial </label>
                        <input type="email" id="email" name="email" class="inputbox" value="" placeholder="Email da empresa">
    
    
                        <label for="phone" class="justifySelf--end">Telefone </label>
                        <input type="tel" id="phone" name="phone" class="inputbox" value="" placeholder="Telefone comercial">
    
                        <label for="cep" class="justifySelf--end">CEP </label>
                        <input type="text" id="cep" name="cep" class="inputbox" value="" placeholder="CEP">
    
                        <label for="address" class="justifySelf--end">Endereço </label>
                        <input type="text" id="address" name="address" class="inputbox" value="" placeholder="Endereço comercial">
                    </div>
                </div> 
                `;
            const formcontrols = document.createElement("div");
            formcontrols.classList.add('grid-main__card__controls');
            formDiv.appendChild(formcontrols);

            const btnDanger = document.createElement("button");
            btnDanger.classList.add('button--danger');
            btnDanger.addEventListener('click',
                (evt) => deleteForm(evt));
            const dangerText = document.createTextNode("Excluir");
            btnDanger.appendChild(dangerText);
            formcontrols.appendChild(btnDanger);

            const btnWarning = document.createElement("button");
            btnWarning.classList.add('button--warning');
            btnWarning.addEventListener('click',
                (evt) => clearFields(evt, item.id));
            const warnText = document.createTextNode("Cancelar");
            btnWarning.appendChild(warnText);
            formcontrols.appendChild(btnWarning);

            const btnSuccess = document.createElement("button");
            btnSuccess.classList.add('button--sucess');
            btnSuccess.addEventListener('click',
                (evt) => checkForm(evt, item.id));
            const sucessText = document.createTextNode("Cancelar");
            btnSuccess.appendChild(sucessText);
            formcontrols.appendChild(btnSuccess);
            shadow.appendChild(formDiv);
        }
    }
    window.customElements.define(
        'formcompany-element', CreateCompany);
}
export { companyForm };



