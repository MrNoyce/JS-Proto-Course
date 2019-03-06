//
//create Refs to Page elements
//
var addButton = document.getElementById("addButton");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList");
var clearButton = document.getElementById("clearButton")

//add new item to the list
addButton.addEventListener("click", function() {
    var task = taskInput.value;
    // dont add empty string
    if(task.trim()) {
        // add new task list item
        var newItem = document.createElement("LI");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        // clear text input box
        taskInput.value = "";
        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Done";
        removeButton.className = "remove";
        removeButton.addEventListener("click", removeTask);
        newItem.appendChild(removeButton);
        taskList.appendChild(newItem);
    }
    else{
        document.("task cannot be empty");
    }
});
//clear entire list
clearButton.addEventListener("click", function() {
    taskList.innerHTML = "";
})
//remove a task from the list
function removeTask(e) {
    //get the parent list item to remove
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
}

var mybutton

mybutton.on