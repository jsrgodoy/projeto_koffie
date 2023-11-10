const endereco = localStorage.getItem("endereco");
const numero = localStorage.getItem("numero");
const cidade = localStorage.getItem("cidade");
const estado = localStorage.getItem("estado");
let pagamento = localStorage.getItem("pagamento");

pagamento = pagamento.toUpperCase();
const pedidoConfirmado = document.createElement('div');

pedidoConfirmado.className = "box1"
pedidoConfirmado.innerHTML = 
    `
        <h1>Uhu pedido confirmado!</h1>
        <p>Endereço de entrega: ${endereco}, ${numero}, ${cidade}, ${estado}</p>
        <p>Previsão de entrega: <span class="text">15min</span> para você curtir seu &regKoffie</p>
        <p>Forma de pagamento: ${pagamento}</p> 
    `;

const sectionElement = document.querySelector('.pedido');
sectionElement.insertBefore(pedidoConfirmado, sectionElement.firstChild);