/**
 * Created by Andrew on 04.05.2016.
 */
var React = require('react');

var Notifier = React.createClass({
    render: function () {
        if (!this.props.errorMessage ) {
            return null;
        } else {
            return <div id="notifier"> {this.props.errorMessage} </div>;
        }
    }
});

module.exports = Notifier;