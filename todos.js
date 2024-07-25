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
  updateTable();
}

function deleteTodo(tno) {
  for(let i=0; i<todos.length; i++) {
    if(todos[i].tno===tno)
      todos.splice(i, 1);
  }
  updateTable();
}

function updateTable() {
  const todoBody = document.getElementById('todo-body');
  todoBody.innerHTML = '';
  todos.forEach(todo => {
    const row = `
      <tr>
          <td>${todo.tno}</td>
          <td>${todo.title}</td>
          <td>${todo.date}</td>
          <td><button class="delete" onclick="deleteTodo(${todo.tno})">삭제</button></td>
      </tr>
    `;
    todoBody.innerHTML += row;
  });
}