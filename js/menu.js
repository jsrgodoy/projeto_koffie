// Pegando a quantidade, texto span e valor dos produtos, depois calculando e exibindo no console.log()

let pedidos = [];
let totalGeral = 0;

document.querySelectorAll(".buy-btn").forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    event.preventDefault(); // impede a ação padrão do "a href"

    let produto = event.target.closest('.wsk-cp-product');
    let nome = produto.querySelector(".category").innerText; // Alterei para selecionar o nome do produto
    let quantidade = parseInt(produto.querySelector(".quantidade").value); 
    let quantidadeInput = produto.querySelector(".quantidade"); // remove o valor do Input  
    let index = pedidos.findIndex(item => item.nome === nome); // Variavel para verificar o carrinho.....
  
      // Para remover o produto do carrinho, com isso fica zerado...
    if (index !== -1) {
      totalGeral -= pedidos[index].total;
      quantidade -= pedidos[index].quantidade;      
      pedidos.splice(index, 1);

      quantidadeInput.value = 0;
      quantidade = 0;
      
    } else { // código anterior que adiciona o produto no carrinho....      
      let preco = parseFloat(produto.querySelector(".price").innerText.replace("R$ ", "").replace(",", "."));
      let total = preco;
      pedidos.push({ nome: nome, quantidade: quantidade, total: total });
      totalGeral += total;
    } 
   
  });

// Salvando os cafés selecionados e enviando para a página de pedido

  document.getElementById("confirmar-pedido").addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.id === "confirmar-pedido" && totalGeral > 0) {
      // Armazenar os valores na sessionStorage
      sessionStorage.setItem("pedidos", JSON.stringify(pedidos));
      sessionStorage.setItem("totalGeral", totalGeral);

      // Redirecionar apenas quando o botão "Confirmar Pedido" for clicado
      window.location.href = "pedido.html";
    }

  })
});

// Função que altera a cor do botão quando for clicado
function alterarCorBotao(clickedButton) {
  // Alterna entre as classes CSS do botão clicado
  clickedButton.classList.toggle('selected');
}

// Atualizar preço ao mudar quantidade

let expressoTradicionalQty = document.querySelectorAll(".quantidade");
let price = document.querySelectorAll(".price");
let original = [8,9,12,10,10,14,15,15,15,12,5,8,8,9];

for (let i = 0, len = expressoTradicionalQty.length; i < len; i++) {

  expressoTradicionalQty[i].addEventListener("change", function () {  
  price[i].textContent = ((expressoTradicionalQty[i].value * original[i]));

});

}

