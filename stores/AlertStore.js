
var Reflux = require('reflux');
var AlertActions = require('../actions/AlertActions');

var _alerts = [];

var AlertStore = Reflux.createStore({

    init: function() {
        if (!_alerts.length) {
            // No alert in the local storage, retrieve some

        }
        this.listenTo(AlertActions.createAlert, this.onCreate);
        this.listenTo(AlertActions.editAlert, this.onEdit);
    },

    onCreate: function(alert) {
        _alerts.push(alert);
        this.trigger(_alerts);
        alertEntry.save();

    },

    onEdit: function(alert) {
        for(var i=0;i<_alerts.length;i++){
            if(_alerts[i]._id === alert._id){
                _alerts[i].text = alert.text;
                this.trigger(_alerts);
                break;
            }
        }
    },

    getAlerts:function(){
        return _alerts;
    },

    getAlert:function(id){
        for(var i=0;i<_alerts.length;i++){
            if(_alerts[i]._id === id){
                return _alerts[i];
            }
        }
    }

});

module.exports = AlertStore;