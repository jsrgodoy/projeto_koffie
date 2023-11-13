/*------ LOGIN -----*/


const login = document.querySelector(".login-form");

const account = document.querySelector(".account");

const UserName = document.querySelector("#UserName");

let usernameHelper = document.getElementById("username-helper");

const Password = document.querySelector("#Password");

let senhaHelper = document.getElementById("senha-helper");



document.addEventListener('mousedown', (event) => {
  if (!(login.contains(event.target)) && !(account.contains(event.target))) {
    login.style.visibility = "hidden";
    usernameHelper.style.display = "none";
    senhaHelper.style.display = "none";
    UserName.value = '';
    Password.value = '';

  }
})

function abre() {
  if (login.style.visibility == "hidden") {
    login.style.visibility = "visible";
  } else {
    login.style.visibility = "hidden";
    usernameHelper.style.display = "none";
    senhaHelper.style.display = "none";
    UserName.value = '';
    Password.value = '';
  }

}

function fecha() {
  login.style.visibility = "hidden";
  usernameHelper.style.display = "none";
  senhaHelper.style.display = "none";
  UserName.value = '';
  Password.value = '';
}

document.querySelector('.log-btn').addEventListener('click', function (evento) {

  let valor_username = UserName.value;
  let valor_senha = Password.value;

  if (valor_username.length == 0) {
    usernameHelper.innerText = 'Usuário obrigatório';
    usernameHelper.style.display = "block";
  }
  else {
    usernameHelper.innerText = 'Usuário não encontrado';
    usernameHelper.style.display = "block";
  }


  if (valor_senha.length == 0) {
    senhaHelper.innerText = 'Senha obrigatória';
    senhaHelper.style.display = "block";
  }
  else {
    senhaHelper.innerText = 'Senha inválida'
    senhaHelper.style.display = "block";
  }



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







