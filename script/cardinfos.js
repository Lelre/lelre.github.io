const cardInfos = document.querySelectorAll(".card-info");

function selectedInfoCard() {
  //Primeiro item da array começa ativo
  cardInfos[0].classList.add("card-info-active");

  cardInfos.forEach((card) => {

    //Roda por todos os cards removendo a classe ativo
    card.addEventListener("mouseenter", () => {
      cardInfos.forEach((card) => {
        card.classList.remove("card-info-active");
      });

      //Após remover ativo de todos os cards, adiciona ao item com mouse ativo
      card.classList.add("card-info-active");
    });

    /*card.addEventListener("mouseleave", () => {
      card.classList.remove("card-info-active");
      cardInfos[0].classList.add("card-info-active");
    }); */
  
  });
}
selectedInfoCard();
