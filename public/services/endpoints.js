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

// Endpoints para manejo de companhias

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

const updateCompanyEndpoint  = async (obj) => {
    const token = await getTokenEndpoint();
    const resp = await fetch(`http://127.0.0.1:8000/api/company/${obj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token
        },
        body: JSON.stringify(obj),
    });
    return handleResponse(resp);
}
export { updateCompanyEndpoint };

const createCompanyEndpoint = async (objetc) => {
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
export { createCompanyEndpoint };


const deleteCompanyEndpoint  = async (obj) => {
    const token = await getTokenEndpoint();
    const resp = await fetch(`http://127.0.0.1:8000/api/company/${obj.id}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token
        },
    });
    return handleResponse(resp);
}
export { deleteCompanyEndpoint };

// Edpoint para buscar CEPs na API dos correios

const viaCepEndpoint = async (cep) => {
    const resp = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    return handleResponse(resp);
}
export { viaCepEndpoint };

// Endpoint de verificação de blacklist

const getBlacklistEndpoint = async () => {
    const token = await getTokenEndpoint();
    const resp = await fetch(`http://127.0.0.1:8000/api/blacklist/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token
        },
    });
    return handleResponse(resp);
}
export { getBlacklistEndpoint };

// Endpoists para manejo de usuários

const getUsersEndpoint = async () => {
    const token = await getTokenEndpoint();
    const resp = await fetch(`http://127.0.0.1:8000/api/users/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token
        },
    });
    return handleResponse(resp);
}
export { getUsersEndpoint };

const updateUserEndpoint  = async (obj) => {
    const token = await getTokenEndpoint();
    const resp = await fetch(`http://127.0.0.1:8000/api/users/${obj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token
        },
        body: JSON.stringify(obj),
    });
    return handleResponse(resp);
}
export { updateUserEndpoint };

const createUserEndpoint = async (objetc) => {
    const token = await getTokenEndpoint();
    const resp = await fetch(`http://127.0.0.1:8000/api/users/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token
        },
        body: JSON.stringify(objetc),
    });
    return handleResponse(resp);
}
export { createUserEndpoint };


const deleteUserEndpoint  = async (obj) => {
    const token = await getTokenEndpoint();
    const resp = await fetch(`http://127.0.0.1:8000/api/users/${obj.id}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token
        },
    });
    return handleResponse(resp);
}
export { deleteUserEndpoint };