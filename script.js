const addBtn = document.querySelector("#add-btn");
const newTaskinput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
};

const addTask = () => {
    const taskName = newTaskinput.value.trim();
    error.style.display = "none";
    if (!taskName) {
        error.style.display = "block";
        return;
    }

const task = `<div class="task">
    <span class taskname">${taskName}</span>
    <button class="edit">
    edit
    </button>
    <button class="delete">
    delete
    </button>
    </div>`;

    tasksContainer.insertAdjacentHTML("beforeend", task);

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.onclick = () => {
            button.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        }
    });

    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((editBtn) => {
        editBtn.onclick = (e) => {
            let targetElement = e.target;
            if (!(e.target.className == "edit")) {
                targetElement = e.target.parentElement;
            }
            newTaskinput.value = targetElement.previousElementSibling.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        };
    });
 
    taskCount += 1;
    displayCount(taskCount);
    newTaskinput.value = "";
};


addBtn.addEventListener("click", addTask);

