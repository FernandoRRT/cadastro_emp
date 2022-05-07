
localStorage.clear();

const signInEndpoint = async (email, password) => {
  return await fetch(`http://127.0.0.1:8000/api/login/`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      if (!!data.access_token) {
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        document.getElementById('hiddenToken').value = data.access_token;
        document.getElementById('hiddenExpiration').value = data.expiration;
        document.getElementById("sendToken").submit();
      } else {
        if (!!data.error) {
          document.getElementById('login-div_error').innerHTML = `${data.error}`;
        }
      }
    }).catch(function (err) {
      document.getElementById('login-div_error').innerHTML = `Erro: ${err}. Contate o administrador.`;
    });
};
