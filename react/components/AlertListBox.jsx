/**
 * @jsx React.DOM
 */

var React = require('react');
var AlertList = require('./AlertList.jsx');
var AlertStore=require('../../stores/AlertStore');

var AlertListBox = React.createClass({

    getInitialState:function(){
      return {alerts:AlertStore.getAlerts()}
    },

    onChange: function(alerts) {
        this.setState({
            alerts: alerts
        });
    },

    componentDidMount: function() {
        this.unsubscribe = AlertStore.listen(this.onChange);
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    onAdd:function(event){
        event.preventDefault();
        this.props.onAdd();
        this.refs.alertList.setActiveAlert(null);
    },

    render: function() {
        return (
            <div className="col-md-4">
                <div className="centered"><a href="" onClick={this.onAdd}>Add New</a></div>
                <AlertList ref="alertList" alerts={this.state.alerts} onEdit={this.props.onEdit} />
            </div>
        )
    }
});

module.exports=AlertListBox;