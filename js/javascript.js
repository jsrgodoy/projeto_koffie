/*------ LOGIN -----*/


const login = document.querySelector(".login-form");

const account = document.querySelector(".account");

const UserName = document.querySelector("#UserName");

let usernameHelper = document.getElementById("username-helper");

const Passwod = document.querySelector("#Passwod");

let senhaHelper = document.getElementById("senha-helper");



document.addEventListener('mousedown', (event) => {
  if (!(login.contains(event.target)) && !(account.contains(event.target))) {
    login.style.visibility = "hidden";
    usernameHelper.style.display = "none";
    senhaHelper.style.display = "none";

  }
})

function abre() {
  if (login.style.visibility == "hidden") {
    login.style.visibility = "visible";
  } else {
    login.style.visibility = "hidden";
    usernameHelper.style.display = "none";
    senhaHelper.style.display = "none";
  }

}

function fecha() {
  login.style.visibility = "hidden";
  usernameHelper.style.display = "none";
  senhaHelper.style.display = "none";
}

document.querySelector('.log-btn').addEventListener('click', function (event) {

  usernameHelper.innerText = 'Usuário não encontrado'
  usernameHelper.style.display = "block";

  senhaHelper.innerText = 'Senha inválida'
  senhaHelper.style.display = "block";
});


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







