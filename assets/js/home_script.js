
// This function calls when delete button clicks
document.getElementById("delete").onclick = function (event) {
    var idArr = [];
    event.preventDefault();
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    
    // Taking id of all ticked checkbox and pass id's array in URL
    for (let i of checkboxes) {
        if (i.checked) {
            idArr.push(i.value);
        }
    }
    // Check for empty deletion
    if (idArr.length == 0) {
        alert("Select Some items First");
    } else {
        location.href = "http://localhost:8000/todo/delete/" + idArr;
    }
};


// Function for make cut on text when checkbox clicks
function colorText(){
    var  checkboxes = document.querySelectorAll("input[type=checkbox]");
    var todo=document.querySelectorAll('.fetched-todo');
    for(let i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            todo[i].style.textDecoration="line-through";
        }
        else{
            todo[i].style.textDecoration="none";
        }
    }
}


// focusing on input textbox when page loads
window.onload = function () {
    document.getElementById("textarea").focus();
    document.getElementById("description").style.backgroundColor = "#eaedf0";
    document.getElementById("textarea").style.backgroundColor = "#eaedf0";
};

// for background color effect when someone clicks on category section
document.getElementById("category").onclick = function () {
    console.log("hi");
    document.getElementById("browser").focus();
    document.getElementById("category").style.backgroundColor = "#eaedf0";
    document.getElementById("browser").style.backgroundColor = "#eaedf0";
    document.getElementById("date").style.backgroundColor = "white";
    document.getElementById("input-date").style.backgroundColor = "white";
    document.getElementById("description").style.backgroundColor = "white";
    document.getElementById("textarea").style.backgroundColor = "white";
};


// for background color effect when someone clicks on description section
document.getElementById("description").onclick = function () {
    console.log("hi");
    document.getElementById("textarea").focus();
    document.getElementById("description").style.backgroundColor = "#eaedf0";
    document.getElementById("textarea").style.backgroundColor = "#eaedf0";
    document.getElementById("date").style.backgroundColor = "white";
    document.getElementById("input-date").style.backgroundColor = "white";
    document.getElementById("category").style.backgroundColor = "white";
    document.getElementById("browser").style.backgroundColor = "white";
};


// for background color effect when someone clicks on date section
document.getElementById("date").onclick = function () {
    document.getElementById("category").style.backgroundColor = "white";
    document.getElementById("browser").style.backgroundColor = "white";
    document.getElementById("date").style.backgroundColor = "#eaedf0";
    document.getElementById("input-date").style.backgroundColor = "#eaedf0";
    document.getElementById("description").style.backgroundColor = "white";
    document.getElementById("textarea").style.backgroundColor = "white";
};


// for giving different background color to the div of different categories

var fetchedCategory = document.getElementsByClassName("fetched-category");

for (let i of fetchedCategory) {
    if (i.innerHTML === "Work") {
        i.style.backgroundColor = "#9a00ac";
        console.log(i);
    } else if (i.innerHTML === "Personal") {
        i.style.backgroundColor = "#3c6ab9";
    } else if (i.innerHTML === "School") {
        i.style.backgroundColor = "#ff9800";
    } else if (i.innerHTML === "Cleaning") {
        i.style.backgroundColor = "#4caf50";
    } else if (i.innerHTML === "Other") {
        i.style.backgroundColor = "#009688";
    } else {
        i.style.backgroundColor = "#795548";
    }
}

// Checking whether added Todo is in due date or crossed the deadline

var d = new Date();
var date = document.getElementsByClassName("show-date");
for (let i of date) {
    let singleDate = i.innerText.split("-");
    if (d.getFullYear() > singleDate[0]) {
        i.innerText += "  --Due Date Passed";
        i.style.color = "red";
        continue;
    }
    if (d.getMonth() + 1 > singleDate[1]) {
        i.innerText += "  --Due Date Passed";
        i.style.color = "red";
        continue;
    }
    if (d.getDate() > singleDate[2]) {
        i.innerText += "  --Due Date Passed";
        i.style.color = "red";
        continue;
    }
}


// for notification on successfull updation of todo  --Add/Delete

if (window.performance.navigation.type === 0) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}
