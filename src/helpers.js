/**
 * Created by Andrew on 04.05.2016.
 */
var helpers = {
    isNumeric: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}

module.exports = helpers;