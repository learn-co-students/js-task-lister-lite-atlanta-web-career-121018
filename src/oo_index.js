document.addEventListener('DOMContentLoaded', function() {
  const taskContainer = document.getElementById('tasks')
  const taskForm = document.getElementById('create-task-form') 

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING
    const userInputField = event.target.querySelector('#new-task-description') 

    const userInputString = userInputField.value
    const newTask = document.createElement('li')
    newTask.textContent = userInputString 

// adding close button next to task item
    const button = document.createElement("BUTTON");
    const txt = document.createTextNode("X");
    button.className = "close";
    button.appendChild(txt); 
    button.addEventListener('click', function(event) {
      const task = event.target.parentElement
      taskContainer.removeChild(task)
    })

    newTask.appendChild(button) 

    taskContainer.appendChild(newTask)
  })  
}) 







