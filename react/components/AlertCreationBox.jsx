/**
 * @jsx React.DOM
 */

var React = require('react');
var TextArea = require('./TextArea.jsx');
var AlertActions = require('../../actions/AlertActions.js');
var AlertStore = require('../../stores/AlertStore.js');

var AlertCreationBox = React.createClass({

    handleSave:function(alertText, id){

        if (id){
            AlertActions.editAlert({_id:id, text: alertText});
        }

        else {
            AlertActions.createAlert({_id:Date.now(), text:alertText});
        }
    },

    render: function() {

        var alert;

        if(this.props.id) {
            alert = AlertStore.getAlert(this.props.id);
        }

        return (
            <div className="col-md-8">
                <TextArea onSave={this.handleSave} id={this.props.id} alertText={alert ? alert.text : ''} />
            </div>
        )
    }
});

module.exports = AlertCreationBox;