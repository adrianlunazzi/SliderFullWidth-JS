/*Capturo seccion Imagenes*/
const imgBx = document.querySelector(".imgBx");
const slides = imgBx.getElementsByTagName("img");
let i = 0;

/*Capturo seccion Textos*/
const contextBx = document.querySelector(".contextBx");
const slidesText = contextBx.getElementsByTagName("div");
let t = 0;

/*Controles Slider Imagen*/
function nextSlide() {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}
function prevSlide() {
  slides[i].classList.remove("active");
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add("active");
}

/*Controles Slider Texto*/
function nextSlideText() {
  slidesText[t].classList.remove("active");
  t = (t + 1) % slidesText.length;
  slidesText[t].classList.add("active");
}
function prevSlideText() {
  slidesText[t].classList.remove("active");
  t = (t - 1 + slidesText.length) % slidesText.length;
  slidesText[t].classList.add("active");
}
