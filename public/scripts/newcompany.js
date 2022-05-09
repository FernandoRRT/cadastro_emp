import { creaCompanyEndpoint, viaCepEndpoint } from "../services/endpoints.js";

const getValue = (elId) => {
    return document.getElementById(`${elId}`).value;
}

const registro = (tradingName, cnpj, foundation, email, phone, cep, address) => {
    this.tradingName = tradingName;
    this.cnpj = cnpj;
    this.foundation = foundation;
    this.email = email;
    this.phone = phone;
    this.cep = cep;
    this.address = address;
    }





const deleteForm = (evt) => {
    evt.preventDefault();
    console.log(getValue('cnpj'));
    
    // document.location.reload(true);
}
const clearFields = (evt, cep) => {
    evt.preventDefault();

}

const checkForm = (evt, id) => {
    evt.preventDefault();
   
    const newReg = new registro(
        getValue('trading-name'),
        getValue('cnpj'),
        getValue('foundation'),
        getValue('email'),
        getValue('phone'),
        getValue('cep'),
        getValue('address'),
    );

    

}

const getAddress = (evt, loadCep) => {
    evt.preventDefault();
    if (!!loadCep) {
        Promise.resolve(viaCepEndpoint(loadCep)).then((resp) => {
            console.log(resp);
            document.getElementById("address").value = `${resp.logradouro}, nº , ${resp.localidade} / ${resp.uf}`;
        });
    }
}


window.addEventListener("load", () => {
    document.getElementById("btnDanger").addEventListener("click", (evt) => {deleteForm(evt)});
    document.getElementById("btnWrn").addEventListener("click", (evt) => {clearFields(evt)});
    document.getElementById("btnSucess").addEventListener("click", (evt) => {checkForm(evt)});
    document.getElementById("cep").addEventListener("blur", (evt) => {getAddress(evt, getValue('cep'))});
  });

  

