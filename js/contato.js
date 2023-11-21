// Selecionando elementos para validação do campo Nome.

let nomeLabel = document.querySelector('label[for="nome"]');
let nomeInput = document.getElementById("nome");
let nomeHelper = document.getElementById("nome-helper");

// Validando o campo nome.

nomeInput.addEventListener("input", function () {

  // Verificando se há pelo menos um número ou caractere especial no campo input.
  if (/[^\p{L}\s]/gu.test(nomeInput.value)) {
    // Estilos caso contenha algum número ou caractere especial durante o preenchimento.
    nomeInput.classList.add("error");
    nomeHelper.classList.add("visible");
    nomeHelper.innerText = "(O campo só pode conter letras.)";
    nomeLabel.style.color = "#992020";
  } else if (nomeInput.value.length < 3 && !nomeInput.value.trim() == "") {
    // Estilos caso o campo contenha menos de 3 letras.
    nomeInput.classList.add("error");
    nomeHelper.classList.add("visible");
    nomeHelper.innerText = '("O campo Nome deve conter mais de duas letras.")';
    nomeLabel.style.color = "#992020";
  } else if (nomeInput.value.trim() === "") {
    // Remover classes caso o campo esteja completamente vazio.
    nomeInput.classList.remove("error");
    nomeInput.classList.remove("correct");
    nomeHelper.classList.remove("visible");
    nomeLabel.style.color = "#2a130a";
  } else {
    // Estilos caso o campo esteja correto.
    nomeInput.classList.remove("error");
    nomeInput.classList.add("correct");
    nomeHelper.classList.remove("visible");
    nomeLabel.style.color = "#2a130a";
  }
  validarBotao();
});

// Selecionando elementos para validação do campo de Email

let emailLabel = document.querySelector('label[for="email"]');
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

// Validando o campo email.

emailInput.addEventListener("blur", function () {
  /* Vericando se o email termina com ".com" ou ".com.br" e se
    segue alguns dos seguintes padrões: */

  // exemplo@dominio
  // exemplo_123@dominio
  // exemplo_silva@dominio
  // exemplo.123@dominio

  // Obs: o email será verificado também se não tem caracteres especiais como: !#$%¨& etc.
  if (
    /^(?=[a-zA-Z0-9]*[a-zA-Z])[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z-]+(?:\.[a-zA-Z-]+)*\.(com|com\.br)$/.test(
      emailInput.value)
  ) {
    // Estilos caso o email siga os padrões citados acima.
    emailInput.classList.remove("error");
    emailInput.classList.add("correct");
    emailHelper.classList.remove("visible");
    emailLabel.style.color = "#2a130a";

} else if (emailInput.value.trim() === "") {
    emailInput.classList.remove("error");
    emailInput.classList.remove("correct");
    emailHelper.classList.remove("visible");
    emailLabel.style.color = "#2a130a";

  } else {
    // Estilos caso o campo esteja incorreto não seguindo a validação da expressão regular.
    emailInput.classList.add("error");
    emailHelper.classList.add("visible");
    emailHelper.innerText = "(Insira um email válido, exemplo: nome@dominio.com ou nome@dominio.com.br)";
    emailLabel.style.color = "#992020";
  }
  validarBotao();
});

// Selecionado Elementos para validação do campo de Mensagem.

let mensagemLabel = document.querySelector('label[for="mensagem"]');
let mensagemTextArea = document.getElementById("mensagem");
let mensagemHelper = document.getElementById("mensagem-helper");

// Validando o campo mensagem.

mensagemTextArea.addEventListener("input", function () {

  if (mensagemTextArea.value.length > 0 &&mensagemTextArea.value.length < 20) {
    // Estilos caso o texto exceda 10 caracteres.
    mensagemTextArea.classList.add("error");
    mensagemHelper.classList.add("visible");
    mensagemHelper.innerText = "(O campo deverá conter mais de 20 caracteres.)";
    mensagemLabel.style.color = "#992020";
    validarBotao();

  } else if (mensagemTextArea.value.trim() === "") {
    // Remover classes caso o campo esteja completamente vazio.
    mensagemTextArea.classList.remove("error");
    mensagemTextArea.classList.remove("correct");
    mensagemHelper.classList.remove("visible");
    mensagemLabel.style.color = "#2a130a";


  } else {
    // Estilos caso o texto contenha menos de 10 caracteres.
    mensagemTextArea.classList.remove("error");
    mensagemTextArea.classList.add("correct");
    mensagemHelper.classList.remove("visible");
    mensagemLabel.style.color = "#2a130a";
    validarBotao();
  }
});

// Selecionado o elemento do botão de enviar.

let btnEnviar = document.getElementById("btn-submit");

/* Função para validar o botão, será válido caso não contenha a classe 'error' e também se
o campo não estiver em branco  */

function validarBotao() {
  if (
    !nomeInput.classList.contains("error") &&
    nomeInput.value.trim() !== "" &&
    !emailInput.classList.contains("error") &&
    emailInput.value.trim() !== "" &&
    !mensagemTextArea.classList.contains("error") &&
    mensagemTextArea.value.trim() !== ""
  ) {
    btnEnviar.disabled = false;
    btnEnviar.style.opacity = "1";
  } else {
    btnEnviar.disabled = true;
    btnEnviar.style.opacity = "0.5";
  }
}

// Função para mostrar ou ocultar popup de campo obrigatório ou vazio.

function mostrarPopUp(label, inputOrTextarea) {
  // Mostrar popup de campo obrigatório no input ou textarea.
  inputOrTextarea.addEventListener("focus", function () {
    label.classList.add("required-popup");
    inputOrTextarea.classList.add("foco");
  });

  // Ocultar popup de campo obrigatório no input ou textarea.
  inputOrTextarea.addEventListener("blur", function () {
    label.classList.remove("required-popup");
    inputOrTextarea.classList.remove("foco");
  });

  inputOrTextarea.addEventListener("input", function () {
    // Mostrar popup de campo vazio.
    if (inputOrTextarea.value.trim() == "") {
      label.classList.add("campo-vazio");

      // Ocultar popup de campo vazio.
    } else {
      label.classList.remove("campo-vazio");
    }
  });
}

// Chamando a função mostrarPopUp para os campos Nome, Email e Mensagem.

mostrarPopUp(nomeLabel, nomeInput);
mostrarPopUp(emailLabel, emailInput);
mostrarPopUp(mensagemLabel, mensagemTextArea);

// Selecionando o elemento do formulário.

let contatoForm = document.getElementById("formulario");

contatoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitando comportamento padrão de submissão do formulário.

  // Exibe o modal de sucesso
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("modal").style.display = "flex";

  // Limpando a classe "correct".

  nomeInput.classList.remove("correct");
  emailInput.classList.remove("correct");
  mensagemTextArea.classList.remove("correct");

  contatoForm.reset();
  validarBotao();
});

let overlay = document.getElementById("overlay");

overlay.addEventListener("click", function () {
  // Esconde o modal quando clicar fora dele
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
});

btnModal = document.getElementById("btn-modal");

btnModal.addEventListener("click", function () {
  // Esconde o modal quando clicar no botão Ok
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
});