<?php 
$POSTtoken = $POSTexpiration = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $POSTtoken = $_POST["tokenField"];
  $POSTexpiration = $_POST["tokenExpiration"];
  session_start();
  $_SESSION['token'] = $POSTtoken;
  $_SESSION['expiration'] = $POSTexpiration;
  header('Location:../empresas.php'); 
}
else {
  header('Location:../index.php'); 
}
?>