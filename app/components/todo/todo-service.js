function TodoService() {
	var baseUrl = 'https://inspire-server.herokuapp.com/api/joedavis'
	var todoList = []

	function Todo(formData) {
		this.todo = formData.todo.value;
	}

	this.getTodos = function getTodos(cb) {
		$.get(baseUrl + 'todos')
			.then(function (todos) {
				todoList =  todos
				cb(todoList)
			})
	}

	this.addTodo = function (formData,cb) {
		var todo = new Todo(formData)
		$.post(baseUrl + 'todos', todo)
			.then(res => {
				todoList.unshift(res.data)
				cb(todoList)
			})
	}

	this.toggleTodoSatus = function toggleTodoStatus(todoId, cb){
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoList)
		})
			.then(function (res) {
				this.getTodos(cb)
			})
	}

	this.removeTodo = function removeTodo(todoId, cb) {
		$.ajax({
			method: 'DELETE',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoList)
		})
			.then(function (res) {
				this.getTodos(cb)
		})


		
	}

}




	// this.toggleTodoStatus = function toggleTodoStatus (todoId, cb) {
	// 	// MAKE SURE WE THINK THIS ONE THROUGH
	// 	//STEP 1: Find the todo by its index **HINT** todoList

	// 	//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

	// 	//STEP 3: Here is that weird Ajax request because $.put doesn't exist
	// 	$.ajax({
	// 		method: 'PUT',
	// 		contentType: 'application/json',
	// 		url: baseUrl + '/' + todoId,
	// 		data: JSON.stringify(todoList),
	// 	})
	// 		.then(function (res) {
	// 			this.getTodos(cb)
	// 		})
	// 		.fail(logError)
	// }

