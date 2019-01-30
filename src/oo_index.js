document.addEventListener('DOMContentLoaded', function() {
  const taskContainer = document.getElementById('list')
  const taskForm = document.getElementById('create-task-form') 

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING
    const userInputField = event.target.querySelector('#new-task-description') 

    const userInputString = userInputField.value
    const newTask = document.createElement('ul')
    newTask.textContent = userInputString 

// adding close button next to task item
    const span = document.createElement("SPAN");
    const txt = document.createTextNode(" \u00D7");
    span.className = "close";
    span.appendChild(txt); 

    newTask.appendChild(span) 

    taskContainer.appendChild(newTask)
  })  

// close button deletes task
  // const close = document.getElementsByClassName("close");
  // var j; 

  // for (j = 0; j < close.length; j++) {
  //   close[j].onclick = function() {
  //     const div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }


}) 







