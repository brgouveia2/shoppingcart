import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from './Products';

const Checkout = ({ match }) => {
  const productId = parseInt(match.params.id);
  const selectedProduct = products.find((p) => p.id === productId);
  const [quantity, setQuantity] = React.useState(1);
  const [cardNumber, setCardNumber] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [coupon, setCoupon] = React.useState('');

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const handleCancel = () => {
    console.log("Pedido excluído!")
  };

  const handleCheckout = () => {
    console.log("Pedido cancelado!")
  };

  const totalAmount = product.price * quantity;

  return (
    <div>
      <h1>Checkout</h1>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>

      <div>
        <label>Quantidade:</label>
        <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
      </div>

      <div>
        <label>Número do Cartão:</label>
        <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
      </div>

      <div>
        <label>Data de Validade:</label>
        <input type="text" value={expirationDate} onChange={handleExpirationDateChange} />
      </div>

      <div>
        <label>CVV:</label>
        <input type="text" value={cvv} onChange={handleCvvChange} />
      </div>

      <div>
        <label>Cupom de Desconto:</label>
        <input type="text" value={coupon} onChange={handleCouponChange} />
      </div>

      <div>
        <p>Total: R$ {totalAmount.toFixed(2)}</p>
      </div>

      <div>
        <button onClick={handleCheckout}>Finalizar</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default Checkout;
