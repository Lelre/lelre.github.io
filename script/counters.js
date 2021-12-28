const counters = document.querySelectorAll('.counter'); 
const trigger = document.querySelector('.pcx-cli');
let counter = 0;

 function clientCounters(){
  counters.forEach(counter => {  
    counter.innerText = '0'  

    const updateCounter = () => {  
      const target = +counter.getAttribute('data-target')  
      const c = +counter.innerText  
      const increment = target / 100;

      if(c < target) {  
        counter.innerText = `${Math.ceil(c + increment)}`  
        setTimeout(updateCounter, 30)  
      } else {  
        counter.innerText = target  
      };
      
    };

    updateCounter();
  });
 };

 window.onscroll = () => {
  if(trigger.getBoundingClientRect().top < 600 && counter <= 0){
    ++counter;
    clientCounters();
   };
 }