import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import SlotSelection from './components/SlotSelection';
import OrderSuccess from './components/OrderSuccess';
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleOrderComplete = () => {
    console.log('Order completed');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/home"
          element={user ? <Home /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/product"
          element={user ? <ProductPage /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/slot-selection"
          element={
            user ? (
              <SlotSelection onOrderComplete={handleOrderComplete} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/order-success"
          element={
            user ? (
              <OrderSuccess />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;