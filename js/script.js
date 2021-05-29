{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindRemoveEvents = () => {
        const removeButton = document.querySelectorAll(".js-remove");

        removeButton.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };
    const bindToggleDoneEvents = () =>{
        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };
        
    

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
    <li class="list__item">
    <button class="list__button list__button--toggleDone js-done">
    ${task.done ? "✔" : " "}
    </button>
<span class="list__content${task.done ? " list__content--done" : ""}" >
${task.content}
</span>

    <button class="list__button list__button--remove js-remove">✘</button> 
    
    </li>
    `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
       
        bindToggleDoneEvents();
        bindRemoveEvents();
    };

    const onFormSubmit = (evenet) => {
        evenet.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}
