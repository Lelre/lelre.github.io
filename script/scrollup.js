const scroll = document.querySelector(".scrollup");
const section = document.querySelector(".pcx-header");

function showScrollButton(){
    if(section.getBoundingClientRect().top >= 0){
        scroll.style.display = "none";
    } else {
        scroll.style.display = "flex";
    }
}

window.onscroll = function(){
    showScrollButton();
}