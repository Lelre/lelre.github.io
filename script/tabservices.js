const tablinks = document.querySelectorAll(".tablinks");

tablinks.forEach((tab) => {
  tab.addEventListener("click", () => {
    tablinks.forEach((tab) => {
      tab.classList.remove("active");
      tab.nextElementSibling.classList.remove("active");
    });
    tab.classList.add("active");
    tab.nextElementSibling.classList.add("active");
  });
});