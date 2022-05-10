import { createCompanyEndpoint, updateCompanyEndpoint, deleteCompanyEndpoint, viaCepEndpoint, getBlacklistEndpoint } from "../services/endpoints.js";

class Registro {
    constructor(id, trading_name, cnpj, foundation, email, phone, zipcode, address, created_at, updated_at) {
        this.id = id;
        this.trading_name = trading_name;
        this.cnpj = cnpj;
        this.foundation = foundation;
        this.email = email;
        this.phone = phone;
        this.zipcode = zipcode;
        this.address = address;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

const registro = new Registro();
const retrieveData = localStorage.getItem('EmpresaId');

const getValue = (elId) => {
    return document.getElementById(`${elId}`).value;
}
const setValue = (evt) => {
    evt.preventDefault();
    let elId = evt.target.id;
    registro[`${evt.target.id}`] = document.getElementById(`${elId}`).value;
}

const setFormValue = (elId, value) => {
    document.getElementById(`${elId}`).value = `${value}`;
}

const getAddress = (evt) => {
    evt.preventDefault();
    let loadCep = evt.target.value;
    if (!!loadCep) {
        Promise.resolve(viaCepEndpoint(loadCep)).then((resp) => {
            if (!resp.erro) {
                let fieldValue = `${resp.logradouro} nº , ${resp.localidade} / ${resp.uf}`;
                document.getElementById("address").value = fieldValue;
                setValue(evt);
                setValue({
                    'preventDefault': () => { },
                    'target': {
                        'id': 'address',
                        'value': fieldValue
                    }
                });
            }
        });
    }
}

const deleteForm = (evt, registro) => {
    evt.preventDefault();
    Promise.resolve(deleteCompanyEndpoint(registro)).then(() => window.location.href='/empresas.php');
}

const exitForm = (evt) => {
    evt.preventDefault();
    window.location.href='/empresas.php';
}

const checkForm = (evt) => {
    evt.preventDefault();

    let formerros = document.getElementById("grid-main__card__errors");
    formerros.innerHTML = "";

        if (!!registro.trading_name) {
            if (registro.trading_name.length < 5) {
                formerros.innerHTML = "O nome fantasia não pode ser vazio ou menor que cinco caracteres";
            }
            else {
                if (registro.email == "") {
                    formerros.innerHTML = "O campo email não pode ficar em branco.";
                }
                else {
                    Promise.resolve(getBlacklistEndpoint()).then((resp) => {
                        let banned = resp.map(function (item) { return item.email; }).includes(registro.email);
                        if (banned) {
                            formerros.innerHTML = "Email bloqueado pelo sistema. Cadastre outro ou entre em contato com o administrador.";
                        }
                        else {
                            if (retrieveData === "new") {
                                Promise.resolve(createCompanyEndpoint(registro)).then(() => window.location.href='/empresas.php');
                            } else {
                                Promise.resolve(updateCompanyEndpoint(registro)).then(() => window.location.href='/empresas.php');
                            }
                        }
                    });
                }
            }
        }
        else {
            formerros.innerHTML = "O nome fantasia precisa ser preenchido.";
        }
}


window.addEventListener("load", () => {


    const titulo = document.getElementsByClassName("grid-main__card__title")[0];

    if (retrieveData == "new") {
        titulo.innerHTML = "Criar nova empresa";
    } else {
        const company = JSON.parse(retrieveData);
        titulo.innerHTML = `Editando a empresa de id #${company.id}`;
        Object.keys(company).forEach(function(item){
            if (item != 'created_at' && item != 'updated_at') {
                registro[`${item}`] = company[`${item}`];
                setFormValue(item , company[`${item}`]);
            }
        });

        const formcontrols = document.getElementsByClassName('grid-main__card__controls')[0];
        const btnDanger = document.createElement("button");
        btnDanger.classList.add('button--danger');
        btnDanger.addEventListener('click',
            (evt) => deleteForm(evt, registro));
        const dangerText = document.createTextNode("Excluir");
        btnDanger.appendChild(dangerText);
        formcontrols.appendChild(btnDanger);
    }


    document.getElementById("btnWrn").addEventListener("click", (evt) => { exitForm(evt) });
    document.getElementById("btnSucess").addEventListener("click", (evt) => { checkForm(evt) });
    document.getElementById("zipcode").addEventListener("blur", (evt) => { getAddress(evt) });
    document.getElementById("trading_name").addEventListener("blur", (evt) => { setValue(evt) });
    document.getElementById("cnpj").addEventListener("blur", (evt) => { setValue(evt) });
    document.getElementById("foundation").addEventListener("blur", (evt) => { setValue(evt) });
    document.getElementById("email").addEventListener("blur", (evt) => { setValue(evt) });
    document.getElementById("phone").addEventListener("blur", (evt) => { setValue(evt) });
    document.getElementById("address").addEventListener("blur", (evt) => { setValue(evt) });
});
