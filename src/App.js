import React, { useState } from 'react'
import './App.css';
import Form from './components/Form.jsx'
import Results from './components/results';
import Box from './components/box'


function App() {
  const [state, setState] = useState({
    birthday: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <div>

      </div>
    </div>
  );

}

export default App;
