document.getElementById("customForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Валидация (можно расширить при желании)
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const desc = document.getElementById("description").value.trim();

  if (!name || !email || !desc) {
    alert("Please fill in all fields.");
    return;
  }

  // Псевдо-отправка
  document.getElementById("customForm").style.display = "none";
  document.getElementById("formSuccessMessage").classList.remove("hidden");
});
document.getElementById("customForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Считываем значения
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const desc = document.getElementById("description").value.trim();

  // Простая проверка
  if (!name || !email || !desc) {
    alert("Please fill in all fields.");
    return;
  }

  // Показываем сообщение об успехе
  const form = document.getElementById("customForm");
  const successMessage = document.getElementById("formSuccessMessage");

  form.style.display = "none";
  successMessage.classList.remove("hidden");
  successMessage.innerHTML = `
    <h3>Thank you, ${name}!</h3>
    <p>We’ve received your request. Our team will contact you soon.</p>
  `;
});