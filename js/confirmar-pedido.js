const endereco = localStorage.getItem("endereco");
const numero = localStorage.getItem("numero");
const cidade = localStorage.getItem("cidade");
const estado = localStorage.getItem("estado");
let pagamento = localStorage.getItem("pagamento");
const detalhesPedidoString = localStorage.getItem('detalhesPedido');

let totalPedidos = JSON.parse(sessionStorage.getItem("pedidos"));
let totalValores = parseFloat(sessionStorage.getItem("totalGeral"));
let mostrarItens = document.getElementById("itens-pedido");

let detalhesPedido = JSON.parse(detalhesPedidoString);
let detalhesPedidoHTML = '';

// Pegando nomes do produtos e quantidades para mostrar na página de confirmação do pedido
detalhesPedido.forEach(function (pedido) {
  let nome = pedido.nome;
  let quantidade = pedido.quantidade;
  let preco = pedido.total.toFixed(2).replace(".", ",");

  detalhesPedidoHTML += `
    <p>Nome do Produto: ${nome}</p>
    <p>Quantidade: ${quantidade}</p>
  `;
});

pagamento = pagamento.toUpperCase();
const pedidoConfirmado = document.createElement('div');

pedidoConfirmado.className = "box1";
pedidoConfirmado.innerHTML = `
  <h1>Uhu pedido confirmado!</h1>
  <p>Endereço de entrega: ${endereco}, ${numero}, ${cidade}, ${estado}</p>
  <div id="detalhes-pedido">
    ${detalhesPedidoHTML}
  </div>
  <p>Previsão de entrega: <span class="text">15min</span> para você curtir seu &regKoffie</p>
  <p>Forma de pagamento: ${pagamento}</p> 
`;

const sectionElement = document.querySelector('.pedido');
sectionElement.insertBefore(pedidoConfirmado, sectionElement.firstChild);

// Limpar Sessão
sessionStorage.clear();
