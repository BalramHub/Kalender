<?php

var_dump($_FILES);

foreach($_FILES["myFiles"]["tmp_name"] as $key => $value){
    $targetPath = "active/" . $_POST["dataName"];
    move_uploaded_file($value, $targetPath);
}

?>