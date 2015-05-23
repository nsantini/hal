jest.dontMock('../../../src/js/components/Item.react');

describe('Test Item', function() {
  it('Shows completed item with <s> tags', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Item = require('../../../src/js/components/Item.react');

    var todo = {
      id: 'todo_1',
      text: 'test',
      completed: true
    };
    var item = TestUtils.renderIntoDocument(
      <Item data={todo} />
    );

    var text = TestUtils.findRenderedDOMComponentWithTag(item, 's');
    expect(text.getDOMNode().textContent).toEqual('test');
  });

  it('Shows not completed item without <s> tags', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Item = require('../../../src/js/components/Item.react');

    var todo = {
      id: 'todo_1',
      text: 'test',
      completed: false
    };
    var item = TestUtils.renderIntoDocument(
      <Item data={todo} />
    );

    var text = TestUtils.scryRenderedDOMComponentsWithTag(item, 's');
    expect(text.length).toBe(0);
  });
});
