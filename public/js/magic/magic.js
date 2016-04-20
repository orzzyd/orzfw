var React = require('react');
var ReactDOM = require('react-dom');
require('../../less/magic/magic.less');//add style

// data
var data = [];
for (var i = 1; i < 101; i++) {
    var element = {
        id: i,
        text: 'item' + i.toString()
    };
    data.push(element);
}
var index = 0;
var pagesize = 5;
function getItems() {
    var returnData = [];
    for (var i = 0; i < pagesize; i++) {
        returnData.push(data[index]);
        index++;
    }
    return returnData;
}
// data end

var List = React.createClass({
    render: function() {
        var createItem = function(item) {
            return <li className='item' key={item.id}>{item.text}</li>;
        };
        return <ul className='items'>{this.props.items.map(createItem) }</ul>;
    }
});
var ListApp = React.createClass({
    getInitialState: function() {
        return { items: getItems() };
    },
    getMoreItems: function() {
        var newItems = getItems();
        var nextItems = this.state.items.concat(newItems);
        this.setState({ items: nextItems });
    },
    render: function() {
        return (
            <div id='ListApp'>
                <img src={require('../../image/magic/magic.png')} alt='head' className='head'></img> 
                <h1>list</h1>
                <List items={this.state.items} />
                <button className='btn-more' onClick={this.getMoreItems}>加载更多</button>
            </div>
        );
    }
});
ReactDOM.render(
    // <h1>Hello, magic!</h1>,
    <ListApp />,
    document.getElementById('list')
);