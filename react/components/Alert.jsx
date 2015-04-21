/**
 * @jsx React.DOM
 */

var React = require('react');

var Alert = React.createClass({

    handleEdit:function(id,event){
        event.preventDefault();
        this.props.onEdit(id);
        this.props.onSelect(id);
    },

    render: function() {

        var alert = this.props.alert;

        var title = alert.text.length >= 20 ? alert.text.substring(0,20) : alert.text;

        var className = this.props.active ? 'active' : null;

        return (
            <a href="#" className={'list-group-item '+className} onClick={this.handleEdit.bind(null,alert._id)}>{title}</a>
        )
    }
});

module.exports = Alert;