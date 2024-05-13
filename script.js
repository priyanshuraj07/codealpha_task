const toggle = document.getElementById('toggle');

toggle.addEventListener('change', (event) => {
if (event.target.checked) {
    // Toggle is checked (on) - Perform actions here
    console.log('Toggle is ON');
} else {
    // Toggle is not checked (off) - Perform actions here
    console.log('Toggle is OFF');
}
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value.trim();

    if (task !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
