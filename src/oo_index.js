document.addEventListener('DOMContentLoaded', function() {
  const taskContainer = document.getElementById('list')
  const taskForm = document.getElementById('create-task-form')

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING
    const userInputField = event.target.querySelector('#new-task-description') 

    //OR document.querySelector('#new-comment')
    const userInputString = userInputField.value
    const newTask = document.createElement('ul')
    newTask.textContent = userInputString

    taskContainer.appendChild(newTask)
  })
})