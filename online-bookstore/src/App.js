import React, { useState } from 'react';
import './App.css';
import LoginPopup from './LoginPopup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <>
      <div className="App">
  
        <Button variant="outline-primary" className='loginBtn' onClick={() => setShowLoginPopup(true)}>Login</Button>{' '}
        {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
      </div>
      <div>

      </div>
    </>
  );
}

export default App;



