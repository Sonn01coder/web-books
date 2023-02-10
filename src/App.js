import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/content/Content';
import HeaderNav from './components/header/HeaderNav';
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App .modal-fullscreen">
        <HeaderNav />
        <Routes>
          <Route exact path='/web-books' element={<Content />} />
          <Route path='/login' element={<Login />} />
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
