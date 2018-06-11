
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const button = document.querySelector("input[type=Submit]")
  button.addEventListener('click', (event) => {
    event.preventDefault()
    let value = document.getElementById('new-task-description').value
    let task = new Task(value)
    console.log(task)
    document.getElementById('new-task-description').value = ""
    taskList.addItem(task)
  })

  const list = document.getElementById('list')
  list.addEventListener('click', (event) => {
    if (event.target.type === "button") {
      event.target.parentElement.remove()
    }
  })
});
