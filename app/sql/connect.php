<?php
$server = 'server135.hosting.reg.ru';
$user = 'u0679512_red_roc';
$pass = 'YV8-QZP-VTu-Rsj';
$dbname = 'u0679512_red_rocket';


$connect = new mysqli($server, $user, $pass, $dbname);
if ($connect->connect_error){
    die("Ошибка подключеня к БД");
}
$connect->set_charset("utf8");



