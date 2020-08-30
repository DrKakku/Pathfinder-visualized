import React, { useState } from 'react';

import './App.css';
import Form from "./components/fourm";
import Todo from "./components/todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>List TO DO
      </h1>   </header>
      <Form todos = {todos} inputText = {inputText} setTodos = {setTodos}  setInputText={setInputText} />
      <Todo />
      <header>
        {inputText}
      </header>
    </div>
  );
}

export default App;
