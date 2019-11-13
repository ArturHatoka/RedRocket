<?php
include "connect.php";
$preload_sql = "SELECT * FROM rating";
$preload = $connect -> query($preload_sql);
$value_col = 0;
$total_value = 0;
while($load = $preload->fetch_assoc()) {
    $value = $load['value'];
    $value_col++;
    $total_value += $value;
}
$cent_value = ceil($total_value/$value_col);

$response = array(
    'centRate' => $cent_value,
    'valueCount' => $value_col,

);
echo json_encode($response);

$connect->close();