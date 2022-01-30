import {BrowserRouter, Route, Routes} from "react-router-dom"
import Error from "./components/Error";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
