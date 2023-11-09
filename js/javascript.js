
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







