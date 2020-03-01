import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement,  inputNumber, inputNumberChange} from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        
        <Counter 
        count={this.props.count} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement}
        onInputNumber={this.props.onInputNumber}
        onInputNumberChange={this.props.onInputNumberChange}
        countingTheClicks={this.props.countingTheClicks} />
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onreset: () => dispatch(reset()),
    onInputNumber: () => dispatch(inputNumber()),
    onInputNumberChange: (number) => dispatch(inputNumberChange(number))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numberInputted: state.numberInputted,
      countingTheClicks: state.countingTheClicks
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);