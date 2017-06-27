import React, { Component } from 'react';

export default class ExclusivePanel extends Component {
    
    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    
    render() {
        return (
        <div className="panel-container exclusive-container">
            <textarea 
            onChange={this.handleChange.bind(this)} 
            value={this.props.exclusiveText} 
            />
        </div>
        );
        }
    }