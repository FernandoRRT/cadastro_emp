<?php
require('./config/online.php');
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/dashboard.css" type="text/css">
    <script src="https://kit.fontawesome.com/039dbc5c5d.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Bebas+Neue&display=swap" rel="stylesheet">
    <title>SISCADEM</title>
</head>

<body class="grid-structure">
    <header class="grid-header">
        <span class="grid-header__welcome-message">Bem vindo usuário </span>
        <span class="grid-header__user-name"></span>
    </header>
    <nav class="grid-aside">
        <sidebar-element></sidebar-element>
    </nav>
    <main class="grid-main">
        <div class="grid-main__container">
            Main
            <p id="arr"></p>

        </div>
    </main>
    <footer class="grid-footer">
        <footer-element></footer-element>
    </footer>
    <script src="./js/dashboard.js" type="module"></script>
</body>

</html>

