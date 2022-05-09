<?php
require('../config/online.php');
?>

<div>
    <div class="grid-aside__logodiv">
        <i class="fa-solid fa-box-archive fa-2xl logodiv--icon"></i>
        <div class="grid-aside__descriptor">
            <div class="grid-aside__descriptor--text1">SISCADEM</div>
            <div class="grid-aside__descriptor--text2">Cadastro de empresas</div>
        </div>
    </div>
    <div class="grid-aside__sidenav">
        <a href="../empresas.php" class="grid-aside__menu--link">
            <div id="link-empresas" class="grid-aside__menu__link">
                <i class="fa-regular fa-file-lines"></i> <span>Empresas</span>
            </div>
        </a>
        <a href="../usuarios.php" class="grid-aside__menu--link">
            <div id="link-usuarios" class="grid-aside__menu__link">
                <i class="fa-solid fa-users-gear"></i> <span>Usuários</span>
            </div>
        </a>
        <a href="../config/destroySession.php" class="grid-aside__menu--link">
            <div id="link-usuarios" class="grid-aside__menu__link">
                <i class="fa-solid fa-power-off"></i> <span>Sair</span> 
            </div>
        </a>
    </div>
</div>