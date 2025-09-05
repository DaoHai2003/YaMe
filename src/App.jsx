import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import Ao from './pages/Ao';
import CartPages from './pages/CartPages';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductsPage/:id" element={<ProductsPage />} />
        <Route path="/Ao" element={<Ao />} />
        <Route path="/CartPages" element={<CartPages />} />
      </Routes>
   
  );
}

export default App;