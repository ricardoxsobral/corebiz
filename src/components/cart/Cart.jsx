import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import './Cart.css';

function Cart({ updateCartCount }) {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProducts(storedProducts);
  }, []);

  const handleRemoveProduct = (productId) => {
    const updatedProducts = cartProducts.map(product => {
      if (product.productId === productId) {
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return null;
        }
      }
      return product;
    }).filter(product => product !== null);

    setCartProducts(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));

    updateCartCount(updatedProducts.reduce((acc, product) => acc + product.quantity, 0));
  };

  return (
    <div className='Cart'>
      <Container>
        <h2>Meu Carrinho</h2>
        <hr />
        {cartProducts.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          cartProducts.map(product => (
            <div key={product.productId} className="cart-product">
              <img src={product.imageUrl} alt={product.productName} className="cart-product-image" />
              <div className="cart-product-info">
                <h3 className='product-name'>{product.productName}</h3>
                <p className='product-price' >Preço: R${(product.price / 100).toFixed(2)}</p>
                <p className='quantity' >Quantidade: {product.quantity}</p>
                <button  className='remove-button' onClick={() => handleRemoveProduct(product.productId)}>Remover</button>
              </div>
              <hr className='divisor' />
            </div>
          ))
        )}
      </Container>
    </div>
  );
}

export default Cart;
