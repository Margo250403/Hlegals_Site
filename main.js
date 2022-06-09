"use strict";

// const dataServer = [
//   {
//     title: "ЛЕНДІНГ",
//     content:
//       "Довга сторінка з конверсією від 4% для збору контактів на реєстрацію або покупку. Презентація та пропозиція вашого унікального продукту на одній сторінці з розкриттям переваг, необхідності продукту, встановлення довіри між компанією, її продуктом та відвідувачем.",
//   },
//   {
//     title: "КОРПОРАТИВНИЙ САЙТ",
//     content:
//       "Корпоративні сайти – великі багатосторінкові ресурси. Це іміджевий інструмент роботи компанії через інтернет. На них розміщують опис послуг, переваги, продукцію, повну інформацію для представництва в інтернеті.",
//   },
//   {
//     title: "ІНТЕРНЕТ МАГАЗИН",
//     content:
//       "Онлайн-магазин із картками товарів чи послуг. Управління цінами, знижками прямо на сайті, онлайн-оплата з можливістю інтеграції понад 10 платіжних систем або еквайрингу. Інтеграція із CRM-системами, онлайн-консультантом, віджетами, каталогом.Каталог з фільтрацією, категоріями,пошук за асортиментом, можливістю імпорту або експорту продукції.",
//   },
//   {
//     title: "САЙТ-ВІЗИТКА",
//     content:
//       "Головна інформація про організацію та послуги з мінімальними вкладеннями. Дозволяє швидко надати опис компанії, контактну інформацію, послуги. Невеликий веб ресурс, як правило, до 5 сторінок.",
//   },
//   {
//     title: "САЙТИ ОНЛАЙН-ШКІЛ",
//     content:
//       "Зручний майданчик для залучення та навчання студентів. Оплата за курси, CRM-системи, чат-боти,вирви,сторінки уроків, додаткові матеріали. Такі проекти підходять не тільки інфобізнесу, а й освітнім організаціям, якщо останні ведуть онлайн-активність.",
//   },
//   {
//     title: "САЙТ-КАТАЛОГ",
//     content:
//       "Економічний, швидкий інструмент, що продає для вашого бізнесу. Наповнення картками товарів докладним описом та цінами. Проста демонстрація продукції, можливість залишити заявку на замовлення.",
//   },
//   {
//     title: "САЙТ-КВІЗ",
//     content:
//       "Взаємодіє із користувачами через опитування. Такий тест формує велику кількість цільових заявок за мінімальної вартості ліда. Інтерактивний контент залучає клієнтів. За даними маркетологів Marquiz, квізи збільшують кількість заявок у 5 разів.",
//   },
//   {
//     title: "SEO-ОПТИМІЗАЦІЯ",
//     content:
//       "Підготовка та налаштування сайту до SEO просування. Внутрішня оптимізація, налаштування дзеркал, технічних параметрів, збирання семантичного ядра, наповнення поточного інтернет-ресурсу вручну зібраними ключовими словами. При необхідності зміна структури ресурсу. Одноразова оплата послуги.",
//   },
//   {
//     title: "SEO-ПРОСУВАННЯ",
//     content:
//       "Довгостроковий розвиток із висновком у ТОП-видачі. Вартість одного клієнта дешевша у довгостроковому періоді в десятки разів, ніж залучення через рекламу. Клієнти самі знаходять ваш сайт в одній із перших лінійок пошукової системи за конкретними цільовими запитами.",
//   },
// ];

// function createAccordion(accordionSelector, data) {
//   //get accordion container
//   const container = document.querySelector(accordionSelector);

//   for (let item of data) {
//     //create elements
//     const title = document.createElement("h2");
//     const content = document.createElement("p");

//     //add classes
//     title.className = "accordion__header";
//     content.className = "accordion__content";

//     //insert html
//     title.innerHTML = item.title;
//     content.innerHTML = item.content;

//     //append to page
//     title.append(content);
//     container.appendChild(title);
//   }
// }

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
// createAccordion(".accordion", dataServer);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(num) {
  showSlides((slideIndex += num));
}

// Thumbnail image controls
function currentSlide(num) {
  showSlides((slideIndex = num));
}

function showSlides(num) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (num > slides.length) {
    slideIndex = 1;
  }
  if (num < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
