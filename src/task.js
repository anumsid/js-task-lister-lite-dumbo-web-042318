const Task = (function() {
  let i = 1
  class Task {
    constructor(string) {
      this.id = i++
      this.string = string

    }
  }
  return Task
})()
