// Recuperando os valores da página produtos

let totalPedidos = JSON.parse(sessionStorage.getItem("pedidos"));
let totalValores = parseFloat(sessionStorage.getItem("totalGeral"));
let mostrarItens = document.getElementById("itens-pedido");

if (totalPedidos && totalPedidos.length > 0) {
  totalPedidos.forEach(function (pedido) {
    let nome = pedido.nome;
    let quantidade = pedido.quantidade;
    let preco = pedido.total.toFixed(2).replace(".", ",");

    let itemPedido = document.createElement("div");
    itemPedido.classList.add("pedido-item");

    let nomeProduto = document.createElement("p");
    nomeProduto.textContent = nome;

    let quantidadeProduto = document.createElement("p");
    quantidadeProduto.textContent = `Quantidade: ${quantidade}`;

    let precoProduto = document.createElement("p");
    precoProduto.textContent = `Preço: R$ ${preco}`;


    itemPedido.appendChild(nomeProduto);
    itemPedido.appendChild(quantidadeProduto);
    itemPedido.appendChild(precoProduto);

    mostrarItens.appendChild(itemPedido);

  });

  let valores = document.querySelector(".valores p");
  let precoTotal = document.querySelector(".box2-parte2 .valores h1");
  valores.textContent = `Subtotal  R$: ${totalValores.toFixed(2).replace(".", ",")}`;
  precoTotal.textContent = `R$: ${totalValores.toFixed(2).replace(".", ",")}`;

} else {
  mostrarItens.textContent = "Nenhum pedido selecionado.";
}

// Armazenar os dados do formulário de pedido 

document.getElementById('enviarPedido').addEventListener('click', function (event) {
  event.preventDefault();

  const endereco = document.getElementById('endereco').value;
  const numero = document.getElementById('numero').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;
  const pagamento = document.getElementById('pagamento').value;
  const pedido = totalValores; // add para não confirmar sem ter este campo válido

  if (!endereco || !numero || !cidade || !estado || !pagamento || !pedido) {
    mensagemErro.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    return;
  }
  else {

    localStorage.setItem('endereco', endereco);
    localStorage.setItem('numero', numero);
    localStorage.setItem('cidade', cidade);
    localStorage.setItem('estado', estado);
    localStorage.setItem('pagamento', pagamento);

    // Exibe o modal de sucesso
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('modal').style.display = 'flex';

    document.getElementById('overlay').addEventListener('click', function () {
      // Esconde o modal quando clicar fora dele
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('modal').style.display = 'none';
    });

    btnModalCancelar = document.getElementById('btn-modal-cancelar');
    btnModalConfirmar = document.getElementById('btn-modal-confirmar');

    btnModalCancelar.addEventListener('click', function () {
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('modal').style.display = 'none';
    });

    btnModalConfirmar.addEventListener('click', function () {

      // Esconde o modal quando clicar no botão Ok
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('modal').style.display = 'none';
      window.location.href = 'confirmar-pedido.html';
    });


  }

});

