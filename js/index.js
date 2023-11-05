// Acessando o elemento do parágrafo 1 e definindo o contador para ser usado na condição.
let elementP1 = document.getElementById("paragrafo1");
let textoP1 = elementP1.innerHTML;
elementP1.innerHTML = "";
let contadorP1 = 0;

// Acessando o elemento do parágrafo 2 e definindo o contador para ser usado na condição.
let elementP2 = document.getElementById("paragrafo2");
let textoP2 = elementP2.innerHTML;
elementP2.innerHTML = "";
let contadorP2 = 0;

// Acessando o elemento do parágrafo 3 e definindo o contador para ser usado na condição.
let elementP3 = document.getElementById("paragrafo3");
let textoP3 = elementP3.innerHTML;
elementP3.innerHTML = "";
let contadorP3 = 0;

function digitar() {
  if (contadorP1 < textoP1.length) {

    // Aplicando a animação de digitação no parágrafo 1
    elementP1.innerHTML += textoP1.charAt(contadorP1);
    contadorP1++;
    setTimeout(digitar, 45);

  } else if (contadorP2 < textoP2.length ) {
    
    // Removendo a classe efeito cursor do primeiro paragráfo e adicionando no segundo.
    elementP1.classList.remove("efeitoCursor");
    elementP2.classList.add("efeitoCursor");

    // Aplicando a animação de digitação no parágrafo 2
    document.getElementById("paragrafo2").innerHTML += textoP2.charAt(contadorP2);
    contadorP2++;
    setTimeout(digitar, 45);

  } else if (contadorP3 < textoP3.length ) {

    // Removendo a classe efeito cursor do primeiro segundo e adicionando no terceiro.
    elementP2.classList.remove("efeitoCursor");
    elementP3.classList.add("efeitoCursor");
    
    // Aplicando a animação de digitação no parágrafo 3
    document.getElementById("paragrafo3").innerHTML += textoP3.charAt(contadorP3);
    contadorP3++;
    setTimeout(digitar, 45);

  }
}

digitar();

setTimeout(function() {
    window.location.href = 'home.html';}, 18000);
