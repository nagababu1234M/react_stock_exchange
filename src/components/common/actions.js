// actions.js
export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });
  export const addtodo = (text) => ({
    type: 'ADDTODO',
    payload: text,

  });