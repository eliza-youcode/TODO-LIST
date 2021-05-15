{
    const tasks = [
        {
            content: "zjeść kolację",
            done: false,
        },
        {
            content: "zrobić trening",
            done: true,
        },

    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
    <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
    ${task.content}
    </li>
    `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

    };

    init();

}
