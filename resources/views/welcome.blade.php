<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./styles/index.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Vollkorn:400,400i,700" rel="stylesheet">
    <title>SISCADEM</title>
</head>

<body>
    <main>
        <div class="login-div">
            <h1>SISCADEM</h1>
            <p>Para testar o sistema, use o email
                <strong>fernando@siscadem.com</strong> e a senha <strong>senha123</strong>.
            </p>

            <div class="login-div_input">
                <label for="username">Email:</label>
                <input type="email" id="username" class="inputbox" value="fernando@siscadem.com"
                    placeholder="Digite o email" required>

            </div>
            <div class="login-div_input">
                <label for="password">Password:</label>
                <input type="password" id="password" class="inputbox" value="senha123" placeholder="Digite a senha"
                    required>
            </div>
            
            <div class="login-div_controls">
                <button id="login" onclick="signInEndpoint(
                    document.getElementById('username').value, 
                    document.getElementById('password').value)">
                    Entrar
                </Button>
            </div>
            <div id="login-div_error">
            </div>

        </div>
        <form action="./config/createSession.php" id="sendToken" method="post">
            <input type='hidden' id='hiddenToken' name='tokenField' value='' />
            <input type='hidden' id='hiddenExpiration' name='tokenExpiration' value='' />
        </form>
    </main>
    <script src="./services/login.js"></script>
</body>
</html>