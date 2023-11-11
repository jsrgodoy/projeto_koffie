// Selecionando elementos para validação do campo Nome.

let nomeLabel = document.querySelector('label[for="nome"]');
let nomeInput = document.getElementById("nome");
let nomeHelper = document.getElementById("nome-helper");

// Validando o campo nome.

nomeInput.addEventListener("input", function() {
    
    // Verificando se há pelo menos um número ou caractere especial no campo input.
    if (/[^\p{L}\s]/gu.test(nomeInput.value)) {
     
        // Estilos caso contenha algum número ou caractere especial.
        nomeInput.classList.add('error');
        nomeHelper.classList.add('visible');
        nomeHelper.innerText = '(O campo só pode conter letras.)';
        nomeLabel.style.color = "#992020";
        validarBotao();

    } else {

        // Estilos caso não contenha algum número ou caractere especial.
        nomeInput.classList.remove('error');
        nomeHelper.classList.remove('visible');
        nomeLabel.style.color ="#2a130a";
        validarBotao();
    }
});

// Selecionando elementos para validação do campo de Email

let emailLabel = document.querySelector('label[for="email"]');
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

// Validando o campo email.

emailInput.addEventListener("blur", function(evento) {
    let emailValor = evento.target.value;

    /* Vericando se o email termina com ".com" ou ".com.br" e se
    segue alguns dos seguintes padrões: */

    // exemplo@dominio
    // exemplo_123@dominio
    // exemplo_silva@dominio
    // exemplo.123@dominio

    // Obs: o email será verificado também se não tem caracteres especiais como: !$%¨&%& etc.

    if (/^(?=[a-zA-Z0-9]*[a-zA-Z])[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z-]+(?:\.[a-zA-Z-]+)*\.(com|com\.br)$/.test(emailValor)) {
        // Estilos caso o email siga os padrões citados acima.
        emailInput.classList.remove('error');
        emailHelper.classList.remove('visible');
        emailLabel.style.color ="#2a130a";
        validarBotao();

    } else {
        // Estilos caso o campo esteja incorreto não seguindo a validação da expressão regular.
        emailInput.classList.add('error');
        emailHelper.classList.add('visible');
        emailHelper.innerText = '(Insira um email válido.)';
        emailLabel.style.color = "#992020";
        validarBotao();
    }
});

// Selecionado Elementos para validação do campo de Mensagem.

let mensagemLabel = document.querySelector('label[for="mensagem"]');
let mensagemTextArea = document.getElementById("mensagem");
let mensagemHelper = document.getElementById("mensagem-helper");

// Validando o campo mensagem.

mensagemTextArea.addEventListener('input', function() {
    if (mensagemTextArea.value.length > 10) {
        // Estilos caso o texto exceda 10 caracteres.
        mensagemTextArea.classList.add('error');
        mensagemHelper.classList.add('visible');
        mensagemHelper.innerText = '(O campo só pode conter 10 caracteres.)';
        mensagemLabel.style.color = "#992020";
        validarBotao();

    } else {
        // Estilos caso o texto contenha 10 caracteres ou menos.
        mensagemTextArea.classList.remove('error');
        mensagemHelper.classList.remove('visible');
        mensagemLabel.style.color ="#2a130a";
        validarBotao();
    }
});

// Selecionado o elemento do botão de enviar.

let btnEnviar = document.getElementById('btn-submit')

/* Função para validar o botão, será válido caso não contenha a classe 'error' e também se
o campo não estiver em branco  */

function validarBotao() {
    if (!nomeInput.classList.contains('error') &&
        nomeInput.value.trim() !== '' &&
        !emailInput.classList.contains('error') &&
        emailInput.value.trim() !== '' &&
        !mensagemTextArea.classList.contains('error') &&
        mensagemTextArea.value.trim() !== '') {
    
        btnEnviar.disabled = false;
        btnEnviar.style.opacity = '1'
    } else {
        btnEnviar.disabled = true;
        btnEnviar.style.opacity = '0.5'
    }
    };

// Função para mostrar ou ocultar popup de campo obrigatório ou vazio.

function mostrarPopUp(label, inputOrTextarea) {

    // Mostrar popup de campo obrigatório no input ou textarea.
    inputOrTextarea.addEventListener("focus", function(){
        label.classList.add("required-popup");
        });

    // Ocultar popup de campo obrigatório no input ou textarea.
    inputOrTextarea.addEventListener('blur', function() {
        label.classList.remove("required-popup");
    });
    
    inputOrTextarea.addEventListener("input", function(){
    
    // Mostrar popup de campo vazio.
    if (inputOrTextarea.value.trim() == '') {
        label.classList.add("campo-vazio");
                
    // Ocultar popup de campo vazio.
    } else {
        label.classList.remove("campo-vazio");
    }
})};

// Chamando a função mostrarPopUp para os campos Nome, Email e Mensagem.

mostrarPopUp(nomeLabel, nomeInput);
mostrarPopUp(emailLabel, emailInput);
mostrarPopUp(mensagemLabel, mensagemTextArea);


// Selecionando o elemento do formulário.

let contatoForm = document.getElementById('formContato')

// Adicionando evento ao botão de Enviar do formulário.

btnEnviar.addEventListener('click', function () {

    // Exibe o modal de sucesso
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('modal').style.display = 'flex';
    contatoForm.reset();
    validarBotao();
});

document.getElementById('overlay').addEventListener('click', function () {
    // Esconde o modal quando clicar fora dele
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
});

btnModal = document.getElementById('btn-modal');

btnModal.addEventListener('click', function () {

    // Esconde o modal quando clicar no botão Ok
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
});