const inFile = document.getElementById("inFile");
const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", function(){
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    
    // console.log(inFile.files[0].name.substr(inFile.files[0].name.length - 3));

    for(const file of inFile.files){
        // console.log(file.name.substr(file.name.length - 3));
        if (file.name.substr(file.name.length - 3).toLowerCase() == "jpg"){
            // Object.defineProperty(file, 'name', {
            //     writable: true,
            //     value: "abc.jpg"
            //   });
            //   Object.defineProperty(file, 'Path', {
            //     writable: true,
            //     value: "/uploads/1.jpg"
            //   });
            console.log(file);
            formData.append("myFiles[]", file);
        }
    }

    var fileName = document.getElementById("dataName").value + ".jpg"
    formData.append("dataName", fileName);
    xhr.open("post", "upload.php");
    xhr.send(formData);

    // console.log(document.getElementById("test").value);

});