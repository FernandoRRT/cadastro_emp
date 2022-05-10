import { getUsersEndpoint } from "../services/endpoints.js";

const listUsers = () => {
    class LoadUsers extends HTMLElement {
        constructor() {
            super();
            let shadow = this.attachShadow({ mode: 'open' });
            Promise.resolve(getUsersEndpoint()).then(function (list) {
                list.map((item) => {
                    const cardDiv = document.createElement("div");
                    cardDiv.classList.add('grid-main__card__element');
                    cardDiv.addEventListener('click', 
                    (evt) => editUser(evt, item));
                    shadow.appendChild(cardDiv);
                    const cardbody = document.createElement("div");
                    cardbody.classList.add('grid-main__card__element__child');
                    cardDiv.appendChild(cardbody);
                    cardbody.innerHTML = `
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <link rel="stylesheet" href="../styles/empresas.css" type="text/css">
                    <div class="grid-main__card__element__icondiv">
                        <i class="fa-solid fa-user fa-2xl"></i>
                    </div>
                    <div>
                        <div>
                            <div class="grid-main__card__element__body">
                                <span class="grid-main__card__element__body__title">
                                    Nome do usuário:
                                </span>
                                <span class="grid-main__card__element__body__description">
                                    ${item.name}
                                </span>
                            </div>
                            <div class="grid-main__card__element__body">
                                <span class="grid-main__card__element__body__title">
                                    Email:
                                </span>
                                <span class="grid-main__card__element__body__description">
                                    ${item.email}
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
        'usuarios-element', LoadUsers);
}
export { listUsers };



const editUser = (evt, item) => {
    evt.preventDefault();
    localStorage.setItem('UserId', JSON.stringify(item));
    window.location.href='/usersform.php';
}
export { editUser };