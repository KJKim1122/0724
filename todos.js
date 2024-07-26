let todos = [];
let todoCount = 0;

function addTodo() {
  const title = document.getElementById('todo-title').value;
  if (title === '') {
    alert('할일을 입력하세요');
    return;
  }

  todoCount++;
  const newTodo = {
    tno: todoCount,
    title: title,
    date: new Date().toLocaleDateString()
  };
  
  todos.push(newTodo);
  document.getElementById('todo-title').value = '';
  printTodos();
}

function deleteTodo(tno) {
  for(let i=0; i<todos.length; i++) {
    if(todos[i].tno===tno)
      todos.splice(i, 1);
  }
  printTodos();
}

function printTodos() {
  const todoBody = document.getElementById('todo-body');
  todoBody.innerHTML = '';
  for(let i=0; i<todos.length; i++) {
    const row = `
      <tr>
          <td>${todos[i].tno}</td>
          <td>${todos[i].title}</td>
          <td>${todos[i].date}</td>
          <td><button class="delete" onclick="deleteTodo(${todos[i].tno})">삭제</button></td>
      </tr>
    `;
    console.log(row);
    todoBody.innerHTML += row;
  }
}