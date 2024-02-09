import React from 'react';
import { connect } from 'react-redux';
import { addtodo } from '../common/actions';
import { useState } from 'react';

const Page4 = ({ data, addtodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addtodo(text);
    setText('');
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h-100">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
        <p>This is some content in the middle.</p>
      </div>
      <div>{data}</div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  addtodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page4);
