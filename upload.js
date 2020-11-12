const inFile = document.getElementById("inFile");
const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", function(){
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    
    // console.log(inFile.files[0].name.substr(inFile.files[0].name.length - 3));

    for(const file of inFile.files){
        // console.log(file.name.substr(file.name.length - 3));
        if (file.name.substr(file.name.length - 3).toLowerCase() == "jpg"){
            console.log(file.name)
            formData.append("myFiles[]", file);
        }

        // formData.append("myFiles[]", file);

    }

    xhr.open("post", "upload.php");
    xhr.send(formData);

    // console.log(document.getElementById("test").value);

});