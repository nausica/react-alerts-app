/**
 * @jsx React.DOM
 */

var React = require('react');
var AlertListBox = require('./AlertListBox.jsx');
var AlertCreationBox = require('./AlertCreationBox.jsx');

var AlertApp = React.createClass({

    getInitialState:function(){
        return {id: null}
    },

    onEdit:function(id){
        this.setState({currentlyEdited: id});
    },

    onAdd:function(){
        this.setState({currentlyEdited: null});
    },

    render: function() {
        return (
            <div className="container">
                <div className="row header">
                    <div className="page-header">
                        <h1>React Alerts App</h1>
                    </div>
                </div>
                <div className="row">
                    <AlertListBox onEdit={this.onEdit} onAdd={this.onAdd}/>
                    <AlertCreationBox id={this.state.currentlyEdited} />
                </div>
            </div>
        )
    }
});

module.exports = AlertApp;