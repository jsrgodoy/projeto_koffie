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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Pegar as quantidades que o usuário colocou, somar e armazenar no localStorage

document
  .querySelector("#expresso-tradicional-add")
  .addEventListener("click", function () {
    var qty = document.querySelector("#expresso-tradicional-qty").value;
    var price = qty * 9.99;
    var productInfo = {
      quantity: qty,
      price: price,
    };
    localStorage.setItem("expresso-tradicional", JSON.stringify(productInfo));
  });
