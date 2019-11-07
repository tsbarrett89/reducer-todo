import React, { useState } from "react";

const TodoForm = props => {
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={event => setText(event.target.value)} />
      <button
        onClick={() => {
          setText("");
          props.dispatch({ type: "add", payload: text });
        }}
      >
        Add
      </button>
      <button onClick={() => props.dispatch({type: 'clear'})}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;