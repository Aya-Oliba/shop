import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/counter/counter';
import NavBar from './components/navbar';
import Shop from './components/shop';
import Home from './components/home';
import ProductDetails from './components/shop/product-details';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>  
        <Route path="/counter" element={<Counter/>}></Route>  
        <Route path="/shop" element={<Shop/>}></Route>  
        <Route path="/shop/:id" element={<ProductDetails/>}></Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
