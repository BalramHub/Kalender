<?php
//Multiupload möglich, wird aber nicht genutzt
foreach($_FILES["myFiles"]["tmp_name"] as $key => $value){
    $targetPath = "active/" . $_POST["dataName"];
    if(move_uploaded_file($value, $targetPath)){
        echo "Datei erfolgreich hochgeladen";
        exit;
    }else{
        echo "Beim Hochladen der Datei ist ein Fehler aufgetreten";
        exit;
    }
}
?>