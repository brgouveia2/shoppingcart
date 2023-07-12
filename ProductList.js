import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ product }) => {
  return (
    <div className="container">
      <h1>Produtos Disponíveis</h1>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} style={{ width: '200px' }} />
          <p>{product.description}</p>
          <p>Preço: R$ {product.price.toFixed(2)}</p>
          <Link to={`/checkout/${product.id}`}>Adicionar ao Carrinho</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
