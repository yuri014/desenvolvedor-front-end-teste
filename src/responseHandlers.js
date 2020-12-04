import formatTimestamp from './formatTimestamp';
import elements from './indexElements';

export const handleError = () => {
  elements.section.style.display = 'none';
  elements.error.classList.remove('error');
};

export const handleSuccess = (order) => {
  elements.section.style.display = 'grid';
  elements.error.className = 'error';
  elements.section.classList.remove('loading');
  elements.name.innerText = `${order.cliente.id} - ${order.cliente.nome}`;
  elements.orderValue.innerText = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(order.valor);
  elements.situation.innerText = order.entregue ? 'Entregue' : 'Entregar';
  elements.orderDate.innerText = formatTimestamp(order.data);
};
