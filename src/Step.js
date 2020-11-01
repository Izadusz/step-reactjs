import React, { Component } from 'react';
import './Step.css';


class Step extends Component {
    constructor(props) {

        super(props);
    }

    render() {

        return (
            <input ref={(data) => { this._inputStep = data }} type="number" value={this.props.propsStepValue} onChange={() => {
                this.props.changeStepValueMethod(this._inputStep.value)
            }} />
        );

    }


}

export default Step;