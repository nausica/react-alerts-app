/**
 * @jsx React.DOM
 */

var React = require('react');
var Alert = require('./Alert.jsx');

var AlertList = React.createClass({

    getInitialState:function(){
        return {activeNoteId: null}
    },

    setActiveAlert: function(id) {
        this.setState({activeAlertId: id});
    },

    render: function() {
        var self = this,
            alerts = this.props.alerts.concat().reverse();
        var alertNodes = alerts.map(function (alert) {
            return (
                <Alert key={alert._id} active={self.state.activeAlertId === alert._id} alert={alert} onEdit={self.props.onEdit} onSelect={self.setActiveAlert}/>
            );
        });
        return (
            <div className="list-group">
                {alertNodes}
            </div>
         )
    }
});

module.exports = AlertList;