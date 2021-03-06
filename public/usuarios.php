<?php
require('./config/online.php');
/*
    Essa página contém a base padrão de todas as páginas HMTML
    As seções header, footer e sidebar foram quebradas em partes menores para facilitar a manutenção
    O import foi feito em PHP para poder checar se existe uma seção ativa e que não tenha expirado.
    Todas as alterações devem ser feitas no elemento <main>
*/
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/main.css" type="text/css">
    <link rel="stylesheet" href="./styles/empresas.css" type="text/css">
    <script src="https://kit.fontawesome.com/039dbc5c5d.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Bebas+Neue&display=swap" rel="stylesheet">
    <title>SISCADEM</title>
</head>

<body class="grid-structure">
    <header class="grid-header">
    </header>
    <nav class="grid-aside">
    </nav>
    <main class="grid-main">
    <div class="grid-main__container">
            <div class="grid-main__card">
                <div class="grid-main__card__header">
                    <p class="grid-main__card__title">
                        Crie ou selecione um usuário para editá-lo
                    </p>
                    <button id="create-user" class="button--sucess">
                        Criar novo usuário
                    </button>
                </div>
                <usuarios-element class="grid-main__card__body">
                </usuarios-element>
            </div>
        </div>
    </main>
    <footer class="grid-footer">
    </footer>
    <script src="./scripts/htmlbuilder.js" type="module"></script>
    <script src="./scripts/usuarios.js" type="module"></script>
</body>

</html>