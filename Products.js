import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
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

export default products;
