const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const openDoor = (path, number, event) => {
    var dateUser = new Date(document.getElementById("dateSelection").value);
    if(dateUser.getMonth() == 11 && dateUser.getDate() >= number){
        event.target.parentNode.style.backgroundImage = `url(${path})`;
        event.target.style.opacity = "0";
        event.target.style.backgroundColor = "#222222";
    }
}

const createCalendar = () => {
    for(var i = 0; i  < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        courseNumber = i + 1;
        // var loginName = "active";
        var coursePath = `./active/${courseNumber}.jpg`;
        if(courseNumber < 10){
            courseNumber = "0" + courseNumber;
        }
        calendarDoorText.addEventListener("click", openDoor.bind(null,  coursePath, courseNumber));
    }
}

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

var test = makeArray(4,6, null);

for(var i = 0 ; i < 6; i++){
    for(var a = 0; a < 4; a++){
        var getOut = true;
        do{
            var tmp = Math.floor(Math.random()*24+1);
            for(var z = 0; z <= i; z++){
                if(test[z].includes(tmp)){
                    getOut = test[z].includes(tmp);
                    break;
                }else{
                    getOut = test[z].includes(tmp);
                }
            }
            if (!getOut){ //nicht true = befüllen
                test[i][a] = tmp;
            }
        }
        while (getOut);
    }
    
}

for(var i = 0; i < test.length; i++){
    var txtTmp= "";
    for(var a = 0; a < test[i].length; a++){
        if(a == 0){
            txtTmp += "door" + test[i][a];
        }else{
            txtTmp += " " + "door" + test[i][a];
        }
    }
    // console.log(txtTmp);
}
// console.log(test);

function changeOrder() {
    var elem= document.getElementById("container");
    var txtTmp = [];
    for(var i = 0; i < test.length; i++){
        for(var a = 0; a < test[i].length; a++){
            if(a == 0){
                txtTmp[i] = "door" + test[i][a];
            }else{
                txtTmp[i] += " " + "door" + test[i][a];
            }
        }
        // console.log(txtTmp[i]);
    }

	elem.style.gridTemplateAreas = `"${txtTmp[0]}" "${txtTmp[1]}" "${txtTmp[2]}" "${txtTmp[3]}" "${txtTmp[4]}" "${txtTmp[5]}"`;
}


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

window.addEventListener("load", createCalendar);
window.addEventListener("load", changeOrder);
