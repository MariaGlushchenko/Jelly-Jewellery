// Получаем кнопки и блоки с контентом
const paginationButtons = document.querySelectorAll(".pagination-btn");
const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next-page");
const prevBtn = document.getElementById("prev-page");

let currentPage = 1;
const totalPages = pages.length;

// Показываем только нужную страницу
function showPage(pageNumber) {
  pages.forEach((page) => {
    page.classList.add("hidden");
    if (page.getAttribute("data-page") === String(pageNumber)) {
      page.classList.remove("hidden");
    }
  });

  // Обновляем активную кнопку
  paginationButtons.forEach((btn) => {
    if (btn.getAttribute("data-target") === String(pageNumber)) {
      btn.classList.add("active-page");
    } else {
      btn.classList.remove("active-page");
    }
  });

  // Блокировка кнопок на границах
  if (prevBtn) prevBtn.disabled = pageNumber === 1;
  if (nextBtn) nextBtn.disabled = pageNumber === totalPages;
}

// Навигация по номерам страниц
paginationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = Number(button.getAttribute("data-target"));
    currentPage = target;
    showPage(currentPage);
  });
});

// Кнопки «назад» и «вперёд»
if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });
}

// Показываем начальную страницу
showPage(currentPage);
