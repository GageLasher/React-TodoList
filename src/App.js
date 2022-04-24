import logo from './logo.svg';
import { useState } from "react";
import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return (
    < div className="App" >
      <header>
        <h1>Gage's ToDo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div >
  );
}

export default App;
