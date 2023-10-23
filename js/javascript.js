function login() {

  const login = document.querySelector(".login-form");

  if (login.style.visibility == "hidden") {
    login.style.visibility = "visible";
  } else {
    login.style.visibility = "hidden";
  }

}
