import './App.css';
import Navbar from './components/Navbar';
// import ProductForm from './components/ProductForm';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo';
import Login from './pages/Login';
import Signup from './pages/Signup'
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <ProductForm /> */}
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to={'/api/user/login'}/>}></Route>
          <Route path='/api/products/:id' element={<ProductInfo />}></Route>
          <Route path='/api/user/login' element={!user ? <Login /> : <Navigate to={'/'}/>}></Route>
          <Route path='/api/user/signup' element={!user ? <Signup /> : <Navigate to={'/'}/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
