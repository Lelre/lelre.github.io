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

/* function openAccordion(){
  const accordionList = document.getElementsByClassName("accordion");
  var i;


  for (i = 0; i < accordionList.length; i++) {
    accordionList[i].addEventListener("click", function() {
      
      this.classList.toggle("active");
      const panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }

    });
  }
}
openAccordion();
 */

function initAccordion() {
  const accordionList = document.querySelectorAll(".accordion");
  const activeClass = "active";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function disableAccordion() {
      accordionList.forEach((accordion) => {
        accordion.classList.remove(activeClass);
        accordion.nextElementSibling.classList.remove(activeClass);
      });
    }
    function enableAccordion() {
      accordionList.forEach((accordion) => {
        this.classList.add(activeClass);
        this.nextElementSibling.classList.add(activeClass);
      });
    }

    accordionList.forEach((accordion) => {
      accordion.addEventListener("click", disableAccordion);
    });
    accordionList.forEach((accordion) => {
      accordion.addEventListener("click", enableAccordion);
    });
  }
}

initAccordion();
