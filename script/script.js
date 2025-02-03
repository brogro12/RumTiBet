function toggleDropdown() {
  let container = document.querySelector(".select-container");
  let dropdown = document.querySelector(".select-dropdown");

  let isOpen = container.classList.contains("active");
  if (isOpen) {
    dropdown.style.display = "none";
    container.classList.remove("active");
  } else {
    dropdown.style.display = "block";
    container.classList.add("active");
  }
}

function selectOption(element, value) {
  document.querySelector(".span-label").textContent = value;
  document.getElementById("hidden_input").value = value;
  closeDropdown();
}

function closeDropdown() {
  let container = document.querySelector(".select-container");
  let dropdown = document.querySelector(".select-dropdown");
  let spanChoose = document.querySelector(".span-choose");

  dropdown.style.display = "none";
  container.classList.remove("active");
  spanChoose.style.display = "block";
}

document.addEventListener("click", function (event) {
  let container = document.querySelector(".select-container");
  if (!container.contains(event.target)) {
    closeDropdown();
  }
});

console.log("123");
