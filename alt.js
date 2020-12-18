
    // var date = new Date();

    // var day = date.getDate();
    // var month = date.getMonth() + 1;
    // var year = date.getFullYear();
    
    // if (month < 10) month = "0" + month;
    // if (day < 10) day = "0" + day;
    
    // var today = year + "-" + month + "-" + day;       
    // document.getElementById("dateSelection").value = today;
    
    // console.log("test");

function changePicture(){

    document.getElementById("picture1").src="active/img01.png";
    console.log("test");
};

function changeCSS() {
    console.log(document.getElementById("picture1").className);
    document.getElementById("picture1").className = "door-box door-img-new-2";
  }

  function changeCSS2() {
    console.log(document.getElementById("picture1").className);
    document.getElementById("picture21").className = "door-box door-img-new-24";
  }