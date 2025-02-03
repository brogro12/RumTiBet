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

let calendarInstance = null;

function openCalendar() {
  const calendarInput = document.getElementById("calendar-input");

  // Инициализация Flatpickr с настройкой inline
  calendarInstance = flatpickr(calendarInput, {
    inline: true, // Календарь будет отображаться сразу
    position: "auto", // Позиционирование календаря
    onChange: function (selectedDates, dateStr) {
      updateDate(dateStr); // Обновляем значение после выбора даты
      closeCalendar(); // Закрываем календарь после выбора даты
    },
    clickOpens: true, // Позволяет открывать календарь при клике
  });

  // Программно открываем календарь
  calendarInstance.open(); // Открытие календаря с помощью Flatpickr
}

function updateDate(dateStr) {
  if (dateStr) {
    const dateObj = new Date(dateStr);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("ru-RU", { month: "long" });
    const year = dateObj.getFullYear();

    const label = document.getElementById("selected-date-label");
    label.textContent = `${day} ${month} ${year}`;

    // Создаем скрытое поле для формы
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "selected_date";
    hiddenInput.value = dateStr;
    document.querySelector(".select-container").appendChild(hiddenInput);
  }
}

// Функция для закрытия календаря
function closeCalendar() {
  if (calendarInstance) {
    calendarInstance.close(); // Закрываем календарь
  }
}

// Закрытие календаря при клике вне области
document.addEventListener("click", function (event) {
  const container = document.querySelector(".select-container");
  const calendarInput = document.getElementById("calendar-input");

  // Проверяем, если клик был вне календаря и поля для ввода
  if (
    !container.contains(event.target) &&
    !calendarInput.contains(event.target)
  ) {
    closeCalendar(); // Закрываем календарь
  }
});

console.log("123");
