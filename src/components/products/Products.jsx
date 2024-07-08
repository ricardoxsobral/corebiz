import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://corebiz-test.herokuapp.com/api/v1/products");
        if (!response.ok) {
          throw new Error('Erro ao carregar os produtos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className='Products'>
        <Container maxWidth="lg">
          <div className="products-title">
            <h3>Mais Vendidos</h3>
            <hr />
          </div>
          <div className="product-list">
            {products.map(product => (
              <div key={product.productId} className="product-item">
                <h4>{product.productName}</h4>
                <p>Preço: R${product.price}</p>
                {/* Adicione mais detalhes do produto conforme necessário */}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Products;
