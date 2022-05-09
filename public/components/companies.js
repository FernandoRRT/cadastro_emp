import { getCompaniesEndpoint } from "../services/endpoints.js";

const listCompanies = () => {
    class LoadCompany extends HTMLElement {
        constructor() {
            super();
            let shadow = this.attachShadow({ mode: 'open' });
            Promise.resolve(getCompaniesEndpoint()).then(function (list) {
                list.map((item) => {
                    const cardDiv = document.createElement("div");
                    cardDiv.classList.add('grid-main__card__element');
                    cardDiv.addEventListener('click', 
                    (evt) => editCompany(evt, item.id));
                    shadow.appendChild(cardDiv);
                    const cardbody = document.createElement("div");
                    cardbody.classList.add('grid-main__card__element__child');
                    cardDiv.appendChild(cardbody);
                    cardbody.innerHTML = `
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <link rel="stylesheet" href="../styles/empresas.css" type="text/css">
                    <div class="grid-main__card__element__icondiv">
                        <i class="fa-solid fa-briefcase fa-2xl"></i>
                    </div>
                    <div>
                        <div>
                            <div class="grid-main__card__element__body">
                                <span class="grid-main__card__element__body__title">
                                    Nome da Empresa:
                                </span>
                                <span class="grid-main__card__element__body__description">
                                    ${item.trading_name}
                                </span>
                            </div>
                            <div class="grid-main__card__element__body">
                                <span class="grid-main__card__element__body__title">
                                    Telefone:
                                </span>
                                <span class="grid-main__card__element__body__description">
                                    ${item.phone}
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                });

            }
            );
        }
    }
    window.customElements.define(
        'empresas-element', LoadCompany);
}
export { listCompanies };



const editCompany = (evt, id) => {
    evt.preventDefault();


}
export { editCompany };