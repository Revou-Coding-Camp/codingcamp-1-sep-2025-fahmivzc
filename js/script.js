
let todoList = [];
function validateInput() {
    const todoInput = document.getElementById('todo-add').value;
    const todoDateInput = document.getElementById('todo-date').value;
    const todoStatusInput = document.getElementById('filter-status').value;

    if (todoInput === '' || todoDateInput === '' || todoStatusInput === '--Choose Status---') {
        alert('Please fill in all fields!');
    } else {
        addTodo(todoInput, todoDateInput, todoStatusInput);
    }
}

function addTodo(task, dueDate, status) {
  
    const todoItem = {
        task: task,
        dueDate: dueDate,
        status: status
    };


    todoList.push(todoItem);

 
    renderTodoList();
}

function resetForm() {
    document.getElementById('todo-add').value = '';
    document.getElementById('todo-date').value = '';
    document.getElementById('filter-status').value = '--Choose Status---';
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

function deleteAll() {
    if (confirm('Are you sure you want to delete all tasks?')) {
        todoList = [];
        renderTodoList();
    }
}

function filterTodo() {
    const filterValue = document.getElementById('todo-filter').value;
    renderTodoList(filterValue);
}

function renderTodoList(filter = "all") {
    const todoListContainer = document.getElementById('todo-table');
    todoListContainer.innerHTML = ''; // Clear existing rows

    let filteredTodos = todoList;
    if (filter !== "all") {
        filteredTodos = todoList.filter(item => item.status === filter);
    }

    filteredTodos.forEach((item, index) => {
        todoListContainer.innerHTML += `
            <tr>
                <td class="border border-gray-400 px-4 text-white py-2">${item.task}</td>
                <td class="border border-gray-400 px-4 text-white py-2">${item.dueDate}</td>
                <td class="border border-gray-400 px-4 text-white py-2">${item.status}</td>
                <td class="border border-gray-400 px-4 text-white py-2">
                    <button onclick="deleteTodo(${index})" class="bg-[#0f172a] ring-2 ring-blue-600 text-white px-6 py-2 rounded">Delete</button>
                </td>
            </tr>
        `;
    });
}
