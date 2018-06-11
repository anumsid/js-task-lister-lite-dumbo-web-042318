class TaskList {
  addItem(task) {
    const tasks = document.getElementById('tasks')
    tasks.innerHTML += `<li>${task.string} <button type="button"> X </button> </li>`

  }
}
