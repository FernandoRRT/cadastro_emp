function handleResponse(resp) {
    if (resp.ok) {
        return resp.json();
    } else {
        throw new Error(resp.statusText);
    }
}

const getTokenEndpoint = async () => {
    const resp = await fetch(`http://127.0.0.1:8000/getToken.php`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return handleResponse(resp);
}

const getCompaniesEndpoint = async () => {
    const token = await getTokenEndpoint();
    const resp = await fetch(`http://127.0.0.1:8000/api/company/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token
        },
    });
    return handleResponse(resp);
}
export { getCompaniesEndpoint };

const creaCompanyEndpoint = async (objetc) => {
    const token = await getTokenEndpoint();
    const resp = await fetch(`http://127.0.0.1:8000/api/company/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token
        },
        body: JSON.stringify(objetc),
    });
    return handleResponse(resp);
}
export { creaCompanyEndpoint };

const viaCepEndpoint = async (cep) => {
    const resp = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    return handleResponse(resp);
}
export { viaCepEndpoint };