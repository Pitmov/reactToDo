/**
 * Created by Andrew on 03.05.2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Inputs = require('inputs');
var css = require("../css/bootstrap.min.css");
var bootstrapTheme = require('../css/bootstrap-theme.min.css');
var myCss = require("../css/todo.css");
var TableItems = require("todoTable");
var Notifier = require('Notifier');

var idCounter = 0;
var TodoApp = React.createClass({
        getInitialState: function () {
            return {data: [], errorMessage: ''};
        },
        handleNewTodoItem: function (el) {
            el.id = idCounter;
            this.setState({data: this.state.data.concat(el)});
            idCounter++;
        },
        handleRemoveItem: function (id) {
            var data = this.state.data;
            data.forEach(function (el, i) {
                if (el.id === id) {
                    data.splice(i, 1);
                    return false;
                }
            });
            this.setState({data: data});
        },
        handleUpdateItem: function (el) {
            var data = this.state.data;
            data.forEach(function (lel, i) {
                if (lel.id === el.id) {
                    data[i].name = el.name;
                    data[i].price = el.price;
                    return false;
                }
            });
            this.setState({
                data: data
            });
        },
        setTimerError: function (time) {
            this._timer != null ? clearTimeout(this._timer) : null;
            this._timer = setTimeout(function () {
                this._timer = null;
                this.setState({errorMessage: ''});
            }.bind(this), time);
        },
        errorNotifier: function (message) {
            this.setState({errorMessage: message});
            this.setTimerError(5000);
        },
        render: function () {
            return (
                <div className="todo-app">
                    <div id="inputsArea"><Inputs onItemAdd={this.handleNewTodoItem} onError={this.errorNotifier}/></div>
                    <div id="listArea">
                        <TableItems
                            onRemoveItem={this.handleRemoveItem}
                            onUpdateItem={this.handleUpdateItem}
                            data={this.state.data}
                            onError={this.errorNotifier}
                        />
                    </div>
                    <Notifier errorMessage={this.state.errorMessage}/>
                </div>
            );
        }
    })
    ;

ReactDOM.render(
    <TodoApp />
    ,
    document.getElementsByClassName('body')[0]
);