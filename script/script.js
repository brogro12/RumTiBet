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

console.log("123");
