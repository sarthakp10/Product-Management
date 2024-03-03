import './App.css';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <ProductForm /> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
