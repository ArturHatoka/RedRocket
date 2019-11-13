<?php
include "connect.php";

$markRate = $_POST['markRate'];
$userIp = $_SERVER['REMOTE_ADDR'];

$user_sql = "SELECT * FROM rating WHERE user_ip='$userIp'";
$check_user = $connect->query($user_sql);
$add_user = "INSERT INTO rating (value,user_ip) VALUES ('$markRate','$userIp')";

if($check_user->num_rows > 0){
    $response = array(
        'error' => 'Вы уже голосовали!',
    );
    echo json_encode($response);
}else{
    if ($connect->query($add_user) == "TRUE"){
        $response = array(
            'markRate' => $markRate,
        );
        echo json_encode($response);
    }
}

$connect->close();
