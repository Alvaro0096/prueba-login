<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$pass = $_POST['pass'];

if($name === '' || $mail === '' || $pass === ''){
    echo json_encode('faltan completar campos');
} else {
    echo json_encode('Exito');
}
?>