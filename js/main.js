//greetings
const n1 = window.prompt("Введіть своє ім'я. Наприклад - Маргарита");
const n2 = window.prompt("Введіть своє прізвище. Наприклад - Качан");
const n3 = window.prompt("Як Вас по батькові? Наприклад - Володимирівна");

if(n1==null){
  alert("Дія була відмінена");
}
else if(n2==null){
  alert("Дія була відмінена");
}
else if(n3==null){
  alert("Дія була відмінена");
}
else{
  alert(`Привіт, ${n1} ${n2} ${n3}. Радий тебе бачити!` )
} 

//accordion
function dropDownAccordion() {
  const acc = document.getElementsByClassName("accordion__header");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("show");

      const accordionContent = this.nextElementSibling;
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  }
}
dropDownAccordion();


//slider/carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(num) {
  showSlides((slideIndex += num));
}

function currentSlide(num) {
  showSlides((slideIndex = num));
}

function showSlides(num) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (num > slides.length) {
    slideIndex = 1;
  }
  if (num < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


