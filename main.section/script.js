// Открытие модального окна
function customForm_openModal() {
  const modal = document.getElementById("customFormOverlay");
  modal.style.display = "flex"; // нужно для отображения перед transition
  document.body.style.overflow = "hidden"; // блокировка фона
  setTimeout(() => {
    modal.classList.add("active"); // анимация плавного появления
  }, 10);
}

// Закрытие модального окна
function customForm_closeModal() {
  const modal = document.getElementById("customFormOverlay");
  modal.classList.remove("active"); // убираем анимацию
  setTimeout(() => {
    modal.style.display = "none"; // полностью скрываем
    document.body.style.overflow = ""; // возвращаем прокрутку
  }, 300); // ждём окончания CSS-анимации
}

// Закрытие по клику вне модального окна
document.addEventListener("click", (e) => {
  const overlay = document.getElementById("customFormOverlay");
  if (e.target === overlay) {
    customForm_closeModal();
  }
});

// Закрытие по клавише ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    customForm_closeModal();
  }
});


