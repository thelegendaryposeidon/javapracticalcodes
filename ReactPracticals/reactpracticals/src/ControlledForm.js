import React, { useState } from 'react';
import './App.css';


function ControlledForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div style={{ textAlign: 'left', width: '300px' }}>
      <h2>Controlled Form</h2>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>
            First Name: 
            <input 
              type="text" 
              value={firstName} 
              onChange={handleFirstNameChange} 
              style={{ marginLeft: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Last Name: 
            <input 
              type="text" 
              value={lastName} 
              onChange={handleLastNameChange} 
              style={{ marginLeft: '5px' }}
            />
          </label>
        </div>
      </form>
      
      <hr />
      <h3>Live Preview:</h3>
      <p>Hello, {firstName} {lastName}!</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ControlledForm />
      </header>
    </div>
  );
}

export default App;