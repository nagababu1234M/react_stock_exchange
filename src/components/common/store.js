// store.js
import { createStore } from 'redux';

const initialState = {
  count: 0,
  data:""
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'ADDTODO':
      return { data: action.payload + state.data};
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
