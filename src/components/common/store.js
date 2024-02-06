// store.js
import { createStore } from 'redux';

// Define the initial state
const initialState = {
  count: 0,
};

// Define the reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(counterReducer);

export default store;
