// leeres Array erstellen
function makeArray(w, h, val) {
    var arr = [];
    for(let i = 0; i < h; i++) {
        arr[i] = [];
        for(let j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}
// Konstante mit den 24 Tagen
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
//Neuer Shuffle-Algorithmus
const shuffleArray = array => {
    for(var i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}

// Datepicker auf den aktuellen Stand bringen
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();  
if (month < 10){
    month = "0" + month;
}
if (day < 10){
    day = "0" + day;
}
var today = year + "-" + month + "-" + day;       
document.getElementById("dateSelection").value = today;

//Funktion zum Türen öffnen
const openDoor = (path, number, event) => {
    var dateUser = new Date(document.getElementById("dateSelection").value);
    if(dateUser.getMonth() == 11 && dateUser.getDate() >= number){
        event.target.parentNode.style.backgroundImage = `url(${path})`;
        event.target.style.opacity = "0";
        event.target.style.backgroundColor = "#222222";
    }
}

//Funktion zum Kalender erstellen
const createCalendar = () => {
    for(var i = 0; i  < 24; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        document.querySelector(".container").appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        dayNumber = i + 1;
        // var loginName = "active"; //maybe für einen login
        var picturePath = `./active/${dayNumber}.jpg`;
        if(dayNumber < 10){
            dayNumber = "0" + dayNumber;
        }
        calendarDoorText.addEventListener("click", openDoor.bind(null,  picturePath, dayNumber));
    }

    if(window.innerHeight > window.innerWidth){
        width = 4;
    }else{
        width = 6;
    }

// var width = 6;
shuffleArray(days);
var tmparray = [];
var j = 0;
//Arraysplittung
for(var i = 0;i < days.length; i += width){
    tmparray[j] = days.slice(i,i+width);
    j++;
}
//String-Konvertierung + Layout eintragen
    var elem= document.getElementById("container");
    var txtTmp = [];
    for(var i = 0; i < tmparray.length; i++){
        for(var a = 0; a < tmparray[i].length; a++){
            if(a == 0){
                txtTmp[i] = "door" + tmparray[i][a];
            }else{
                txtTmp[i] += " " + "door" + tmparray[i][a];
            }
        }
    }
if(width == 4){
    elem.style.gridTemplateAreas = `"${txtTmp[0]}" "${txtTmp[1]}" "${txtTmp[2]}" "${txtTmp[3]}" "${txtTmp[4]}" "${txtTmp[5]}"`;
}else{
    elem.style.gridTemplateAreas = `"${txtTmp[0]}" "${txtTmp[1]}" "${txtTmp[2]}" "${txtTmp[3]}"`;
}
}


//Kalender kreieren
window.addEventListener("load", createCalendar);

function test() {
    if(window.innerHeight > window.innerWidth){
        width = 4;
    }else{
        width = 6;
    }
    
    // var width = 6;
    var tmparray = [];
    var j = 0;
    //Arraysplittung
    for(var i = 0;i < days.length; i += width){
        tmparray[j] = days.slice(i,i+width);
        console.log(tmparray[j]);
        j++;
    }
    //String-Konvertierung + Layout eintragen
        var elem= document.getElementById("container");
        var txtTmp = [];
        for(var i = 0; i < tmparray.length; i++){
            for(var a = 0; a < tmparray[i].length; a++){
                if(a == 0){
                    txtTmp[i] = "door" + tmparray[i][a];
                }else{
                    txtTmp[i] += " " + "door" + tmparray[i][a];
                }
            }
        }
    if(width == 4){
        elem.style.gridTemplateAreas = `"${txtTmp[0]}" "${txtTmp[1]}" "${txtTmp[2]}" "${txtTmp[3]}" "${txtTmp[4]}" "${txtTmp[5]}"`;
    }else{
        elem.style.gridTemplateAreas = `"${txtTmp[0]}" "${txtTmp[1]}" "${txtTmp[2]}" "${txtTmp[3]}"`;
    }
}

window.addEventListener('resize', function(event){
    if(window.innerHeight > window.innerWidth){
        width = 4;
    }else{
        width = 6;
    }
    
    // var width = 6;
    var tmparray = [];
    var j = 0;
    //Arraysplittung
    for(var i = 0;i < days.length; i += width){
        tmparray[j] = days.slice(i,i+width);
        console.log(tmparray[j]);
        j++;
    }
    //String-Konvertierung + Layout eintragen
        var elem= document.getElementById("container");
        var txtTmp = [];
        for(var i = 0; i < tmparray.length; i++){
            for(var a = 0; a < tmparray[i].length; a++){
                if(a == 0){
                    txtTmp[i] = "door" + tmparray[i][a];
                }else{
                    txtTmp[i] += " " + "door" + tmparray[i][a];
                }
            }
        }
    if(width == 4){
        elem.style.gridTemplateAreas = `"${txtTmp[0]}" "${txtTmp[1]}" "${txtTmp[2]}" "${txtTmp[3]}" "${txtTmp[4]}" "${txtTmp[5]}"`;
    }else{
        elem.style.gridTemplateAreas = `"${txtTmp[0]}" "${txtTmp[1]}" "${txtTmp[2]}" "${txtTmp[3]}"`;
    }
});

//Mobile-Screenrotation
window.addEventListener("orientationchange", function(event) {
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    if (orientation.substr(0,9) ==  "landscape"){
        width = 6;
    }else{
        width = 4;
    }
    
    // var width = 6;
    var tmparray = [];
    var j = 0;
    //Arraysplittung
    for(var i = 0;i < days.length; i += width){
        tmparray[j] = days.slice(i,i+width);
        console.log(tmparray[j]);
        j++;
    }
    //String-Konvertierung + Layout eintragen
        var elem= document.getElementById("container");
        var txtTmp = [];
        for(var i = 0; i < tmparray.length; i++){
            for(var a = 0; a < tmparray[i].length; a++){
                if(a == 0){
                    txtTmp[i] = "door" + tmparray[i][a];
                }else{
                    txtTmp[i] += " " + "door" + tmparray[i][a];
                }
            }
        }
    if(width == 4){
        elem.style.gridTemplateAreas = `"${txtTmp[0]}" "${txtTmp[1]}" "${txtTmp[2]}" "${txtTmp[3]}" "${txtTmp[4]}" "${txtTmp[5]}"`;
    }else{
        elem.style.gridTemplateAreas = `"${txtTmp[0]}" "${txtTmp[1]}" "${txtTmp[2]}" "${txtTmp[3]}"`;
    }
  });