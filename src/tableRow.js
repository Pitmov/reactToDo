/**
 * Created by Andrew on 04.05.2016.
 */
var React = require('react');
var Helpers = require('helpers');
var nameValue = "";
var TableRow = React.createClass({
    removeItem: function () {
        this.props.onRemoveItem(this.props.id);
    },
    updateItem: function (e) {
        var dataElement = {};
        if (e.currentTarget.classList.contains('name')) {
            dataElement = {
                name: e.currentTarget.value,
                price: this.props.price,
                id: this.props.id
            };
        } else if (e.currentTarget.classList.contains('price') &&
            (Helpers.isNumeric(e.currentTarget.value) || !e.currentTarget.value)) {
            dataElement = {
                name: this.props.name,
                price: e.currentTarget.value ? e.currentTarget.value : 0,
                id: this.props.id
            };
        } else {
            return false;
        }
        this.props.onUpdateItem(dataElement);
    },
    saveValue: function (e) {
        nameValue = e.currentTarget.value;
    },
    checkName: function(e) {
      if (!e.currentTarget.value) {
          this.props.onError('Name must have value');
          this.props.onUpdateItem({
              name: nameValue,
              price: this.props.price,
              id: this.props.id
          });
      }
    },
    render: function () {
        var priceParser = function () {
                var price = this.props.price;
                if (/\d+\.0?$/.test(price)) {
                    return price;
                } else {
                    return parseFloat(price).toFixed(2)/1;
                }
            },
            priceValue = priceParser.call(this);
        return (
            <tr>
                <td>{this.props.number}</td>
                <td><input
                    type="text"
                    onChange={this.updateItem}
                    onFocus={this.saveValue}
                    className="name form-control"
                    value={this.props.name}
                    onBlur={this.checkName}
                /></td>
                <td><input
                    type="text"
                    onChange={this.updateItem}
                    className="price form-control"
                    value={priceValue}
                /></td>
                <td>
                    <button type="button"
                            onClick={this.removeItem}
                            value="Delete"
                            className="btn btn-danger"
                    ><span className="glyphicon glyphicon-remove"></span></button>
                </td>
            </tr>
        );
    }
});

module.exports = TableRow;