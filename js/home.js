const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

// Slider que está ativo.
let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  
  hideSlider()
  /* Fazendo uma verificação se o slider atual corresponde ao length, quantidade de sliders que temos,
  se tivemos 2 sliders, eu vou querer voltar pro slider 0, se tiver no ultimo slider ele voltará para 
  o primeiro */
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider();
  resetarIntervalo();
}

function prevSlider() {
 
  hideSlider()
   /*(if) = Caso nosso slider atual seja igual a 0 no caso o primeiro slider, quero 
  que ele sete o currenteSlide como o ultimo, (else) = caso não seja o primeiro slider subtraia. */
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider();
  resetarIntervalo();
}

function resetarIntervalo() {
  // Resetando o intervalo.
  clearInterval(intervalo);
  intervalo = setInterval(nextSlider, 6000);
}

btnPrev.addEventListener('click', prevSlider)
btnNext.addEventListener('click', nextSlider)

intervalo = setInterval(nextSlider, 6000);