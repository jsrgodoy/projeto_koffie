// Pegando a quantidade, texto span e valor dos produtos, depois calculando e exibindo no console.log()

let pedidos = [];
let totalGeral = 0;

document.querySelectorAll(".buy-btn").forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    event.preventDefault(); // impede a ação padrão do "a href"

    let produto = event.target.closest('.wsk-cp-product');
    let nome = produto.querySelector(".title-product h3").innerText;
    let quantidade = parseInt(produto.querySelector(".quantidade").value);    
    
    // converte a string de preço em um número
    let preco = parseFloat(produto.querySelector(".price").innerText.replace("R$ ", "").replace(",", "."));
    let total = quantidade * preco;

    pedidos.push({nome: nome, quantidade: quantidade, total: total});
    totalGeral += total;

    console.log(`${nome} - Quantidade (${quantidade}) - Total (R$ ${total.toFixed(2).replace(".", ",")})`);
    console.log(`Total Geral: R$ ${totalGeral.toFixed(2).replace(".", ",")}`);
   
  });

// Salvando os cafés selecionados e enviando para a página de pedido

  document.getElementById("confirmar-pedido").addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.id === "confirmar-pedido" && totalGeral > 0) {
      // Armazenar os valores na sessionStorage
      sessionStorage.setItem("pedidos", JSON.stringify(pedidos));
      sessionStorage.setItem("totalGeral", totalGeral);

      // Redirecionar apenas quando o botão "Confirmar Pedido" for clicado
      console.log("Redirecionando para a página de pedido.");
      window.location.href = "../projeto_koffie/pedido.html";
    }

  })
 
});
