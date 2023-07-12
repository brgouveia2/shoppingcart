import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from './Products';


const product = [
  {
    id: 1,
    name: 'Camiseta Nike SB Logo - Masculina',
    description: 'Descrição da camiseta Nike SB Logo - Masculina',
    price: 129.90,
    image: 'https://imgcentauro-a.akamaihd.net/500x500/96314707/camiseta-nike-sb-logo-masculina-img.jpg',
    rating: 3.8,
    reviews: [
      { id: 1, name: 'Usuário 1', comment: 'Ótimo produto!' },
      { id: 2, name: 'Usuário 2', comment: 'Recomendo!' }
    ]  
  },

  {
    id: 2,
    name: 'Tênis Jordan 1 Mid Masculino Casual',
    description: 'Descrição do tênis Jordan 1 Mid Masculino Casual',
    price: 699.99,
    image: 'https://imgnike-a.akamaihd.net/768x768/016511BP.jpg',
    rating: 4.5,
    reviews: [
      { id: 1, name: 'Usuário 1', comment: 'Ótimo produto!' },
      { id: 2, name: 'Usuário 2', comment: 'Recomendo!' }
    ]  
  },

  {
    id: 3,
    name: 'Bolsa Transversal Nike Heritage Unissex',
    description: 'Descrição da bolsa Transversal Nike Heritage Unissex',
    price: 129.90,
    image: 'https://imgnike-a.akamaihd.net/768x768/006290ID.jpg',
    rating: 4.7,
    reviews: [
      { id: 1, name: 'Usuário 1', comment: 'Ótimo produto!' },
      { id: 2, name: 'Usuário 2', comment: 'Recomendo!' }
    ]  
  }
];

const Checkout = ({ match }) => {
  const productId = parseInt(match.params.id);
  const product = products.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [coupon, setCoupon] = useState('');
  const navigate = useNavigate();

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
    navigate.push('/');
  };

  const handleCheckout = () => {
    console.log('Pedido finalizado!');
    navigate.push('/');
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
