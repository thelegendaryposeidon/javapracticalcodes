import React from 'react';
import './App.css';


function ProfileCard(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={props.imageUrl} 
        alt={props.name} 
        style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
      />
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Profile Cards (Props Demo)</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProfileCard 
            name="Alice Smith" 
            email="alice@example.com"
            imageUrl="https://via.placeholder.com/100" 
          />
          <ProfileCard 
            name="Bob Johnson" 
            email="bob@example.com"
            imageUrl="https://via.placeholder.com/100" 
          />
          <ProfileCard 
            name="Charlie Brown" 
            email="charlie@example.com"
            imageUrl="https://via.placeholder.com/100" 
          />
        </div>
      </header>
    </div>
  );
}

export default App;