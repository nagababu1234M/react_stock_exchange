// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../common/actions.js';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Map state to component props
const mapStateToProps = (state) => ({
  count: state.count,
});

// Map dispatch to component props
const mapDispatchToProps = {
  increment,
  decrement,
};

// Connect component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
