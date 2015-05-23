jest.dontMock('../../../src/js/components/Item.react');

describe('Test Item', function() {
  var React, TestUtils, item, todo;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Item = require('../../../src/js/components/Item.react');
    todo = {
      id: 'todo_1',
      text: 'test',
      completed: true
    };
    item = TestUtils.renderIntoDocument(
      <Item data={todo} />
    );
  });

  it('Shows completed item with <s> tags', function() {
    var text = TestUtils.findRenderedDOMComponentWithTag(item, 's');
    expect(text.getDOMNode().textContent).toEqual('test');
  });

  it('Shows not completed item without <s> tags', function() {
    todo.completed = false;
    item = TestUtils.renderIntoDocument(
      <Item data={todo} />
    );
    var text = TestUtils.scryRenderedDOMComponentsWithTag(item, 's');
    expect(text.length).toBe(0);
  });

  it('Triggers toggle Action', function() {
    var Actions = require('../../../src/js/actions/Actions')
    var link = TestUtils.scryRenderedDOMComponentsWithTag(item, 'a')[0];
    TestUtils.Simulate.click(link);
    expect(Actions.toggle).toBeCalledWith('todo_1');
  });

  it('Triggers delete Action', function() {
    var Actions = require('../../../src/js/actions/Actions')
    var link = TestUtils.scryRenderedDOMComponentsWithTag(item, 'a')[1];
    TestUtils.Simulate.click(link);
    expect(Actions.delete).toBeCalledWith('todo_1');
  });
});
