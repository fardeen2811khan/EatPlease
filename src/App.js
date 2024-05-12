
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { CartProvider } from './components/ContextReducer.js';
import Cart from './screens/Cart.js';

function App() {
  return (
    <CartProvider><Router>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
    
    </Routes>
    </Router></CartProvider>
    
   
  );
}

export default App;
