import React from 'react';
import { connect } from 'react-redux';
import { addtodo,removetodo } from '../common/actions';
import { useState } from 'react';

const Page4 = ({ data, addtodo,removetodo }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addtodo(text);
    setText('');
  };
  const handleSubmitForEmove= (e) => {
    e.preventDefault();
    removetodo('');
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h-100">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
      <div>{data}</div>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={handleSubmitForEmove}>remove</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.text
});

const mapDispatchToProps = {
  addtodo,
  removetodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Page4);
