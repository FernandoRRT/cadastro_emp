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
                    
                    </p>
                </div>
                <div class="grid-main__usercard__body">
                    <div class="grid-main__usercard__divider">
                        <input type="hidden" id="id" name="id">
                        <label for="trading_name" class="justifySelf--end">Nome Fantasia </label>
                        <input type="text" id="trading_name" name="trading_name" class="inputbox" value="" placeholder="Nome da empresa" required>
    
                        <label for="cnpj" class="justifySelf--end">CNPJ </label>
                        <input type="text" id="cnpj" name="cnpj" class="inputbox" value="" placeholder="CNPJ da empresa">
    
                        <label for="foundation" class="justifySelf--end">Data de Fundação </label>
                        <input type="date" id="foundation" name="foundation" class="inputbox" value="" >
    
                        <label for="email" class="justifySelf--end">E-mail comercial </label>
                        <input type="email" id="email" name="email" class="inputbox" value="" placeholder="Email da empresa">
    
    
                        <label for="phone" class="justifySelf--end">Telefone </label>
                        <input type="tel" id="phone" name="phone" class="inputbox" value="" placeholder="Telefone comercial">
    
                        <label for="zipcode" class="justifySelf--end">zipcode </label>
                        <input type="text" id="zipcode" name="zipcode" class="inputbox" value="" placeholder="zipcode">
    
                        <label for="address" class="justifySelf--end">Endereço </label>
                        <input type="text" id="address" name="address" class="inputbox" value="" placeholder="Endereço comercial">
                    </div>
                </div>
                <div class="grid-main__card__errors">
                    <p id="grid-main__card__errors"> </p>
                </div>
                <div class="grid-main__card__controls">
                    <button id="btnSucess" class="button--sucess">Salvar</button>
                    <button id="btnWrn" class="button--warning">Cancelar</button>
                </div>
            </div>
        </div>
    </main>
    <footer class="grid-footer">
    </footer>
    <script src="./scripts/htmlbuilder.js" type="module"></script>
    <script src="./scripts/empresasform.js" type="module"></script>
</body>

</html>

