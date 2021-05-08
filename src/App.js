import React, { useState } from 'react'
import './App.css';
import Form from './components/Form.jsx'
import Results from './components/results';



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

    </div >
  );
};


export default App;
