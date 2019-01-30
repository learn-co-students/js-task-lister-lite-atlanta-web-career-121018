
document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM content has loaded!")

    const form = document.querySelector('#create-task-form')

    const handleSubmit = (event) => {
        event.preventDefault()

        const ul = document.getElementById('list')
        const todoitem = document.getElementById('new-task-description')

        let taskitem = document.createElement('li')
        taskitem.setAttribute('class', 'task-items')

        taskitem.textContent = todoitem.value
        ul.appendChild(taskitem)

        event.target.reset()
    };

    form.addEventListener('submit', handleSubmit)

});
