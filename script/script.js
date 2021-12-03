const btnMobile = document.getElementById('btn-menu');


function toggleMenu(event){

    if(event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');
    nav.classList.toggle('active-menu');

}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} 








const cardInfos = document.querySelectorAll('.card-info');
cardInfos.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('cardpcxheader');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('cardpcxheader');
  });

  

})











/* const accordionItem = document.querySelectorAll('.accordion');
const accordionOpened = document.querySelectorAll('.active');

accordionItem.forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');

    if(accordion.nextElementSibling.style.maxHeight){
      accordion.nextElementSibling.style.maxHeight = null;
    } else {
      accordion.nextElementSibling.style.maxHeight = accordion.nextElementSibling.scrollHeight + "px";
    }

    if(accordion.classList.contains('active')){
      accordion.classList.remove('active');
    } else {
      accordionOpened.forEach((accordionOpened) => {
        accordionOpened.classList.remove('active');
      });
      accordionOpened.classList.add('active');
    }
  })
}) */




/* const accordionTitle = document.querySelectorAll('.accordion');

accordionTitle.forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle("active");

    let panel = title.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    if(title.classList.contains("active")){
      title.classList.remove("active");
    } else {
      const accordionTitleOpen = document.querySelectorAll(".active");
      accordionTitleOpen.forEach((accordionTitleOpen) => {
        accordionTitleOpen.classList.remove("active");
      })
      accordionTitle.classList.add("active");
    }
  })
})
 */