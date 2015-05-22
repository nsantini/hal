jest.dontMock('../../../src/js/stores/Store');
jest.dontMock('halson');
jest.dontMock('object-assign');

describe('Test the TODO Store', function() {
  var $, Store;
  beforeEach(function() {
    $ = require('jquery');
    Store = require('../../../src/js/stores/Store');
    Store.loadTodos('{"_links":{"self":{"href":"/todos"},"create":{"href":"/todos/add"},"toggle":{"href":"/todos/toggleall"},"delete":{"href":"/todos/deleteall"}},"_embedded":{"todos":{"id":"todo_1","text":"test","completed":false,"_links":{"self":{"href":"/todos/todo_1"},"toggle":{"href":"/todos/toggle/todo_1"},"delete":{"href":"/todos/delete/todo_1"}}}}}');
  });

  it('Should make Ajax request for TODOS', function() {
    Store.loadTodosFromServer();

    expect($.ajax).toBeCalledWith({
      url: '/todos',
      success: jasmine.any(Function)
    });
  });

  it('Should make an Ajax request to create a TODO', function() {
    Store.create('test');

    expect($.ajax).toBeCalledWith({
      method: 'POST',
      url: '/todos/add',
      success: jasmine.any(Function),
      data: {text:'test'}
    });
  });

  it('Should make an Ajax request to toggle a TODO', function() {
    Store.toggle('todo_1');

    expect($.ajax).toBeCalledWith({
      method: 'POST',
      url: '/todos/toggle/todo_1',
      success: jasmine.any(Function)
    });
  });

  it('Should make an Ajax request to delete a TODO', function() {
    Store.delete('todo_1');

    expect($.ajax).toBeCalledWith({
      method: 'POST',
      url: '/todos/delete/todo_1',
      success: jasmine.any(Function)
    });
  });

  it('Should make an Ajax request to toggle all TODOs', function() {
    Store.toggleAll();

    expect($.ajax).toBeCalledWith({
      method: 'POST',
      url: '/todos/toggleall',
      success: jasmine.any(Function)
    });
  });

  it('Should make an Ajax request to delete all TODOs', function() {
    Store.deleteAll();

    expect($.ajax).toBeCalledWith({
      method: 'POST',
      url: '/todos/deleteall',
      success: jasmine.any(Function)
    });
  });
})
