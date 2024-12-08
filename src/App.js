
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/men" element={<ShopCategory category="man"/>} />
          <Route path="/women" element={<ShopCategory category="woman"/>} />
          <Route path="/kids" element={<ShopCategory category="kid"/>} />
          <Route path='/product' element={<Product/>}> 
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
