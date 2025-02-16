const hiddenInputLocation = document.getElementById("#hiddenInputLocation");
const checkbox_location = document.querySelector(".checkbox-select-location");
const checkbox_count = document.querySelector(".checkbox-count-member");
const options_list_location = document.getElementById("options-list-location");
const options_list_members = document.getElementById("options-list-members");
const selected_name_location = document.querySelector(
  ".selected-name-location"
);
const selected_count_members = document.querySelector(
  ".selected-count-members"
);

checkbox_location.addEventListener("change", function () {
  if (this.checked) {
    options_list_location.style.display = "block";
  } else {
    options_list_location.style.display = "none";
  }
});

checkbox_count.addEventListener("change", function () {
  if (this.checked) {
    options_list_members.style.display = "block";
  } else {
    options_list_members.style.display = "none";
  }
});

function selectedOptionLocation(element) {
  let value = element.getAttribute("data-value");
  selected_name_location.textContent = value;
  options_list_location.style.display = "none";
  checkbox_location.checked = false;
}

function selectedOptionCount(element) {
  let value = element.getAttribute("data-value");
  selected_count_members.textContent = value;
  options_list_members.style.display = "none";
  checkbox_count.checked = false;
}

document.addEventListener("click", function (event) {
  if (
    !options_list_location.contains(event.target) &&
    event.target !== checkbox_location
  ) {
    options_list_location.style.display = "none";
    checkbox_location.checked = false;
  }
});

document.addEventListener("click", function (event) {
  if (
    !options_list_members.contains(event.target) &&
    event.target !== checkbox_count
  ) {
    options_list_members.style.display = "none";
    checkbox_count.checked = false;
  }
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("open");
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

flatpickr(".select-date", {
  dateFormat: "d.m.Y",
});
