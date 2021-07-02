function onlyOne(checkbox) {
  const checkboxes = document.getElementsByName("checkthis");

  checkboxes.forEach((box) => {
    if (box !== checkbox) box.checked = false;
  });
}

function scrollFunction() {
  const sectionCourses = document.querySelector(".section4");
  const goTop = document.getElementById("gototop");

  if (window.scrollY >= sectionCourses.offsetTop) {
    window.document.getElementById("gototop").style.display = "flex";
    goTop.style.display = "flex";
  } else {
    window.document.getElementById("gototop").style.display = "none";
    goTop.style.display = "none";
  }
}
window.onscroll = function () {
  scrollFunction();
};

function initAccordion() {
  const activeClass = "active";
  const accordionList = document.querySelectorAll(".accordion");

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(accordion) {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((accordion) => {
      accordion.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();
