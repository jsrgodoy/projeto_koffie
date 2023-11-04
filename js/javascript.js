
/*------ LOGIN -----*/

function login() {

  const login = document.querySelector(".login-form");

  if (login.style.visibility == "hidden") {
    login.style.visibility = "visible";
  } else {
    login.style.visibility = "hidden";
  }

}

/*------ VOLTAR AO TOPO -----*/

let mybutton = document.getElementById("myBtn");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Pegando a quantidade, texto span e valor dos produtos, depois calculando e exibindo no console.log()

var pedidos = [];
var totalGeral = 0;

document.querySelectorAll(".buy-btn").forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    event.preventDefault(); // impede a ação padrão do "a href"

    var product = event.target.closest('.wsk-cp-product');

    var nome = product.querySelector(".title-product h3").innerText;
    var quantidade = parseInt(product.querySelector(".quantidade").value);
    
    // converte a string de preço em um número
    var preco = parseFloat(product.querySelector(".price").innerText.replace("R$ ", "").replace(",", "."));

    var total = quantidade * preco;

    

    pedidos.push({nome: nome, quantidade: quantidade, total: total});

    totalGeral += total;

    console.log(nome + " - Quantidade (" + quantidade + ") - Total (R$ " + total.toFixed(2).replace(".", ",") + ")");

    console.log("Total Geral: R$ " + totalGeral.toFixed(2).replace(".", ","));

  });

 
});


