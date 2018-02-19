function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/joedavis'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	function Todo(form){
		this.todo = formula.todo.value;
	}

	this.getTodos = function (callBack) {
		$.get(baseUrl)
			.then(function (res) { 
				todoList = res
				callBack(todoList)
			})
			.fail(logError)
	}

	this.addTodo = function addTodo(form, cb) {
		var todo  = new Todo(form)
		$.post(baseUrl, todo)
			.then(function(res){ // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				todoList.unshift(res.data)
				cb(todo)
			}) 
			.fail(logError)
	}

	this.toggleTodoStatus = function toggleTodoStatus (todoId, callBack) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoList),
		})
			.then(function (res) {
				this.getTodos(callBack)
			})
			.fail(logError)
	}

	this.removeTodo = function (todoId, callBack) {
		$.ajax({
			url: baseUrl + '/' + todoId,
			method: 'DELETE'
		})
			.then(res => {
				this.getTodos(callBack)
		})
		.fail(logError)

		
	}

}
