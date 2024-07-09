import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Products.css';

import prevArrowImg from '../../assets/left-arrow.png';
import nextArrowImg from '../../assets/right-arrow.png';

const CustomPrevArrow = (props) => (
  <button {...props} className="slick-arrow slick-prev">
    <img src={prevArrowImg} alt="Prev" />
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next">
    <img src={nextArrowImg} alt="Next" />
  </button>
);

function Products({ updateCartCount }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
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

  const handleBuyProduct = (product) => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    storedProducts.push(product);
    localStorage.setItem('cart', JSON.stringify(storedProducts));

    // Atualiza o contador de produtos no carrinho
    updateCartCount(storedProducts.length);

    console.log(`Produto "${product.productName}" adicionado ao carrinho!`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='Products'>
      <Container maxWidth="lg">
        <div className="products-title">
          <h3>Mais Vendidos</h3>
          <hr />
        </div>
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.productId} className="product-card">
              <img src={product.imageUrl} alt={product.productName} className="product-image" />
              <div className="card-info">
                <h2 className="product-name">{product.productName}</h2>
                <div className="product-stars">{'★'.repeat(product.stars) + '☆'.repeat(5 - product.stars)}</div>
                {product.listPrice && (
                  <div className="product-list-price">De: R${(product.listPrice / 100).toFixed(2)}</div>
                )}
                <div className="product-price">Por: R${(product.price / 100).toFixed(2)}</div>
                {product.installments.length > 0 && (
                  <div className="product-installments">
                    ou {product.installments[0].quantity}x de R${(product.installments[0].value / 100).toFixed(2)}
                  </div>
                )}
                <button className="buy-button" onClick={() => handleBuyProduct(product)}>
                  COMPRAR
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Products;
