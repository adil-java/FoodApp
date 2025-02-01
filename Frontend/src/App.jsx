import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import './App.css'
// import Navbar from './components/Navbar'
import Home from './screens/Home'
import Login from './screens/Login';
import Signup from './screens/Signup.jsx';
import { CartProvider } from './context/contextReducer'; // Import with correct capitalization
import Cart from './screens/Cart.jsx';
import AddItem from './screens/AddItem.jsx';

function App() {
  return (
    <CartProvider> {/* Capitalize 'CartProvider' */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createuser' element={<Signup />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/Upload' element={<AddItem/>} />

          
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;
