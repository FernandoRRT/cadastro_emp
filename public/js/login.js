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
      if (!!responseObject.token) {
        // localStorage.setItem('token', responseObject.token);
        // localStorage.setItem('token', responseObject);
        // jwtResponse.innerHTML = responseObject.token;
      } else {
       $result = JSON.stringify(responseObject);
       if (!!responseObject.error) {
         jwtResponse.innerHTML = `${responseObject.error}`;

       }
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
    xhr.setRequestHeader("Authorization", "bearer " + 
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY1MTg2ODQwMSwiZXhwIjoxNjUxODcyMDAxLCJuYmYiOjE2NTE4Njg0MDEsImp0aSI6IjRSZmlSb0hUTWVnRlZ6bU0iLCJzdWIiOjEsInBydiI6IjAwODU3ZDI3Y2ZhMjhmOTRiMGFmMTQ5MTI1YzhkMWJiNWJjMjczOTkiLCJpZCI6MSwiZW1haWwiOiJmZXJuYW5kb0BzaXNjYWRlbS5jb20ifQ.bEGBxlVsmuFWSMtA4rCdKgFpuE1LOInVz3tKDto37fI"
    );
    xhr.addEventListener('load', function() {
      var responseObject = JSON.parse(this.response);
      console.log(responseObject);
      resultElement.innerHTML = this.responseText;
    });
  
    xhr.send(null);
  }


//   https://developer.okta.com/blog/2018/06/05/authentication-vanilla-js#make-an-ajax-request-without-a-library
//   https://jonathanmh.com/example-json-web-tokens-vanilla-javascript/