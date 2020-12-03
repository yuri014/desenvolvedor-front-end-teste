import formatTimestamp from './formatTimestamp';
import elements from './indexElements';

const resetChild = `<div class="price">
<h2 id="orderValue">R$ 00,00</h2>
<i>Valor do pedido</i>
</div>
<div>
<h2 id="name">1 - Nome do Cliente</h2>
<i>Número de ordem e nome do cliente</i>
</div>
<div>
<h2 id="situation">Entregue | Entregar</h2>
<i>Situação da encomenda</i>
</div>
<div>
<h2 id="orderDate">DD/MM/YYYY</h2>
<i>Data do pedido</i>
</div>`;

export const handleError = () => {
  elements.section.className = 'error';
  elements.section.innerHTML = '<h3>Encomenda não <br /> encontrada!</h3><h3>Procure novamente</h3>';
};

export const handleSuccess = (order) => {
  elements.section.classList.remove('loading');
  elements.section.innerHTML = resetChild;
  elements.name.innerText = `${order.cliente.id} - ${order.cliente.nome}`;
  elements.orderValue.innerText = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(order.valor);
  elements.situation.innerText = order.entregue ? 'Entregue' : 'Entregar';
  elements.orderDate.innerText = formatTimestamp(order.data);
};
