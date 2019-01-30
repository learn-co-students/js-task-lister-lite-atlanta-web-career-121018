

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded')

  const taskForm = document.querySelector('#create-task-form')
  const taskField = document.querySelector('#new-task-description')
  const taskPriorityField = document.querySelector('#new-task-priority')
  const tasksContainer = document.querySelector('#tasks')
  const orderButton = document.querySelector('#order-button')

  const createTask = (event) => {
    event.preventDefault()

    const taskDesc = taskField.value
    const newTask = document.createElement('li')
    const newTaskDesc = document.createElement('span')
    const newTaskDel = document.createElement('button')

    newTaskDesc.innerHTML = " " + taskDesc
    switch (taskPriorityField.value) {
      case 'high':
        newTaskDesc.className = 'high'
        break;
      case 'medium':
        newTaskDesc.className = 'medium'
        break;
      case 'low':
        newTaskDesc.className = 'low'
        break;
      default:

    }
    newTaskDel.innerHTML = 'X'

    tasksContainer.appendChild(newTask)
    newTask.appendChild(newTaskDel)
    newTask.appendChild(newTaskDesc)

    newTaskDel.addEventListener('click', (event) => {
      newTask.remove()
    })

    event.target.reset()
  }

  const orderTasks = (event) => {
    const priorities = ['high', 'medium', 'low']

    priorities.forEach((priority) => {
      const tasks = document.querySelectorAll(`#tasks .${priority}`)
      for (let i = 0; i < tasks.length; i++) {
        tasksContainer.appendChild(tasks[i].parentElement)
      }
    })
  }

  taskForm.addEventListener('submit', createTask)
  orderButton.addEventListener('click', orderTasks)
})
