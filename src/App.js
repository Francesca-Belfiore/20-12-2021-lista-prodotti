import { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import './App.css';

const products = [];

function App() {

  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div className="App">
      {allProducts.map((product, index) => (
        <ProductList key={index} data={product}/>
      ))}
    </div>
  );
}

export default App;
