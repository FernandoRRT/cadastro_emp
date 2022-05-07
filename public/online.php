<?php

session_start();
if (!$_SESSION['token']) {
    header('Location:index.html');
    die();
} else {
    $token = $_SESSION['token'];
    $expiration = $_SESSION['expiration'];
    $currentTime = time();
    if ($currentTime > $expiration) {
        session_destroy();
        setcookie('PHPSESSID', null, -1);
        header('Location:index.html');
        die();
    }
}