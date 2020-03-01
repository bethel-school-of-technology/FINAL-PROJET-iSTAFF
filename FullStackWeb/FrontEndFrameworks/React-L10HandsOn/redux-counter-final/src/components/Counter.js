import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber, countingTheClicks }) => {

    return (
      <div>
        <div>
          <h1>Counter</h1>
          <button onClick={onDecrement}> - </button>
          <span>   {count}   </span>
          <button onClick={onIncrement}> + </button>
          <p></p>
          <p></p>
          <h5>Times the increment/decrement buttons have been clicked:  {countingTheClicks}</h5> 
          
          <br />
          <input type='text' onChange={event => onInputNumberChange(event.target.value)} value={numberInputted}></input>
          <button onClick={onInputNumber}>Change Count Number</button>
        </div>
      </div>
    );
    }


export default Counter;