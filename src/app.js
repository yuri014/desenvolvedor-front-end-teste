import elements from './indexElements';
import { handleError, handleSuccess } from './responseHandlers';

import './style.scss';

const searchOrder = async () => {
  elements.section.className = 'loading';
  const fetchOrders = await fetch('./data/dados.json');
  const response = await fetchOrders.json();
  const { encomendas } = response;
  return encomendas.find((order) => order.numero === elements.requestNumber.value.toUpperCase());
};

const handleOrder = async () => {
  const order = await searchOrder();

  if (!order) return handleError();

  return handleSuccess(order);
};

elements.requestNumber.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleOrder();
});
