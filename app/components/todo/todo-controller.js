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
	function getTodos(){
		//FYI DONT EDIT ME :)
		todoService.getTodos(drawTodos)
	}

	function drawTodos(todoList) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		
		var todoTemplate = ''
		todoList.forEach(todo => {
			todoTemplate += `
			<div class="form-check">
			<input class="form-check-input" type="checkbox" value="" id="todo">
			<label class="form-check-label" for="todo">${todo.todo}</label>
			<i onclick="app.controllers.todoCtrl.removeTodo('${todo.id}')" class="action remove fa fa-fw fa-sm fa-trash text-red"></i>
			<p> Items To Do: ${todoList.length}</p>
			</div>	
			`				
		})
		todoListElem.innerHTML = todoTemplate
	}

	this.addTodo = function (e) {
		e.preventDefault()
		debugger
		var form = e.target
		console.log(form, "did I get here?")
		todoService.addTodo(form, drawTodos)
		form.reset()
		                         //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	getTodos()
	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

}
