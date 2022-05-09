<?php
require('./config/online.php');
header('Content-Type: application/json');
echo json_encode($token);
exit;
