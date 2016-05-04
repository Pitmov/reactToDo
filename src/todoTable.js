/**
 * Created by Andrew on 04.05.2016.
 */
var React = require('react'),
    TableRow = require('tableRow'),
    listTable = React.createClass({
        render: function () {
            var totalPrice = 0,
                tableRows = this.props.data.map(function (el, i) {
                    totalPrice += parseFloat(el.price);
                    return (
                        <TableRow name={el.name}
                                  number={i+1}
                                  price={el.price}
                                  id={el.id}
                                  onRemoveItem={this.props.onRemoveItem}
                                  onUpdateItem={this.props.onUpdateItem}
                                  key={el.id}
                                  onError={this.props.onError}
                        />
                    );
                }, this);
            if (this.props.data.length > 0) {
                return (
                    <div className="table-responsive">
                        <table className="table table-striped" id="todoTable">
                            <thead>
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Actions</td>
                            </tr>
                            </thead>
                            <tbody>
                            {tableRows}
                            </tbody>
                        </table>
                        <div className="total">
                            <h3>Total: {parseFloat(totalPrice).toFixed(2)}</h3>
                        </div>
                    </div>)
            } else {
                return null;
            }
            ;
        }
    });

module.exports = listTable;