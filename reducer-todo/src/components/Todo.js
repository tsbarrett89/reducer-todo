import React from "react";

const Todo = props => {
  return (
    <p
      className={`task${props.todo.completed ? " completed" : ""}`}
      onClick={() =>
        props.dispatch({ type: "complete", payload: props.todo.id })
      }
    >
      {props.todo.item}
    </p>
  );
};

export default Todo;