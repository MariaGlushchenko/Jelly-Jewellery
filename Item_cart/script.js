
const tabs = document.querySelectorAll(".tab-links li");
const tabContents = document.querySelectorAll(".tab-content");

и
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));
    tab.classList.add("active");
    const targetContent = document.getElementById(tab.dataset.tab);
    targetContent.classList.add("active");
  });
})
