function addTask() {
    const inputContent = document.getElementById("userInput").value;
    const listItem = document.createElement("li"); 
    if (inputContent === "") {
        alert("You must write something!!");
    } else {
        listItem.textContent = inputContent; 
        const list = document.getElementById("taskList"); 
        list.appendChild(listItem);
        const delIcon = document.createElement("span");
        delIcon.innerHTML = "\u00d7";
        listItem.appendChild(delIcon);
        document.getElementById("userInput").value = "";
        saveData()
    }
}


document.getElementById("taskList").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", document.getElementById("taskList").innerHTML);
}
function showData(){
    document.getElementById("taskList").innerHTML=localStorage.getItem("data");
}
showData();
