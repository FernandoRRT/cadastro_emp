import { createUserEndpoint, updateUserEndpoint, deleteUserEndpoint, viaCepEndpoint, getBlacklistEndpoint } from "../services/endpoints.js";

class Registro {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

const registro = new Registro();
const retrieveData = localStorage.getItem('UserId');

document.getElementById("password").setAttribute("autocomplete", "off");

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

const deleteForm = (evt, registro) => {
    evt.preventDefault();
    Promise.resolve(deleteUserEndpoint(registro)).then(() => window.location.href='/usuarios.php');
}

const exitForm = (evt) => {
    evt.preventDefault();
    window.location.href='/usuarios.php';
}

const checkForm = (evt) => {
    evt.preventDefault();

    let formerros = document.getElementById("grid-main__card__errors");
    formerros.innerHTML = "";
    if (registro.name == "") {
        formerros.innerHTML = "O campo nome não pode ser vazio";
    }
    else {
        if (registro.password == "") {
            formerros.innerHTML = "O campo da senha não pode ficar em branco.";
        } else {
            if (registro.password.length < 7) {
                formerros.innerHTML = "A senha deve ter no mínimo sete dígitos.";
            } else {
                const regex = /[A-z0-9]/;
                if (regex.test(registro.password)) {
                    if (registro.email == "") {
                        formerros.innerHTML = "O campo email não pode ficar em branco.";
                    } else {
                        Promise.resolve(getBlacklistEndpoint()).then((resp) => {
                            let banned = resp.map(function (item) { return item.email; }).includes(registro.email);
                            if (banned) {
                                formerros.innerHTML = "Email bloqueado pelo sistema. Cadastre outro ou entre em contato com o administrador.";
                            }
                            else {
                                if (retrieveData === "new") {
                                    Promise.resolve(createUserEndpoint(registro)).then(() => window.location.href='/usuarios.php');
                                } else {
                                    Promise.resolve(updateUserEndpoint(registro)).then(() => window.location.href='/usuarios.php');
                                }
                            }
                        });
                    }
                } else {
                    formerros.innerHTML = "A senha deve conter somente letras e números.";
                }
            }
        }
    }
}



window.addEventListener("load", () => {

    const titulo = document.getElementsByClassName("grid-main__card__title")[0];

    if (retrieveData == "new") {
        titulo.innerHTML = "Criar novo usuário:";
    } else {
        const userData = JSON.parse(retrieveData);
        titulo.innerHTML = `Editando o usuário id #${userData.id}`;
        registro.id = userData.id;
        registro.email = userData.email;
        registro.name = userData.name;
        setFormValue('email' , userData.email);
        setFormValue('name' , userData.name);
        
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
    document.getElementById("name").addEventListener("blur", (evt) => { setValue(evt) });
    document.getElementById("email").addEventListener("blur", (evt) => { setValue(evt) });
    document.getElementById("password").addEventListener("blur", (evt) => { setValue(evt) });
});
