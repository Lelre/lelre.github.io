const accordionItem = document.querySelectorAll(".accordion");

//Função do accordion
function handleAccordionClick(event) {
  //Passa por todos os accordions e remove a classe active
  //Passa por todos os panels e altera do max-height para 0
  accordionItem.forEach((accordion) => {
    accordion.classList.remove("active");
    accordion.nextElementSibling.style.maxHeight = null;
  });

  // Seleciona o item atualmente clicado - Elemento Accordion
  const accordion = event.currentTarget;
  // Seleciona o próximo item do elemento atualmente clicado - Elemento Panel
  const panel = accordion.nextElementSibling; 

  //Adiciona ativo ao accordion, mudando o estilo do mesmo
  accordion.classList.add("active");
  //Altera do estilo do panel, atribuindo o tamanho do scroll do conteúdo a propriedade max-height do css
  panel.style.maxHeight = panel.scrollHeight + "px"; 
}

//Chamada da função ao clicar
accordionItem.forEach((accordion) => {
  accordion.addEventListener("click", handleAccordionClick);
});
