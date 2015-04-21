/**
 * @jsx React.DOM
 */

var React = require('react');
var AlertStore=require('../../stores/AlertStore');

var TextArea = React.createClass({

    getInitialState:function(){
        return {alertText:''}
    },

    handleChange: function(event) {
        this.setState({alertText: event.target.value});
    },

    handleSave:function(){

       this.props.onSave(this.state.alertText,this.props.id);

       if(!this.props.id) {
           this.refs.textArea.getDOMNode().value = '';
           this.setState({alertText: ''});
       }

    },

    componentWillReceiveProps: function(nextProps) {

        this.setState({
            alertText: nextProps.alertText
        });

        if(!nextProps.id){
            this.refs.textArea.getDOMNode().focus();
        }
    },

    render: function() {
        return (
            <div>
                <textarea className="form-control" ref="textArea" cols="100" rows="20" value={this.state.alertText} onChange={this.handleChange}></textarea><br/>
                <input type="button" className="btn btn-success btn-lg" value="Save" onClick={this.handleSave}/>
            </div>
        )
    }
});

module.exports = TextArea;