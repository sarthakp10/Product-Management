import './App.css';
import Navbar from './components/Navbar';
// import ProductForm from './components/ProductForm';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo';
import Login from './pages/Login';
import Signup from './pages/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <ProductForm /> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/api/products/:id' element={<ProductInfo />}></Route>
          <Route path='/api/user/login' element={<Login />}></Route>
          <Route path='/api/user/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
