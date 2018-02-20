function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()
	var todoListElem = document.getElementById('todoList')

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		todoService.getTodos(drawTodos)
	}

	function drawTodos(todoList) {
		var todoTemplate = `<p> Items To Do: ${todoList.length}</p>`
		todoList.forEach(todo => {
			todoTemplate += `
			<div class="form-check">
			<input class="form-check-input" type="checkbox" value="" id="todo">
			<label class="form-check-label" for="todo">${todo.todo}</label>
			<i onclick="app.controllers.todoCtrl.removeTodo('${todo.id}')" class="action remove fa fa-fw fa-md fa-trash"></i>
			</div>	
			`
		})
		todoListElem.innerHTML = todoTemplate
	}

	this.addTodo = function (event) {
		event.preventDefault()
		var form = event.target
		console.log(form)
		todoService.addTodo(form, drawTodos)
		form.reset()
	}

	this.toggleTodoStatus = function (todoId) {
		todoService.toggleTodoStatus(todoId, getTodos)
	}

	this.removeTodo = function (todoId) {
		todoService.removeTodo(todoId, drawTodos)
	}


	getTodos()
}
