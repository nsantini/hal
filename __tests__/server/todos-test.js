jest.dontMock('../../server/todos');
jest.dontMock('halson');
jest.dontMock('underscore');

describe('Test the TODOs backend', function() {
  var Todos;
  beforeEach(function() {
    Todos = require('../../server/todos');
  })

  it('Should return a list of empty TODOs', function() {
    var todos = Todos.getAllTodos();
    expect(todos._embedded).toBeUndefined();
  });

  it('Should add a TODO', function() {
    Todos.addTodo({text: 'test'});
    var todos = JSON.parse(Todos.getAllTodos());
    expect(todos._embedded.todos.id).toBe("todo_1");
    expect(todos._embedded.todos.text).toBe("test");
  });

  it('Should return a TODO', function() {
    Todos.addTodo({text: 'test'});
    var todo = Todos.getTodo('todo_1');
    expect(todo.id).toBe("todo_1");
    expect(todo.text).toBe("test");
  });

  it('Should return a list of TODOs', function() {
    Todos.addTodo({text: 'test1'});
    Todos.addTodo({text: 'test2'});
    var todos = JSON.parse(Todos.getAllTodos());
    expect(todos._embedded.todos.length).toBe(2);
  });

  it('Should toggle a TODO', function() {
    Todos.addTodo({text: 'test'});
    Todos.toggle('todo_1');
    var todo = Todos.getTodo('todo_1');
    expect(todo.completed).toBe(true);
  });

  it('Should delete a TODO', function() {
    Todos.addTodo({text: 'test'});
    Todos.delete('todo_1');
    var todo = Todos.getTodo('todo_1');
    expect(todo).toBeUndefined();
  });

  it('Should toggle all TODOs', function() {
    Todos.addTodo({text: 'test'});
    Todos.addTodo({text: 'test2'});
    Todos.toggleAll();
    var todos = JSON.parse(Todos.getAllTodos());
    for(var todo in todos._embedded.todos) {
      expect(todos._embedded.todos[todo].completed).toBe(true);
    }

  });

  it('Should delete all TODOs', function() {
    Todos.addTodo({text: 'test'});
    Todos.addTodo({text: 'test2'});
    Todos.deleteAll();
    var todos = JSON.parse(Todos.getAllTodos());
    expect(todos._embedded.todos).toBeUndefined();
  });
});
