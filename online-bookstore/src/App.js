import React, { useState } from 'react';
import './App.css';
import LoginPopup from './LoginPopup';
import BookSearch from './BookSearch';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <Router>
      <div className="App">
        <Button variant="outline-primary" className='loginBtn' onClick={() => setShowLoginPopup(true)}>Login</Button>{' '}
        {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
      </div>

      <Routes>
        <Route path="/search" element={<BookSearch />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
