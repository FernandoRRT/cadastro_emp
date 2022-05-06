<?php 

// define variables and set to empty values
$token = $name = $useremail = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $token = test_input($_POST["token"]);
  $name = test_input($_POST["name"]);
  $useremail = test_input($_POST["useremail"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}




?>