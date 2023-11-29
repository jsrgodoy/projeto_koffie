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
  let precoTotal = document.querySelector(".box3-parte2 .valores h1");
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
  const detalhesPedidoString = JSON.stringify(totalPedidos);
  const pedido = totalValores; // add para não confirmar sem ter este campo válido
  if (!endereco || !numero || !cidade || !estado || !pedido) {
    mensagemErro.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    return;
  
  } else if (!pagamento) {
    errorPag.textContent = 'Selecione uma forma de pagamento.';

  } else if (sectionForm.style.display === "flex" && (!nomeInput.value || !numeroInput.value || !validadeInput.value || !codigoInput.value )) { 
    errorPag.textContent = 'Preencha corretamente todos os campos.'
         
  } else {

    errorPag.textContent = '';

    localStorage.setItem('endereco', endereco);
    localStorage.setItem('numero', numero);
    localStorage.setItem('cidade', cidade);
    localStorage.setItem('estado', estado);
    localStorage.setItem('pagamento', pagamento);
    localStorage.setItem('detalhesPedido', detalhesPedidoString);


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

/* Formas de Pagamento */

// Selecionando elementos do cartão.

const cardFlip = document.querySelector('.flip-card');
const cardInner = document.querySelector('.flip-card-inner');
const cardFront = document.getElementById('front');
const cardBack = document.getElementById('back');
const numeroCard = document.getElementById('card');
const nomeCard = document.getElementById('nome-card');
const validadeCard = document.getElementById('valid-card');
const codigoCard = document.getElementById('secure-card')

// Selecionando elementos do formulário.

const nomeInput = document.getElementById('nome-form');
const numeroInput = document.getElementById('numero-form');
const validadeInput= document.getElementById('validade-form');
const codigoInput = document.getElementById('codigo-form');

nomeInput.addEventListener("input", function (e) {
  nomeCard.innerHTML = nomeInput.value;
});

numeroInput.addEventListener("input", function() {
  
  // Formatando o conteúdo do input.
  this.value = this.value
  .replace(/\D/g, '') // Removendo caracteres não numéricos.
  .replace(/(.{4})/g, '$1 ').trim(); // Inserindo um espaço a cada 4 caracteres

  //Inserindo no cartão os valores inseridos no input
  numeroCard.innerHTML = numeroInput.value;

  /* Fazendo uma verificação se o primeiro número inicia com 4 ou 5, caso inicie com 4 o cartão muda para visa,
  se caso inicie com 5 o cartão muda para mastercard. */
  const numeroValor = this.value.substring(0,1);
  if (numeroValor === '4') {
    cardFront.classList.add('front-visa');
    cardBack.classList.add('back-visa');
    cardFront.classList.remove('front-master');
    cardBack.classList.remove('back-master');

  } else if (numeroValor === '5') {
    cardFront.classList.add('front-master');
    cardBack.classList.add('back-master');
    cardFront.classList.remove('front-visa');
    cardBack.classList.remove('back-visa');
    
  } else {
    cardFront.classList.remove('front-visa');
    cardBack.classList.remove('back-visa');
    cardFront.classList.remove('front-master');
    cardBack.classList.remove('back-master');
  }
});

validadeInput.addEventListener("input", function () {
  
  this.value = this.value
  .replace(/\D/g, '') // Removendo caracteres não numéricos.
  .replace(/(\d{2})(?=\d)/g, '$1/').trim(); // Inserindo uma "/" a cada 2 dígitos.
  
  //Inserindo no cartão os valores inseridos no input
  validadeCard.innerHTML = validadeInput.value;
});

codigoInput.addEventListener("input", function () {
  
  this.value = this.value
  .replace(/\D/g, '') // Removendo caracteres não numéricos.
  
  //Inserindo no cartão os valores inseridos no input
  codigoCard.innerHTML = codigoInput.value;
});

// Criando evento para virar o cartão assim que estiver no foco.
codigoInput.addEventListener("focus", function () {
  cardInner.classList.add('flipped');
});

codigoInput.addEventListener("blur", function () {
  cardInner.classList.remove('flipped');
});

function flipcard() {
    cardInner.classList.toggle('flipped');
  }
   
  const selectPagamento = document.getElementById('pagamento');
  const sectionForm = document.querySelector('.section-form');
  const pixPag = document.getElementById("pix");

  // Adicionando um ouvinte de evento para detectar mudanças na seleção
  selectPagamento.addEventListener("change", function() {
    const opcaoSelecionada = selectPagamento.value;
    
    if (opcaoSelecionada === "cartao") {
      pixPag.style.display = "none"
      cardFlip.style.display = "flex";
      sectionForm.style.display = "flex";
      cardFlip.style.animation = "aparecer 1s forwards;";

    } else if (opcaoSelecionada === "pix") {
      cardFlip.style.display = "none";
      sectionForm.style.display = "none";
      pixPag.style.display = "flex"
    }
  });

  function limparFormularioCartao() {
    document.getElementById('formulario-cartao').reset();
  }