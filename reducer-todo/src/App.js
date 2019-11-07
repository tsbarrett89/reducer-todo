import React, { useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer";
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <TodoList todos={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;