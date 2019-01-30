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
    const button = document.createElement("BUTTON");
    const txt = document.createTextNode(" \u00D7");
    button.className = "close";
    button.appendChild(txt); 

    newTask.appendChild(button) 

    taskContainer.appendChild(newTask)
  })  

  // close button deletes task 
  // const close = document.getElementsByClassName("close");
  // var j; 
  
  // for (j = 0; j < close.length; j++) {
  //   close.addEventListener('click', function(event) {
  //     const div = this.removeParentElement;
  //   }
  // } 



  // const close = document.getElementsByClassName("close");
  // var j; 

  // for (j = 0; j < close.length; j++) {
  //   close[j].onclick = function() {
  //     const div = this.parentElement;
  //     div.remove()
  //   }
  // } 


  
}) 







