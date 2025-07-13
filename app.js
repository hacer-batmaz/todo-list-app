//DOM elementlerini sectik
const todoForm = document.getElementById("todoAddForm");
const todoInput = document.getElementById("todoName");
const taskList = document.getElementById("taskList");
const completedList = document.getElementById("completedList");
const clearAllBtn = document.getElementById("clearAll");

todoForm.addEventListener("submit", function (e) {
    e.preventDefault(); //sayfanin yenilenmesini saglar
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        todoInput.value = "";
    } else {
        alert("Please enter task");
    }
});

function addTask(taskText) {
    // <li> ogesi olusturuldu
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <a href="#" class="complete-item text-success mr-3">
                <i class="fa fa-check"></i>
            </a>
            <a href="#" class="delete-item text-danger">
                <i class="fa fa-remove"></i>
            </a>
        </div>
    `;

    //tik tiklaninca tamamlanmis görevlere tasinir
    li.querySelector(".complete-item").addEventListener("click", function(e) {
        e.preventDefault();
        moveToCompleted(li);
    });

    //silme
    li.querySelector(".delete-item").addEventListener("click", function (e) {
        e.preventDefault();
        li.remove();
    });

    //listeye li eklendi
    taskList.appendChild(li);
}

function moveToCompleted(taskItem) {
    taskItem.classList.add("completed");

    const completeIcon = taskItem.querySelector(".complete-item");
    const deleteIcon = taskItem.querySelector(".delete-item");

    if(completeIcon) completeIcon.remove();
    if(deleteIcon) deleteIcon.remove();

    completedList.appendChild(taskItem);
}

//tum gorevleri sil
clearAllBtn.addEventListener("click", function() {
    taskList.innerHTML = "";
    completedList.innerHTML = "";
});