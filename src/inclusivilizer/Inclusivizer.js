import React, { Component } from 'react';
import copy from 'copy-to-clipboard';

import OpressedEngine from './OpressedEngine';
import ExclusivePanel from './ExclusivePanel';
import InclusivePanel from './InclusivePanel';

import { initialText, initialLevel, pelotudezLevel } from '../config';

const initialState = {
    pelotudezLevel: initialLevel,
    exclusiveText: initialText,
    inclusiveText: OpressedEngine.makeAware(initialText, initialLevel),
}

export default class Inclusivizer extends Component {

    constructor(props) {
        super(props);

        this.state = initialState;
    }

    handleTextChange(exclusiveText) {
        this.setState( {
            ...this.state,
            exclusiveText: exclusiveText,
            inclusiveText: OpressedEngine.makeAware(exclusiveText, this.state.pelotudezLevel),
        })
    }

    handleRangeChange(e) {
        const newLevel = parseInt(e.target.value,10);
        this.setState( {
            ...this.state,
            pelotudezLevel: newLevel,
            inclusiveText: OpressedEngine.makeAware(this.state.exclusiveText, newLevel),
        })
    }

    handleCopyText(e) {
        copy(this.state.inclusiveText);
    }

    handleClearText(e) {
        this.setState( {
            ...this.state,
            exclusiveText: "",
            inclusiveText: "",
        })
    }
    
    render() {
        const { exclusiveText, inclusiveText, pelotudezLevel: currentLevel } = this.state;

        const min = 0;
        const max = pelotudezLevel.length-1
        
        return (
        <div>
            <div className="pure-g">
                <div className="pure-u-1">
                    <h1 className="title">
                        Inclusivizer 
                    </h1>
                    <div className="button-clear-container">
                        <button onClick={this.handleClearText.bind(this)}>
                            Clear
                        </button>
                    </div>
                    <div className="button-copy-container">
                        <button onClick={this.handleCopyText.bind(this)}>
                            Copy
                        </button>
                    </div>
                    <div className="range-container">
                        <label htmlFor="pelotudezLevel">
                            Nivel de Pelotudes: {currentLevel+1} - {pelotudezLevel[currentLevel].name}
                        </label>
                        <input 
                        type="range"
                        name="pelotudezLevel"
                        min={min} 
                        max={max}
                        onChange={this.handleRangeChange.bind(this)}
                        value={this.state.pelotudezLevel}
                        />
                    </div>
                    
                </div>
            </div>
            <div className="pure-g">
                <div className="pure-u-1-2">
                    <ExclusivePanel exclusiveText={exclusiveText} onChange={this.handleTextChange.bind(this)}/>
                </div>
                <div className="pure-u-1-2">
                    <InclusivePanel inclusiveText={inclusiveText}/>
                </div>
            </div>
        </div>
        );
    }
}
