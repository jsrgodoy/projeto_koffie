/*------ LOGIN -----*/


const login = document.querySelector(".login-form");

const account = document.querySelector(".account");

document.addEventListener('mousedown', (event) => {
  if (!(login.contains(event.target)) && !(account.contains(event.target))) {
    login.style.visibility = "hidden";

  }
})

function abre() {
  if (login.style.visibility == "hidden") {
    login.style.visibility = "visible";
  } else {
    login.style.visibility = "hidden";
  }

}

function fecha() {
  login.style.visibility = "hidden";
}

/*
if (login.style.visibility == "hidden") {
  login.style.visibility = "visible";
} else {
  login.style.visibility = "hidden";
}
*/

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







