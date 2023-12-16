/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(x) {
    this.todos.push(x);
  }
    remove(x) {
      if (x >= 0 && x < this.todos.length) {
        this.todos.splice(x, 1);
      }
      else {
        return;
      }
    }
  
  update(x,y) {
    if (x >= 0 && x < this.todos.length) {
      this.todos[x] = y;
    }
    else {
      return;
    }
  }
  getAll() {
    return this.todos;
  }
  get(x) {
    return x >= 0 && x < this.todos.length ? this.todos[x] : null;
}

  clear() {
    this.todos = [];
  }
}
const todoList = new Todo();
//todoList.add('Buy extension rod');
//todoList.add('Make coffee');
//console.log('Todos after adding:', todoList.getAll());
//console.log('Todo at index 0:', todoList.get(0));
//todoList.clear();
//console.log(todoList.getAll());
module.exports = Todo;
