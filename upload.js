//File Upload (Single!)
function upload(){
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    var day = document.getElementById('dataName').value; 
    var file = document.getElementById("inFile").files[0];
    
    console.log(file.size);
    var tooBig = file.size > 1000000;
    var format = file.name.substr(file.name.length - 3).toLowerCase() == "jpg" || file.name.substr(file.name.length - 4).toLowerCase() == "jpeg";
    if (format && !tooBig){
        if(day <= 24 && day > 0){
            formData.append("myFiles[]", file);
            formData.append("dataName", day + ".jpg");
            xhr.open("post", "upload.php");
            xhr.send(formData);
        }else{
            alert("Das Fenster muss im Bereich von 1 bis einschließlich 24 liegen!")
        }
    }else{
        alert("Die Hochgeladene Datei entspricht nicht den Anforderungen!")
    }
}