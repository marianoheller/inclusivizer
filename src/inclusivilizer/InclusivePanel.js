import React, { Component } from 'react';

export default class InclusivePanel extends Component {

    render() {
        
        return (
            <div  className="panel-container inclusive-container">
                <textarea value={this.props.inclusiveText} readOnly={true}/>
            </div>
        );
    }
}