<?php

var_dump($_FILES);

foreach($_FILES["myFiles"]["tmp_name"] as $key => $value){
    // $targetPath = "uploads/" . basename($_FILES["myFiles"]["name"][$key]);
    $targetPath = "active/" . $_POST["dataName"];
    move_uploaded_file($value, $targetPath);
}

?>