<?php
session_destroy();
setcookie('PHPSESSID', null, -1);
header('Location:../index.php');
die();
