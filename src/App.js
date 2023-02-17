import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Content from './components/content/Content';
import HeaderNav from './components/header/HeaderNav';
import Loading from './components/loading/Loading';
import Login from './components/login/Login';
import ProductScreen from './components/productScreen/ProductScreen';
import Register from './components/register/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App .modal-fullscreen">
        <HeaderNav />
        <Routes>
          <Route exact path='/web-books' element={<Content />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
