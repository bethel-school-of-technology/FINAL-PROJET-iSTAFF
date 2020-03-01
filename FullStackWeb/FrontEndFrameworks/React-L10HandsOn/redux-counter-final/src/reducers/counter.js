const initialState = {
  count: 0,
  numberInputted: 0,
  countingTheClicks: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        countingTheClicks: state.countingTheClicks + 1
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        countingTheClicks: state.countingTheClicks - 1
      };

    case 'INPUT_NUMBER_CHANGE':
      return {
        ...state,
        numberInputted: action.number
      };

    case 'INPUT_NUMBER':
      return {
        ...state,
        count: parseInt(state.numberInputted),
        numberInputted: null,
        countingTheClicks: 0
      };  

    default:
      return state;
  }
}

export default counterReducer;