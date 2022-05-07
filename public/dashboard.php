<?php
require('online.php');
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
        <div class="grid-aside__logodiv">
            <i class="fa-solid fa-box-archive fa-2xl"></i>
            <div class="grid-aside__descriptor">
                <div class="grid-aside__descriptor--text1">SISCADEM</div>
                <div class="grid-aside__descriptor--text2">Cadastro de empresas</div>
            </div>
        </div>
        <div class="grid-aside__sidenav">
            <div class="grid-aside__menu-item">
                <a href="#" class="secondary-text-color">
                    <div class="grid-aside__menu-link">
                        <i class="fa-regular fa-file-lines"></i> <span>Empresas</span>
                    </div>
                </a>
            </div>
            <div class="grid-aside__menu-item">
                <a href="#" class="secondary-text-color">
                    <div class="grid-aside__menu-link">
                        <i class="fa-solid fa-users-gear"></i> <span>Usuários</span>
                    </div>
                </a>
            </div>
        </div>
    </nav>
    <main class="grid-main">
        <div class="grid-main__container">
            Main
            <p id="arr"></p>
            <gfg-custom-element></gfg-custom-element>
        </div>
    </main>
    <footer class="grid-footer">
        <!-- conteúdo carregado através do JS para reduzir o tamanho do código no arquivo e para fins educativos -->
    </footer>
    <script src="./js/dashboard.js"></script>
</body>

</html>