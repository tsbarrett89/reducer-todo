import React from "react";
import Todo from "./Todo";

const TodoList = props => {

  return ( 
    <div>
      {props.todos.map(el => <Todo key={el.id} todo={el} dispatch={props.dispatch}/>)}
    </div>
  )
}

export default TodoList;