function toggleDropdown(location) {
  let container = document.querySelector(".select-container");
  let dropdown = document.querySelector(".select-dropdown");

  let isOpen = container.classList.contains("active");

  if (isOpen) {
    dropdown.style.display = "none";
    container.classList.remove("active");
  } else {
    closeAllDropdowns();
    dropdown.style.display = "block";
    container.classList.add("active");
  }
}

function selectOption(element, value, location) {
  document.querySelector(".span-label").textContent = value;
  document.getElementById("hidden_location").value = value;
  closeDropdown();
}

function closeDropdown() {
  let container = document.querySelector(".select-container");
  let dropdown = document.querySelector(".select-dropdown");
  dropdown.style.display = "none";
  container.classList.remove("active");
}

function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll(".select-dropdown");
  const chooseSpans = document.querySelectorAll(".span-choose");

  dropdowns.forEach((dropdown) => (dropdown.style.display = "none"));
  chooseSpans.forEach((span) => (span.style.display = "block"));
}

document.addEventListener("click", function (event) {
  let container = document.querySelector(".select-container");

  if (!container.contains(event.target)) {
    closeDropdown();
  }
});

document.querySelectorAll("*").forEach((el) => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log(el);
  }
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".report-slider", {
    slidesPerView: "auto", // Автоматическая ширина слайдов
    spaceBetween: 10, // Отступы между слайдами
    loop: false, // Без бесконечного прокручивания
    grabCursor: true, // Эффект "руки" при наведении
    touchRatio: 1, // Чувствительность свайпа
    touchReleaseOnEdges: true, // Возможность тянуть с края
    simulateTouch: true, // Поддержка тач-жестов
    freeMode: true, // Свободный скроллинг без привязки
  });
});

const nav_id = document.getElementById("nav-burger-id");
const burger_btn = document.getElementById("burger-btn");
const burger_img = document.querySelector(".burger-btn-img");
const body = document.body;

burger_btn.onclick = () => {
  if (nav_id.classList.toggle("open")) {
    burger_img.src = "./img/burger/burger_close.svg";
    body.classList.add("burger-open");
  } else {
    burger_img.src = "./img/burger/burger-open.svg";
    body.classList.remove("burger-open");
  }
};
