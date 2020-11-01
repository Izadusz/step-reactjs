import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';
import { unstable_batchedUpdates } from 'react-dom';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: this.props.initStepValue
            // counterValue: this.props.updateStep
        };
    }
    // changeValue = () => {
    //     this.setState({
    //         counterValue: this.state.counterValue +1
    //     })

    changeValue = (action) => {

        this.setState(() => {
            let currentCounterValue = this.state.counterValue;

            if (action === 'add') {
                currentCounterValue += this.state.stepValue;
            } else if (action === 'reinit') {
                currentCounterValue = this.props.initValue;
            } else {
                currentCounterValue = 0;
            }

            return {
                counterValue: currentCounterValue
            }

        })

        // console.log(`changeValue clicked`)
    }

    changeStepValue = (step) => {
        console.log(step);
        this.setState({
            stepValue: +step
        });

    }

    render() {
        // let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);
        return (
            <div className="counter">
                Licznik:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} propsStepValue={this.state.stepValue} />
                <label for="number" class="step">Krok:</label>
                <Step propsStepValue={this.state.stepValue} changeStepValueMethod={this.changeStepValue} />

            </div>

        );
    }
}
export default Counter;

// Komponent funcyjny :

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//     <div className="counter">
//         Counter:
//          <span className="value">
//             {props.initValue}
//         </span>
//     </div>
//     );
// }
// export default Counter;