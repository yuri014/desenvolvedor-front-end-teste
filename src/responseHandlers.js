import formatTimestamp from './formatTimestamp';
import elements from './indexElements';

export const handleError = () => {
  elements.section.className = 'error';
  elements.section.innerHTML = '<h3>Encomenda não <br /> encontrada!</h3><h3>Procure novamente</h3>';
};

export const handleSuccess = (order) => {
  elements.section.classList.remove('loading');
  elements.name.innerText = `${order.cliente.id} - ${order.cliente.nome}`;
  elements.orderValue.innerText = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(order.valor);
  elements.situation.innerText = order.entregue ? 'Entregue' : 'Entregar';
  elements.orderDate.innerText = formatTimestamp(order.data);
};
