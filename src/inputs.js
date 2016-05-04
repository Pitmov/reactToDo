/**
 * Created by Andrew on 03.05.2016.
 */
var React = require('react');
var Helpers = require('helpers');
var NameInput = React.createClass({
    getInitialState: function () {
        return {price: "", name: ""};
    },
    changePriceValue: function (e) {
        if ((e.currentTarget.value && Helpers.isNumeric(e.currentTarget.value)) || !e.currentTarget.value) {
            this.setState({price: e.currentTarget.value});
        }
    },
    changeNameValue: function(e) {
      this.setState({name: e.currentTarget.value});
    },
     addTodoItem: function (e) {
         var price = this.state.price.trim(),
             name = this.state.name.trim()
        if (name && price) {
            this.props.onItemAdd({name: name, price: price});
            this.setState({name:'', price: ''});
        } else {
            this.props.onError('Name and price must have value');
            return;
        }
    },
    render: function () {
        return (
            <div className="container input-group input-region">
                <div className="row">
                    <div className="col-md-6">
                        <input
                            className="form-control col-md-6"
                            id="thingName"
                            type="text"
                            placeholder="Input name"
                            value={this.state.name}
                            onChange={this.changeNameValue}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            className="form-control col-md-6"
                            id="thingPrice"
                            type="text"
                            placeholder="Input price"
                            onChange={this.changePriceValue}
                            value={this.state.price}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" onClick={this.addTodoItem} id="addNewTodoButton" value="ADD"
                                className="btn btn-primary">ADD
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = NameInput;