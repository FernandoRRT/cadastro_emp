function authJs(params) {
    var loginUrl = "http://127.0.0.1:8000/api/login/"
    var xhr = new XMLHttpRequest();
    var userElement = document.getElementById('username');
    var passwordElement = document.getElementById('password');
    var jwtResponse = document.getElementById('login-div_error');
    var user = userElement.value;
    var password = passwordElement.value;
  
    xhr.open('POST', loginUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.addEventListener('load', function() {
      var responseObject = JSON.parse(this.response);
      console.log(responseObject);
      console.log(responseObject.token);
      if (responseObject.token) {
        localStorage.setItem('token', responseObject.token);
        localStorage.setItem('token', responseObject);
        // jwtResponse.innerHTML = responseObject.token;
      } else {
       $result = JSON.stringify(responseObject);
       jwtResponse.innerHTML = `${responseObject.error}`;
      }
    });
     var sendObject = JSON.stringify({email: user, password: password});
     xhr.send(sendObject);
}

// make the request to the secret API endpoint
function getSecret() {

    var url = "http://127.0.0.1:8000/api/company/"
    var xhr = new XMLHttpRequest();
    var tokenElement = document.getElementById('token');
    var resultElement = document.getElementById('result');
    xhr.open('GET', url, true);
    xhr.setRequestHeader("Authorization", "JWT " + tokenElement.innerHTML);
    xhr.addEventListener('load', function() {
      var responseObject = JSON.parse(this.response);
      console.log(responseObject);
      resultElement.innerHTML = this.responseText;
    });
  
    xhr.send(null);
  }


//   https://developer.okta.com/blog/2018/06/05/authentication-vanilla-js#make-an-ajax-request-without-a-library
//   https://jonathanmh.com/example-json-web-tokens-vanilla-javascript/