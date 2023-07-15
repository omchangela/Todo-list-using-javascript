document.getElementById("addTaskBtn").addEventListener("click", addTask);

    // add 
    function addTask() {
        var input = document.getElementById("input");
        var task = input.value;
        if (task !== "") {
            var timestamp = new Date().toLocaleTimeString();
            var listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.innerHTML = `
                <input type="checkbox" class="form-check-input " onclick="completeTask(this)">
                <span class="valuee" >${task}</span>
                <span class="badge">${timestamp}</span>
                <button class="delete-button " onclick="deleteTask(this)"><i class="fa fa-trash"></i></button>`;
            document.getElementById("taskList").appendChild(listItem);
            input.value = "";
        }
    }

    //check-box
    function completeTask(checkbox)
    {
        var taskText = checkbox.nextElementSibling;
        if (checkbox.checked) {
            taskText.classList.add("completed");
            taskText.nextElementSibling.innerHTML += " (Completed: " + new Date().toLocaleTimeString() + ")";
        } else {
            taskText.classList.remove("completed");
            taskText.nextElementSibling.innerHTML = taskText.nextElementSibling.innerHTML.replace(/\s+\(Completed:.*\)/, "");
        }
    }

    //delete
    function deleteTask(deleteButton) {
        var listItem = deleteButton.parentElement;
        listItem.remove();
    }