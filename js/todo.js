const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

let toDos = [];
const TODO_KEY = 'todos';

function saveTodosInLocal() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodosInLocal();
}

function paintTodo(newTodoObj) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.innerText = '❌';
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener('click', deleteTodo);
  span.innerText = newTodoObj.text;
  li.id = newTodoObj.id;
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodosInLocal();
}

toDoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
